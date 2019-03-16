<template>
  <div>
    <home-header></home-header>
    <home-icon :iconsList="iconsList"></home-icon>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <!--<home-weekend :weekendList="weekendList"></home-weekend>-->
    <foot-guide></foot-guide>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import FootGuide from 'common/footer/FootGuide'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
      loading: false
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
    FootGuide
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity && this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
