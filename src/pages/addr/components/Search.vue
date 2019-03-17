<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search_input" type="search" placeholder="请输入地址" v-on:input="searchAddr()" />
    </div>
    <div class="title border-topbottom"  v-show="!historytitle">请选择匹配的地址</div>
    <div class="title border-topbottom"  v-show="historytitle">搜索历史</div>
    <div class="title border-topbottom"  v-show="placeNone">很抱歉！搜索无结果</div>
    <div class="pois border-bottom" v-for="(item, index) in placelist" :key="index" @click="nextpage(index, item.geohash)">
      <p class="pois_name">{{item.name}}</p>
      <p class="pois_address">{{item.address}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {getStore, setStore, searchPlace} from '../../../service/getData'

export default {
  name: 'AddrSearch',
  data () {
    return {
      keyword: '',
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部
      placeNone: false // 搜索无结果，显示提示信息
    }
  },
  computed: {
    ...mapState({
      // 当前定位城市
      currentCitys: 'city'
    }),
    current: {
      get: function () {
        if (typeof this.currentCitys === 'string') {
          return JSON.parse(this.currentCitys)
        }
        return this.currentCitys
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      // 搜索历史
      if (getStore('placeHistory')) {
        this.placelist = JSON.parse(getStore('placeHistory'))
      }
    },
    searchAddr () {
      // 输入值不为空时才发送信息
      if (this.keyword) {
        searchPlace(this.current.cityId, this.keyword).then(res => {
          res = res.data
          this.historytitle = false
          this.placelist = res
          this.placeNone = res.length === 0
        })
      } else {
        this.initData()
      }
    },
    nextpage (index, geohash) {
      let history = getStore('placeHistory')
      let choosePlace = this.placelist[index]
      if (history) {
        let checkrepeat = false
        this.placeHistory = JSON.parse(history)
        this.placeHistory.forEach(hisItem => {
          if (hisItem.geohash === geohash) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace)
        }
      } else {
        this.placeHistory.push(choosePlace)
      }
      setStore('placeHistory', this.placeHistory)
      this.changeAddr(this.placelist[index])
      this.$router.push({path: '/home', query: {geohash}})
    },
    ...mapMutations({
      changeAddr: 'changeAddr'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .border-topbottom
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .search
    height: .72rem
    padding: 0 .1rem
    margin-top: .12rem
    .search_input
      box-sizing: border-box
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
  .pois
    padding: .2rem
    background: #fff
    .pois_name
      width: 90%
      font-size: .26rem
      color: #333
      padding-bottom: .1rem
      ellipsis()
    .pois_address
      width: 90%
      font-size: .2rem
      color: #999
      ellipsis()
</style>
