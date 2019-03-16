<template>
  <div class="rating_container">
    <section class="star_container">
      <svg  class="grey_fill" v-for="num in 5" :key="num">
        <use xlink:href="#icon-wujiaoxing"></use>
      </svg>
    </section>
    <div :style="'width:' + rating*0.8/5 + 'rem'" class="star_overflow">
      <section class="star_container" >
        <svg  class="orange_fill" v-for="num in 5" :key="num">
          <use xlink:href="#icon-wujiaoxing"></use>
        </svg>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingStar',
  props: ['rating']
}
</script>

<style lang="stylus" scoped>
  .rating_container
    position: relative
    top: .05rem
    width: .8rem
    height: .16rem
    .star_container
      display: flex
      position: absolute
      width: .8rem
      height: .16rem
      .grey_fill
        fill: #d1d1d1
    .star_overflow
      overflow: hidden
      position: relative
      height: 100%
      .star_container
        display: flex
        position: relative
        width: .8rem
        height: .16rem
        .orange_fill
          fill: #ff9a0d
</style>
