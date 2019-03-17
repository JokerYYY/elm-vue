<template>
  <div>
    <div class="title shoplist-title">推荐商家</div>
    <shop-list></shop-list>
  </div>
</template>
<script>
import ShopList from 'common/shop/ShopList'
export default {
  name: 'HomeRecommend',
  components: {
    ShopList
  }
}
</script>
<style lang="stylus" scoped>
  .title
    display: flex
    line-height: .8rem
    background: #fff
    align-items: center
    justify-content: center
</style>
