export default {
  changeCity (state, city) {
    state.city = city
    localStorage.city = city
  },
  changeCitys (state, city) {
    if (typeof city !== 'string') {
      city = JSON.stringify(city)
    }
    state.citySp = city
    localStorage.citySp = city
  },
  changeAddr (state, addr) {
    state.addr = addr
    if (typeof addr !== 'string') {
      addr = JSON.stringify(addr)
    }
    localStorage.addr = addr
  }
}
