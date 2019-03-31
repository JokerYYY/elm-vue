<template>
  <div>
    <ul>
      <li class="item border-bottom" v-for="item of shopListArr" :key="item.id">
        <img class="item-img" v-lazy="imgBaseUrl + item.image_path"/>
        <div class="item-info">
          <p class="item-title" :class="item.is_premium? 'premium': ''">{{item.name}}</p>
          <section class="rating_order">
            <section class="rating_order_left">
              <section class="rating_section">
                <rating-star :rating='item.rating'></rating-star>
                <span class="rating_num">{{item.rating}}</span>
              </section>
              <section class="order_section">
                月售{{item.recent_order_num}}单
              </section>
            </section>
            <section class="rating_order_right">
              <span class="delivery_style" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
            </section>
          </section>
          <section class="fee_distance">
            <p class="fee">
              ¥{{item.float_minimum_order_amount}}起送
              <span class="segmentation">/</span>
              {{item.piecewise_agent_fee.tips}}
            </p>
            <p class="distance_time">
              <span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}</span>
              <span v-else>{{item.distance}}</span>
              <span class="segmentation">/</span>
              <span class="order_time">{{item.order_lead_time}}</span>
            </p>
          </section>
        </div>
      </li>
    </ul>
    <div class="touend" v-show="touend">没有更多了</div>
    <common-loading v-show="!loading"></common-loading>
  </div>
</template>

<script>
import RatingStar from 'common/start/RatingStar'
import CommonLoading from 'common/loading/Loading'
import {shopList} from '../../service/getData'

import { mapState } from 'vuex'
export default {
  name: 'ShopList',
  data () {
    return {
      offset: 20, // 批次加载店铺列表，每次加载20个 limit = 20
      shopListArr: [], // 店铺列表数据
      imgBaseUrl: 'http://elm.cangdu.org/img/', // 图片前缀
      loading: true, // 防止重复请求商家列表开关
      touend: false // 到底了
    }
  },
  computed: {
    ...mapState({
      addr: 'addr'
    }),
    currentAddr: {
      get: function () {
        if (typeof this.addr === 'string') {
          return JSON.parse(this.addr)
        }
        return this.addr
      }
    }
  },
  components: {
    RatingStar,
    CommonLoading
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      // 获取数据
      let res = await shopList(this.currentAddr.latitude, this.currentAddr.longitude, this.offset)
      // res = res.data
      this.shopListArr = [...res]
    },
    async handleScroll () {
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        if (this.loading) { // 阀门，防止重复请求数据
          this.loading = false
          this.offset += 20
          // 获取数据
          let res = await shopList(this.currentAddr.latitude, this.currentAddr.longitude, this.offset)
          // res = res.data
          this.shopListArr = [...this.shopListArr, ...res]
          if (res.length < 20) {
            this.touend = true // 到底了
          }
          this.loading = true
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 离开当前页时移除滑动监听事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    background: #fff
    .item-img
      width: 1.1rem
      height: 1.1rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .25rem
        font-weight: 700
        width: 80%
        ellipsis()
      .rating_order
        display: flex
        justify-content: space-between
        .rating_order_left
          display: flex
          .rating_section
            display: flex
          .order_section
            color: #666
            font-size: .16rem
            margin-left: -.04rem
            transform: scale(0.8)
        .rating_num
          margin: 0 0.04rem
          font-size: .2rem
          color: #ff9a0d
        .rating_order_right
          margin-right: .25rem
          .delivery_style
            font-size: .12rem
            color: #fff
            background-color: #3190e8
            border: 0.004rem solid #3190e8
      .fee_distance
        margin-top: .2rem
        display: flex
        justify-content: space-between
        font-size: .2rem
        color: #666
        .fee
          font-size: .2rem
          transform: scale(0.9)
        .distance_time
          transform: scale(0.9)
          .order_time
            color: #3190e8
      .premium::before
        content: '品牌'
        display: inline-block
        font-size: .2rem
        line-height: .27rem
        color: #333
        background-color: #ffd930
        padding: .02rem .1rem
        border-radius: .1rem
        margin-right: .08rem
  .touend
    padding-bottom: 1rem
    height: .44rem
    line-height: .44rem
    text-align: center
    font-size: .24rem
    color: #777
</style>
