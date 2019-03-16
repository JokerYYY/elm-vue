<template>
  <section class="user_reward">
    <div class="user_reward_icon">
      <span class="iconfont user_reward_shopmall">&#xe614;</span>
      金币商城
    </div>
    <div class="user_reward_icon">
      <span class="iconfont user_reward_share">&#xe641;</span>
      分享得现金
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserReward'
}
</script>

<style lang="stylus" scoped>
  .user_reward
    margin-top: .2rem
    .user_reward_icon
      color: #666
      padding-left: .4rem
      display: block
      height: .9rem
      line-height: .9rem
      background: #fff
      .user_reward_shopmall
        color: rgb(148, 217, 74)
      .user_reward_share
        color: rgb(252, 123, 83)
</style>
