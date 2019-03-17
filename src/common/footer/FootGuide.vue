<template>
  <section id="foot_guide">
    <router-link tag="section" class="guide_item" :to="'/home'">
      <span class="iconfont guide_item_icon guide_item_home" :class="{guide_item_light : isLight0}">&#xe722;</span>
      <span class="guide_item_desc">外卖</span>
    </router-link>
    <router-link tag="section" class="guide_item" :to="'/search'">
      <span class="iconfont guide_item_icon" :class="{guide_item_light : isLight1}">&#xe603;</span>
      <span class="guide_item_desc">发现</span>
    </router-link>
    <router-link tag="section" class="guide_item" :to="'/order'">
      <span class="iconfont guide_item_icon" :class="{guide_item_light : isLight2}">&#xe616;</span>
      <span class="guide_item_desc">订单</span>
    </router-link>
    <router-link tag="section" class="guide_item" :to="'/user'">
      <span class="iconfont guide_item_icon" :class="{guide_item_light : isLight3}">&#xe617;</span>
      <span class="guide_item_desc">我的</span>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'FootGuide',
  data () {
    return {
      isLight0: false,
      isLight1: false,
      isLight2: false,
      isLight3: false
    }
  },
  methods: {
    setFalse () {
      this.isLight0 = false
      this.isLight1 = false
      this.isLight2 = false
      this.isLight3 = false
    }
  },
  mounted () {
    this.setFalse()
    const path = this.$route.path
    if (path.startsWith('/home')) {
      this.isLight0 = true
    }
    if (path.startsWith('/search')) {
      this.isLight1 = true
    }
    if (path.startsWith('/order')) {
      this.isLight2 = true
    }
    if (path.startsWith('/user')) {
      this.isLight3 = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  #foot_guide
    background-color: #fff
    position: fixed
    z-index: 100
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 1rem
    display: flex
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1)
    .guide_item
      flex: 1
      display: flex
      text-align: center
      flex-direction: column
      align-items: center
      color: #666
      .guide_item_icon
        font-size: .5rem
        margin: .05rem 0
      .guide_item_home
        font-size: .6rem
        margin: 0
      .guide_item_light
        color: #25a4bb
      .guide_item_desc
        font-size: .1rem
</style>
