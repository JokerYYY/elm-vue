<template>
  <div>
    <nav class="header_goback" @click="$router.go(-1)">
      <span class="iconfont goback">&#xe604;</span>
    </nav>
    <header class="header_contain">
      <img src="http://elm.cangdu.org/img/1697652867428842.jpg" class="header_bg_img"/>
      <div class="header_desc">
        <section class="header_desc_top">
          <section class="desc_left">
            <img src="http://elm.cangdu.org/img/1697652867428842.jpg" class="desc_left_img">
          </section>
          <section class="desc_right">
            <h4 class="desc_right_title">效果展示</h4>
            <p class="desc_right_sell">评分：4.8 / 月售108单 / 商家配送</p>
            <p class="desc_right_announ">公告：欢迎光临</p>
          </section>
        </section>
        <section class="header_desc_footer">
          <p class="header_desc_footer_left">
            <span class="offer">满减</span>
            <span class="offer_text">满30减5，满60减8（APP专享）</span>
          </p>
          <p class="header_desc_footer_right">一个优惠</p>
        </section>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderShop'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
    .header_goback {
      position: fixed
      height: $headerHeight
      line-height: $headerHeight
      z-index: 11

      .goback {
        display: block
        width: .64rem
        text-align: center
        font-size: .5rem
        padding-left: 0.05rem
        color: #CCC
      }
    }
      .header_contain {
        position: relative
        overflow: hidden
        color: #FFF
        .header_bg_img {
          position: absolute
          width: 100%
          top: 0
          left: 0
          filter: blur(10px)
          z-index: 9
        }

        .header_desc {
          position: relative
          z-index: 10
          background-color: rgba(119, 103, 137, 0.43)
          padding: 0.2rem 0 0.1rem 0.2rem
          width: 100%
          overflow: hidden

          .header_desc_top {
            display: flex
            .desc_left {
              margin-right: .1rem

              .desc_left_img {
                wh(1.2rem, 1.2rem)
                display: block
              }
            }
            .desc_right {
              flex: 1
              min-width: 0
              padding-right: .4rem
              .desc_right_title {
                font-size: .3rem
                font-weight: bold
                margin-bottom: .15rem
              }
              .desc_right_sell {
                font-size: .15rem
                margin-bottom: .15rem
              }
              .desc_right_announ {
                font-size: .15rem
                ellipsis()
              }
            }
        }
          .header_desc_footer {
            display: flex
            justify-content: space-between
            padding: .2rem .4rem 0 0
            .header_desc_footer_left {
              width: 75%
              ellipsis()
              .offer {
                font-size: .2rem
                display: inline-block
                padding: .04rem
                border-radius: .02rem
                background-color: rgb(240, 115, 115)
              }
            }
          }
        }
      }
</style>
