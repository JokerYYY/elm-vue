<template>
  <div class="header">
    {{this.current.city}}
    <router-link to="/city">
      <div class="iconfont header-icon">&#xe604;</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddrHeader',
  computed: {
    ...mapState({
      currentCity: 'citySp'
    }),
    current: {
      get: function () {
        if (typeof this.currentCity === 'string') {
          return JSON.parse(this.currentCity)
        }
        return this.currentCity
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      color: #fff
</style>
