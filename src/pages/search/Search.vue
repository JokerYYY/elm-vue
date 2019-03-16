<template>
  <div>
    <common-header :content="content"></common-header>
    <search-bar></search-bar>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import SearchBar from './components/Bar'
import FootGuide from 'common/footer/FootGuide'
import CommonHeader from 'common/header/Header'
export default {
  name: 'Search',
  data () {
    return {
      content: '搜索',
    }
  },
  components: {
    FootGuide,
    SearchBar,
    CommonHeader,
  }
}
</script>
<style lang="stylus" scoped>

</style>
