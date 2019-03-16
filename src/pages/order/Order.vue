<template>
  <div>
    <common-header :content="content"></common-header>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import CommonHeader from 'common/header/Header'
import FootGuide from 'common/footer/FootGuide'
export default {
  name: 'Order',
  data () {
    return {
      content: '订单列表'
    }
  },
  components: {
    CommonHeader,
    FootGuide
  }
}
</script>
<style lang="stylus" scoped>

</style>
