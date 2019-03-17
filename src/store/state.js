let defaultCity = {
  city: '杭州',
  cityId: '2'
}
let defaultAddr = {
  name: '请选择地址...'
}
let defaultUserInfo = ''
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  if (localStorage.addr) {
    defaultAddr = JSON.parse(localStorage.addr)
  }
  if(localStorage.userInfo) {
    defaultUserInfo = JSON.parse(localStorage.userInfo)
  }
} catch (e) {

}

export default {
  city: defaultCity,
  addr: defaultAddr,
  userInfo: defaultUserInfo
}
