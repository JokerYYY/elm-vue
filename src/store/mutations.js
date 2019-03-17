export default {
  changeCity (state, city) {
    if (typeof city !== 'string') {
      city = JSON.stringify(city)
    }
    state.city = city
    localStorage.city = city
  },
  changeAddr (state, addr) {
    state.addr = addr
    if (typeof addr !== 'string') {
      addr = JSON.stringify(addr)
    }
    localStorage.addr = addr
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
    if (typeof userInfo !== 'string') {
      userInfo = JSON.stringify(userInfo)
    }
    localStorage.userInfo = userInfo
  }
}
