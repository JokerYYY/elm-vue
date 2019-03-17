<template>
  <div class="addr-contain">
    <common-header :content="current.city" :goBack="true"></common-header>
    <addr-search></addr-search>
  </div>
</template>

<script>
import CommonHeader from 'common/header/Header'
import AddrSearch from './components/Search'
import { mapState } from 'vuex'
export default {
  name: 'Addr',
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
    current: {
      get: function () {
        if (typeof this.currentCity === 'string') {
          return JSON.parse(this.currentCity)
        }
        return this.currentCity
      }
    }
  },
  components: {
    CommonHeader,
    AddrSearch
  }
}
</script>

<style lang="stylus" scoped>
  .addr-contain
    height: 20rem
    background-color: #F5F5F5
</style>
