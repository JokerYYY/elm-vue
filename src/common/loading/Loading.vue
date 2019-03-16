<template>
  <div>
    <div class="letter-holder clearfix">
      <div class="letter-first letter">L</div>
      <div class="letter-two letter">o</div>
      <div class="letter-three letter">a</div>
      <div class="letter-four letter">d</div>
      <div class="letter-five letter">i</div>
      <div class="letter-six letter">n</div>
      <div class="letter-seven letter">g</div>
      <div class="letter-eight letter">.</div>
      <div class="letter-nine letter">.</div>
      <div class="letter-ten letter">.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonLoading'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .letter-holder
    padding-bottom: 1rem
    height: .44rem
    line-height: .44rem
    text-align: center
    .letter
      animation-name: loading
      animation-duration: 1.6s
      animation-iteration-count: infinite
      display: inline-block
      font-size: .24rem
      color: #777
    .letter-first
      animation-delay: 0.48s
    .letter-two
      animation-delay: 0.6s
    .letter-three
      animation-delay: 0.72s
    .letter-four
      animation-delay: 0.84s
    .letter-five
      animation-delay: 0.96s
    .letter-six
      animation-delay: 1.08s
    .letter-seven
      animation-delay: 1.2s
    .letter-eight
      animation-delay: 1.32s
    .letter-nine
      animation-delay: 1.44s
    .letter-ten
      animation-delay: 1.56s
</style>
