<template>
  <div>
    <common-header :content="citySearch"></common-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="changeLetter"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import CommonHeader from 'common/header/Header'
import {getCurrentCity} from '../../service/getData'
import { mapMutations } from 'vuex'
export default {
  name: 'City',
  data () {
    return {
      currentCitys: {},
      // 城市
      cities: {},
      // 热门城市列表
      hotCities: [],
      letter: '',
      citySearch: '城市选择'
    }
  },
  methods: {
    getCitiInfo () {
      axios.get('/mock/cityList').then(this.handleGetCitySucc)
    },
    handleGetCitySucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    updateCity (city) {
      this.changeCity(city)
    },
    ...mapMutations({
      changeCity: 'changeCity'
    }),
    changeLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    if (!localStorage.citySp) {
      getCurrentCity().then(res => {
        res = res.data
        this.currentCitys.city = res.name
        this.currentCitys.cityId = res.id
        this.updateCity(this.currentCitys)
      })
    } else {
      this.updateCity(localStorage.citySp)
    }
    this.getCitiInfo()
  },
  components: {
    CommonHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
