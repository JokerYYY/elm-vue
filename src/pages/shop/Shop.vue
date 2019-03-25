<template>
  <div>
    <header-shop></header-shop>
    <food-shop></food-shop>
  </div>
</template>

<script>
import HeaderShop from './components/Header'
import FoodShop from './components/Food'
export default {
  name: 'Shop',
  components: {
    HeaderShop,
    FoodShop
  }
}
</script>

<style lang="stylus" scoped>

</style>
