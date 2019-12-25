import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页的组件
import Index from '../pages/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
