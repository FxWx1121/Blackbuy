import Vue from 'vue'
import App from './App.vue'

//饿了么ul
//导入模块
import ElementUI from 'element-ui';
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
//vue插件
Vue.use(ElementUI);

import  './assets/statics/site/css/style.css'





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



Vue.config.productionTip = false

//导入抽取的路由
import router from './router.js'

new Vue({
  render: h => h(App),
  //挂载到顶级vue实例上
  router
}).$mount('#app')
