<template>
  <div class="addr-contain">
    <addr-header></addr-header>
    <addr-search></addr-search>
  </div>
</template>

<script>
import AddrHeader from './components/Header'
import AddrSearch from './components/Search'
export default {
  name: 'Addr',

  components: {
    AddrHeader,
    AddrSearch
  }
}
</script>

<style lang="stylus" scoped>
  .addr-contain
    height: 20rem
    background-color: #F5F5F5
</style>
