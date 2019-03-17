<template>
  <div>
    <common-header :content="content" :goBack="true"></common-header>
    <div class="login_container">
      <section class="input_container border-bottom">
        <input class="account_input pad_left" type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container border-bottom">
        <input class="account_input pad_left" type="password" placeholder="密码" v-model="passWord"  v-show="!showPsd" >
        <input class="account_input pad_left" type="text" placeholder="密码" v-model="passWord"  v-show="showPsd">
        <span class="iconfont account_icon" v-show="!showPsd" @click="showPassword()">&#xe615;</span>
        <span class="iconfont account_icon" v-show="showPsd" @click="showPassword()">&#xe618;</span>
      </section>
      <section class="input_container border-bottom">
        <input class="account_input pad_left" type="password" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <img v-show="captchaCodeImg" class="img_change_img_content" :src="captchaCodeImg" @click="getCaptchaCode()">
      </section>
      <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
      </p>
      <p class="login_tips">
        注册过的用户可凭账号密码登录
      </p>
      <div class="login_btn" @click="mobileLogin">登录</div>
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
  </div>
</template>
<script>
import CommonHeader from 'common/header/Header'
import AlertTip from 'common/alert/AlertTip'
import {getcaptchas, accountLogin} from '../../service/getData'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      content: '登录',
      userAccount: '', // 账号
      passWord: '', // 密码
      showPsd: false, // 是否显示密码
      captchaCodeImg: null, // 验证码
      codeNumber: null, // 验证码
      userInfo: '', // 登录返回信息
      showAlert: false, // 显示提示组件
      alertText: null // 提示的内容
    }
  },
  mounted () {
    this.getCaptchaCode()
  },
  methods: {
    ...mapMutations([
      'setUserInfo'
    ]),
    async getCaptchaCode () {
      let res = await getcaptchas()
      // res = res.data
      this.captchaCodeImg = res.code
    },
    showPassword () {
      this.showPsd = !this.showPsd
    },
    // 发送登录信息
    async mobileLogin () {
      if (!this.userAccount) {
        this.showAlert = true
        this.alertText = '请输入用户名'
        return
      } else if (!this.passWord) {
        this.showAlert = true
        this.alertText = '请输入密码'
        return
      } else if (!this.codeNumber) {
        this.showAlert = true
        this.alertText = '请输入验证码'
        return
      }
      // 用户名登录
      this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber)
      console.log(JSON.stringify(this.userInfo))
      if (!this.userInfo.user_id) {
        this.showAlert = true
        this.alertText = this.userInfo.message
      } else {
        this.setUserInfo(this.userInfo)
        this.$router.go(-1)
      }
    },
    closeTip () {
      this.showAlert = false
    }
  },
  components: {
    CommonHeader,
    AlertTip
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .login_container
      margin-top: .2rem
      .border-bottom
        &:before
          border-color: #ccc
      .input_container
        background: #fff
        line-height: .84rem
        height: .84rem
        display: flex
        color: #ccc
        justify-content: space-between
        padding-right: .32rem
        .account_icon
          display: inline-block
          padding: 0 .32rem
          font-size: .5rem
          color: #333
        .account_input
          flex: 1
        .img_change_img_content
          padding: .1rem .2rem
        .pad_left
          padding-left: .2rem
    .login_tips
      sc(.2rem, red);
      padding: .16rem .24rem;
      line-height: .2rem;
    .login_btn
      height: .52rem
      line-height: .52rem
      margin: 0 .2rem .4rem;
      sc(.28rem, #fff);
      background-color: #4cd964;
      padding: .2rem 0;
      border: .02rem;
      border-radius: .1rem;
      text-align: center;
</style>
