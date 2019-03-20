<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="header-position">
          <span class="iconfont">&#xe63c;</span>
          <span class="header-position-city">{{this.addr.name}}</span>
        </div>
      </router-link>
    </div>
    <div class="header">
      <router-link tag="div" class="header-input" :to="'/search'">
        <span class="iconfont">&#xe62d;</span>
        搜索商家、商品名称
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['addr'])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-position
      color: #fff
      padding-left: .12rem
      width: 3rem
      display: flex
      line-height: .72rem
      height: .72rem
      .header-position-city
        padding-left: .05rem
        ellipsis()
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      /*margin-top: .12rem*/
      /*margin-left: .2rem*/
      /*padding-left: .2rem*/
      margin: .12rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      text-align: center
</style>
