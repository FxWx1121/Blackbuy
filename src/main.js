import Vue from 'vue'
import App from './App.vue'

import  './assets/statics/site/css/style.css'

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'

//统一设置axios
import axios from 'axios'
Vue.prototype.$axios =axios
//设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';

//设置全局时间
//导入moment.js
import moment from "moment"
Vue.filter('globalFormatTime',function(value,fmtTemplate){
  if(fmtTemplate){
    return moment(value).format(fmtTemplate)
  }else{
    return moment(value).format('YYYY-MM-DD')
  }
 
})

//规则
let routes=[
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/detail/:id',
    component:detail
  },
]
let router =new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载
  router
}).$mount('#app')
