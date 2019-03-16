<template>
  <div>
    <common-header :content="content"></common-header>
    <div class="loginContainer">
      <section class="input_container border-bottom">
        <input class="account_input" type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container border-bottom">
        <input class="account_input" type="password" placeholder="密码" v-model.lazy="userAccount">
      </section>
      <!--<section class="input_container">-->
        <!--<input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">-->
        <!--<input v-else type="text" placeholder="密码"  v-model="passWord">-->
      <!--</section>-->
      <!--<section class="input_container captcha_code_container">-->
        <!--<input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">-->
        <!--<div class="img_change_img">-->
          <!--<img v-show="captchaCodeImg" :src="captchaCodeImg">-->
          <!--<div class="change_img" @click="getCaptchaCode">-->
            <!--<p>看不清</p>-->
            <!--<p>换一张</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</section>-->
    </div>
  </div>
</template>
<script>
import CommonHeader from 'common/header/Header'
import {getcaptchas} from '../../service/getData'
export default {
  name: 'Login',
  data () {
    return {
      content: '登录',
      showPassword: false, // 是否显示密码
      captchaCodeImg: null, // 验证码
      codeNumber: null // 验证码
    }
  },
  mounted () {
    this.getCaptchaCode()
  },
  methods: {
    async getCaptchaCode () {
      let res = await getcaptchas()
      res = res.data
      this.captchaCodeImg = res.code
    }
  },
  components: {
    CommonHeader
  }
}
</script>
<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color: #ccc
  .input_container
    background: #fff
    line-height: .84rem
    height: .84rem
    display: flex
    padding-left: .2rem
    .account_input
      flex: 1
</style>
