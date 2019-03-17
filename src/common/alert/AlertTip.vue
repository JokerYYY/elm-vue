<template>
  <div class="alet_container">
    <section class="tip_text_container">
      <div class="tip_icon iconfont">
        &#xe605;
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      positionY: 0,
      timer: null
    }
  },
  props: ['alertText'],
  methods: {
    closeTip () {
      this.$emit('closeTip')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @keyframes tipMove{
    0%   { transform: scale(1) }
    35%  { transform: scale(.8) }
    70%  { transform: scale(1.1) }
    100% { transform: scale(1) }
  }
  .alet_container{
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 200
  }
  .tip_text_container{
    position: absolute
    top: 50%
    left: 50%
    margin-top: -2.4rem
    margin-left: -2.4rem
    width: 4.8rem
    animation: tipMove .4s
    background-color: rgba(255,255,255,1)
    border: 1px
    padding-top: .24rem
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    border: 1px
    border-radius: 0.25rem
    .tip_icon{
      wh(1.2rem, 1.2rem)
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      font-size: 1.2rem
      color: #f8cb86
      span:nth-of-type(1){
        wh(.0048rem, .6rem)
        background-color: #f8cb86
      }
      span:nth-of-type(2){
        wh(.08rem, .08rem)
        border: 1px
        border-radius: 50%
        margin-top: .08rem
        background-color: #f8cb86
      }
    }
    .tip_text{
      sc(.28rem, #333)
      line-height: .36rem
      text-align: center
      margin-top: .32rem
      padding: 0 .16rem
    }
    .confrim{
      sc(.32rem, #fff);
      font-weight: bold;
      margin-top: .32rem;
      background-color: #4cd964;
      width: 100%;
      text-align: center;
      line-height: .72rem;
      border: 1px;
      border-bottom-left-radius: 0.01rem;
      border-bottom-right-radius: 0.01rem;
    }
  }

</style>
