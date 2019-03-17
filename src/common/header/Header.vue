<template>
  <div class="header">
    {{this.content}}
    <div class="iconfont header-icon" v-if="goBack" @click="$router.go(-1)">&#xe604;</div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    content: String,
    goBack: Boolean
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    .header-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      color: #fff
</style>
