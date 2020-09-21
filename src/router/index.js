import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import my from '../pages/my/my.vue'
import cart from '../pages/cart/cart.vue'
import index from '../pages/home/index.vue'
import login from '../pages/login/login.vue'
import registered from '../pages/registered/registered.vue'

Vue.use(Router)

let route = new Router({
  routes: [
        {
          path:"/",
          redirect:'/xiaou' 
        },
        {
          path:"/xiaou",
          component:home,
          children:[
            {
              path:"/xiaou",
              redirect:'/xiaou/index' 
            },
            {
              path:"index",
              component:index
            }, {
              path:"cart",
              component:cart
            }, {
              path:"my",
              component:my
            }
          ]
        },{
          path:"/login",
          component:login
        },{
          path:"/registered",
          component:registered
        }
  ]
})
export default route

// 全局路由守卫:在进入每个路由之前 都会执行该方法
route.beforeEach((to, from, next) => {
  // to表示需要去的那个路由  将要反问的路由信息  反问那个路由 就返回那个路由的信息 
  // to.path返回 点击的那个路由的地址

  
  // from表示 从哪个路由过来 将要离开的路由信息
  if(to.path == '/xiaou/cart'){
    if(!localStorage.getItem("uname")){
      alert("您还未登入")
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }


  // if(to.path == '/'){

  // }

})


