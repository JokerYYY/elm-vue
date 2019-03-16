<template>
  <div class="header">
    {{this.content}}
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    content: String
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
</style>
