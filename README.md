# elm-vue

> 基于vue开发的饿了么移动端实战

# 项目概述
  vue自学练手项目
# 项目描述
  饿了么移动端实战项目是一个基于vue开发的单页面应用项目，项目现在包含首页、城市选择、地址选择、搜索、个人中心、登录注册等页面，页面间路由由vue-router实现，同时利用vuex和总线实现页面间、组件间的数据交互和共享，通过aioxs异步获取数据并由vue渲染到页面上
## 技术栈
  vue2 + vuex + vue-router + webpack + ES6/7 + axios + stylus + iconfont
## 效果演示
  http://demo.chris.org.cn
## 项目布局
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                         // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── assets                              // iconfont文件、公共样式
│   │   ├── iconfont                              // iconfont文件
│   │   │   ├── iconfont.eot              
│   │   │   ├── iconfont.svg                     
│   │   │   ├── iconfont.ttf                                  
│   │   │   └── iconfont.woff                   
│   │   ├── base.css                            //基本样式
│   │   ├── border.css                          //一像素边框
│   │   ├── iconfont.css                        //iconfont文件
│   │   ├── mixins.styl                         //公共样式  
│   │   ├── reset.css                           //重置浏览器标签的样式表
│   │   └── varibles.styl                       //公共样式  
│   │    
│   ├── common                                  // 公共组件
│   │   │   ├── alertTip.vue                    // 弹出框组件
│   │   │   ├── FootGuide.vue                   // 底部公共组件
│   │   │   ├── Header.vue                      // 头部公共组件
│   │   │   ├── loading.vue                     // 首页商品底部加载动画
│   │   │   ├── ratingStar.vue                  // 评论的五颗星组件
│   │   │   └── shoplist.vue                    // 首页商家列表组件
│   ├── config                                  // 公共组件
│   │   ├── iconfont.js                         // iconfont Symbol使用文件
│   ├── page
│   │   ├── addr
│   │   │   ├── Addr.vue                     // 地址选择页面
│   │   │   └── components
│   │   │       └── Search.vue                  // 查询组件
│   │   ├── city
│   │   │   ├── City.vue                     // 城市选择页面
│   │   │   └── components
│   │   │   │   ├── List.vue                    // 当前定位、热门、城市列表组件
│   │   │   │   ├── Alphabet.vue                // 右侧字母导航组件
│   │   │       └── Search.vue                  // 查询组件
│   │   ├── home
│   │   │   ├── Home.vue                     // 首页
│   │   │   └── components
│   │   │       ├── Header.vue             // 头部组件
│   │   │       ├── Icons.vue                  // 分类组件
│   │   │       ├── Swiper.vue               // 推荐轮播组件
│   │   │       └── Recommend.vue               // 推荐商家组件
│   │   ├── login
│   │   │   └── Login.vue                        // 登录页面
│   │   ├── order
│   │   │   └── Order.vue          // 订单页面
│   │   ├── search                
│   │   │   └── Search.vue                    //搜索页面
│   │   │   └── components
│   │   │       └── Bar.vue               // 查询并显示商家组件
│   │   ├── user
│   │   │   └── User.vue                        // 用户主页
│   │   │   └── components
│   │   │       ├── Info.vue             // 头部用户基本信息组件
│   │   │       ├── Data.vue                  // 用户余额、红包、金币组件
│   │   │       ├── Addr.vue            // 用户地址组件
│   │   │       ├── Join.vue            // 加盟组件
│   │   │       └── Reward.vue               // 组件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   └── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │   └── mutations.js                        // 配置mutations
│   └── static
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
