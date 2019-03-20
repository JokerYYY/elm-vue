<template>
  <div>
    <common-header :content="citySearch"></common-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="changeLetter"></city-alphabet>
  </div>
</template>

<script>
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import CommonHeader from 'common/header/Header'
import {getCurrentCity, hotcity, groupcity} from '../../service/getData'
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
    hotcity().then(res => {
      res = res.data
      this.hotCities = res.splice(0, 6)
    })
    groupcity().then(res => {
      res = res.data
      let keys = Object.keys(res).sort()
      var newObj = {}
      for (let i = 0; i < keys.length; i++) {
        var index = keys[i]
        newObj[index] = res[index]
      }
      this.cities = newObj
    })
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
