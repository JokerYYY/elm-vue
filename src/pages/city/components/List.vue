<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前定位城市</div>
          <div class="button-list">
            <div class="button-wrapper"  @click="handleBtnClicks(current.cityId,current.city)">
              <div class="button">{{this.current.city}}</div>
            </div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
            @click="handleBtnClicks(item.id,item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerCity of city" :key="innerCity.id"
               @click="handleBtnClicks(innerCity.id,innerCity.name)">
            {{innerCity.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  data () {
    return {
      city: {
        city: '未定位',
        cityId: '-1'
      },
      testShow: false
    }
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      // 当前定位城市
      currentCitys: 'citySp',
      currentCity: 'city'
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
  methods: {
    // handleBtnClick (name) {
    //   this.changeCity(name)
    //   this.$router.push('/addr')
    // },
    handleBtnClicks (id, city) {
      this.city.city = city
      this.city.cityId = id
      this.changeCitys(this.city)
      this.$router.push('/addr')
    },
    ...mapMutations({
      changeCitys: 'changeCitys',
      changeCity: 'changeCity'
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      background: #fff
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        background: #fff
        line-height: .76rem
        padding-left: .2rem
</style>
