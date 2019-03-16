<template>
  <div>
    <section>
      <div class="user">
        <div class="user_img">
          <span class="iconfont user_img_icon">&#xe62b;</span>
        </div>
        <router-link tag="div" class="user_info" :to="'/login'">
            <p class="user_info_name">丽水湾</p>
            <p class="user_info_photo">
              <span class="iconfont">&#xe607;</span>
              <span>138****5236</span>
            </p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .user
    display: flex
    padding: 0rem .4rem
    color: #fff
    align-items: center
    background: $bgColor
    .user_img
      width: 1rem
      height: 1.25rem
      .user_img_icon
        width: 100%
        height: 100%
        text-align: center
        font-size: 1rem
    .user_info
      flex: 1
      margin-left: .2rem
      min-width: 0
      height: 1rem
      .user_info_name
        line-height: .5rem
        font-size: .32rem
        ellipsis()
      .user_info_photo
        ellipsis()
</style>
