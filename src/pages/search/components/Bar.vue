<template>
  <div>
    <div class="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input"
             v-model="keyword" v-on:input="searchSeller('')">
      <span></span>
    </div>
    <div class="title border-topbottom"  v-show="showHistory">搜索历史</div>
    <div class="history_list border-bottom" v-for="(item, index) in historyList"
         :key="index" v-show="showHistory" @click="searchSeller(item)">
      <h4 class="search_name">{{item}}</h4>
    </div>
    <div class="title border-topbottom"  v-show="showSearch">请选择匹配的地址</div>
    <div v-show="!showHistory">
      <ul>
        <li class="item border-bottom" v-for="item of shopListArr" :key="item.id" @click="saveHistory()">
          <img class="item-img" :src="imgBaseUrl + item.image_path"/>
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
                <!--{{item.piecewise_agent_fee.tips}}-->
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
    </div>
    <div class="title border-topbottom"  v-show="placeNone">很抱歉！搜索无结果</div>
  </div>
</template>

<script>
import {getStore, searchRestaurant, setStore} from '../../../service/getData'
import { mapState } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      keyword: '',
      historyList: [], // 历史搜索列表
      shopListArr: [], // 根据关键字查询的商家列表
      showHistory: true, // 默认显示搜索历史头部
      showSearch: false, // 是否展示商家列表
      placeNone: false, // 搜索无结果，显示提示信息
      imgBaseUrl: 'http://elm.cangdu.org/img/'
    }
  },
  computed: {
    ...mapState({
      currentAddr: 'addr'
    })
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      // 搜索历史
      if (getStore('searchHistory')) {
        this.historyList = JSON.parse(getStore('searchHistory'))
      }
    },
    // 查询商家
    async searchSeller (historyValue) {
      if (historyValue) {
        this.keyword = historyValue
      } else if (!this.keyword) {
        return
      }
      // 隐藏历史记录
      this.showHistory = false
      // 获取搜索结果
      let res = await searchRestaurant(this.currentAddr.geohash, this.keyword)
      this.shopListArr = res.data
      this.showSearch = this.shopListArr.length
      this.placeNone = !this.shopListArr.length
    },
    saveHistory () {
      let history = getStore('searchHistory')
      if (history) {
        let checkrepeat = false
        this.historyList = JSON.parse(history)
        this.historyList.forEach(item => {
          if (item === this.keyword) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.historyList.push(this.keyword)
        }
      } else {
        this.historyList.push(this.keyword)
      }
      setStore('searchHistory', this.historyList)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .border-bottom
    &:before
      border-color: #ccc
  .search
    height: .84rem
    padding: 0 .1rem
    background: #eee
    .search_input
      box-sizing: border-box
      margin: 0.11rem 0
      width: 100%
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .history_list
    padding: .2rem
    background: #fff
    .search_name
      width: 90%
      font-size: .26rem
      color: #333
      padding-bottom: .1rem
      ellipsis()
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
</style>
