<template>
  <section class="info-data clearfix">
    <ul class="clear">
      <router-link to="/balance" tag="li" class="info-data-link">
        <p class="info-data-content">
          <span class="info-data-balance-left font-size-left">{{balance}}</span>
          <span class="info-data-balance-right font-size-right">元</span>
        </p>
        <span class="info-data-bottom">钱包</span>
      </router-link>
      <router-link to="/redenve" tag="li" class="info-data-link">
        <p class="info-data-content">
          <span class="info-data-redenve-left font-size-left">{{count}}</span>
          <span class="info-data-redenve-right font-size-right">个</span>
        </p>
        <span class="info-data-bottom">红包</span>
      </router-link>
      <router-link to="/gold" tag="li" class="info-data-link">
        <p class="info-data-content">
          <span class="info-data-gold-left font-size-left">{{pointNumber}}</span>
          <span class="info-data-gold-right font-size-right">个</span>
        </p>
        <span class="info-data-bottom">金币</span>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'UserData',
  props: ['balance', 'count', 'pointNumber']
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .info-data
    width:100%
    background:#fff
    box-sizing: border-box
    .info-data-link
      background: #fff
      float:left
      width:33.33%
      height: 1.5rem
      display:inline-block
      text-align: center
      border-right:1px solid #f1f1f1
      box-sizing: border-box
      .info-data-content
        padding: .25rem 0rem .2rem 0
        .font-size-left
          font-size: .5rem
        .font-size-right
          font-size: .32rem
        .info-data-balance-left
          color: $bgColor
        .info-data-balance-right
          color: $bgColor
        .info-data-redenve-left
          color:#ff5f3e
        .info-data-redenve-right
          color:#ff5f3e
        .info-data-gold-left
          color: #FFD700
        .info-data-gold-right
          color: #FFD700
      .info-data-bottom
        color: #666
</style>
