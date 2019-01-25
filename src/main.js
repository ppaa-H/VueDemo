import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Login from './components/LoginOrRegister/Login.vue'
import Register from './components/LoginOrRegister/Register.vue'
import Header from './components/Header.vue'
import FIndex from './components/FIndex/FIndex.vue'
import MyChildren from './components/FIndex/MyChildren.vue'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', name:Header,component: Header,redirect:'/FIndex',children:[
      {path:'/FIndex',name:FIndex,component:FIndex},
      {path:'/MyChildren',name:MyChildren,component:MyChildren}
      ] 
    },
    { path: '/Login',name:Login, component: Login },
    { path: '/Register',name:Login, component: Register }
  ],
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
