let defaultCity = '杭州'
let defaultCitySp = {
  city: '杭州',
  cityId: '2'
}
let defaultAddr = {
  name: '请选择地址...'
}
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  if (localStorage.citySp) {
    defaultCitySp = localStorage.citySp
  }
  if (localStorage.addr) {
    defaultAddr = JSON.parse(localStorage.addr)
  }
} catch (e) {

}

export default {
  citySp: defaultCitySp,
  city: defaultCity,
  addr: defaultAddr
}
