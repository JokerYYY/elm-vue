<template>
  <section class="user_addr">
    <router-link class="user_addr_icon" :to="'/'">
      <span class="iconfont user_addr_logo">&#xe63c;</span>
      我的地址
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'UserAddr'
}
</script>

<style lang="stylus" scoped>
  .user_addr
    margin-top: .2rem
    .user_addr_icon
      color: #666
      padding-left: .4rem
      display: block
      height: .9rem
      line-height: .9rem
      background: #fff
      .user_addr_logo
        color: #25a4bb
</style>
