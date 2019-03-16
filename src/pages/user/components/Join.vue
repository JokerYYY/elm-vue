<template>
    <section class="user_reward">
      <div  class="user_reward_icon border-bottom">
        <span class="iconfont user_reward_shopmall">&#xe71d;</span>
        我的客服
      </div>
      <div  class="user_reward_icon">
        <span class="iconfont user_reward_share">&#xe721;</span>
        加盟合作
      </div>
    </section>
</template>

<script>
export default {
  name: 'UserJoin'
}
</script>

<style lang="stylus" scoped>
  .user_reward
    margin-top: .2rem
    .user_reward_icon
      color: #666
      padding-left: .4rem
      height: .9rem
      line-height: .9rem
      background: #fff
      .user_reward_shopmall
        color: #25a4bb
      .user_reward_share
        color: #25a4bb
</style>
