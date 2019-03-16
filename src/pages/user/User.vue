<template>
  <div>
    <common-header :content="content"></common-header>
    <user-info></user-info>
    <user-data></user-data>
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

export default {
  name: 'User',
  data () {
    return {
      content: '我的'
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
