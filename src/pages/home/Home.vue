<template>
  <div>
    <home-header></home-header>
    <home-icon :iconsList="iconsList" :geohash="geohash"></home-icon>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-recommend></home-recommend>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import FootGuide from 'common/footer/FootGuide'
import axios from 'axios'
import { mapState } from 'vuex'
import { getCurrentCity } from '../../service/getData'
export default {
  name: 'Home',
  data () {
    return {
      geohash: '',
      swiperList: [],
      iconsList: [],
      loading: false
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    FootGuide
  },
  computed: {
    ...mapState(['city']),
    currentCity: {
      get: function () {
        if (typeof this.city === 'string') {
          return JSON.parse(this.city)
        }
        return this.city
      }
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/mock/home?city=' + this.currentCity.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
      }
    }
  },
  async beforeMount () {
    if (!this.$route.query.geohash) {
      getCurrentCity().then(res => {
        res = res.data
        this.geohash = res.latitude + ',' + res.longitude
      })
    } else {
      this.geohash = this.$route.query.geohash
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
