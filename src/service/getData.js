import axios from 'axios'
import fetch from '../config/fetch'
import { api } from '../config/api'

/**
 * 获取当前地址
 */
export const getCurrentCity = () =>
  axios.get('http://elm.cangdu.org/v1/cities?type=guess')

/**
 * 获取城市选择页热门城市
 */

export const hotcity = () =>
  axios.get('http://elm.cangdu.org/v1/cities?type=hot')

/**
 * 获取城市选择页所有城市
 */

export const groupcity = () =>
  axios.get('http://elm.cangdu.org/v1/cities?type=group')

/**
 * 获取搜索地址
 */
export const searchPlace = (citiId, value) =>
  axios.get('http://elm.cangdu.org/v1/pois', {
    params: {
      type: 'search',
      city_id: citiId,
      keyword: value
    }
  })

/**
 * 获取首页商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', deliveryMode = '', support_ids = []) => {
  let supportStr = ''
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id
    }
  })
  return api.get('http://elm.cangdu.org/shopping/restaurants', {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': deliveryMode + supportStr
  })
}

export const searchListByCategoryId = (geohash, title, restaurant_category_id = 1) => {
  return api.get('https://cangdu.org/elm/food', {
    geohash,
    title,
    restaurant_category_id
  })
}

/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) =>
  axios.get('http://elm.cangdu.org/v4/restaurants', {
    params: {
      'extras[]': 'restaurant_activity',
      geohash,
      keyword,
      type: 'search'
    }
  })

/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('http://cangdu.org:8001/v1/captchas', {}, 'POST')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captchaCode) =>
  fetch('http://cangdu.org:8001/v2/login', {
    username,
    password,
    captcha_code: captchaCode
  }, 'POST')

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return false
  return window.localStorage.getItem(name)
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
