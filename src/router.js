//导入vue
import Vue from 'vue'

//导入路由相关
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import userContainer from './components/userContainer.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'



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
    //会员中心组件
    {
      path:'/user',
      component:userContainer,
      //嵌套路由
      children:[
        {
          path:'Index',
          component:userIndex
        },
        {
          path:'Order',
          component:userOrder
        },
        {
          path:'Detail',
          component:userDetail
        },
      ]
    },
  ]
  //实例化路由对象
  let router =new VueRouter({
    routes
  })
  //暴露出去
  export default router