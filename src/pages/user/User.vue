<template>
  <div>
    <common-header :content="content" :goBack="true"></common-header>
    <user-info :username="username" :mobile="mobile"></user-info>
    <user-data :balance="balance" :count="count" :pointNumber="pointNumber"></user-data>
    <user-addr></user-addr>
    <user-reward></user-reward>
    <user-join></user-join>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import CommonHeader from 'common/header/Header'
import UserInfo from './components/Info'
import UserData from './components/Data'
import UserAddr from './components/Addr'
import UserReward from './components/Reward'
import UserJoin from './components/Join'
import FootGuide from 'common/footer/FootGuide'
import { mapState } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      content: '',
      mobile: '暂未绑定手机号', // 手机
      balance: 0, // 余额
      count: 0, // 红包
      pointNumber: 0 // 金币
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      if (this.userInfo && this.userInfo.user_id) {
        this.username = this.userInfo.username
        this.mobile = this.userInfo.mobile || '暂未绑定手机号'
        this.balance = this.userInfo.balance
        this.count = this.userInfo.gift_amount
        this.pointNumber = this.userInfo.point
      } else {
        this.username = '登录/注册'
        this.mobile = '暂无绑定手机号'
      }
    }
  },
  components: {
    CommonHeader,
    UserInfo,
    UserData,
    UserAddr,
    UserReward,
    UserJoin,
    FootGuide
  }
}
</script>
<style lang="stylus" scoped>

</style>
