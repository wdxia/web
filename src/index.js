import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementUI from 'element-ui'

import './style/reset.css'
import './style/style.scss'
import 'element-ui/lib/theme-chalk/index.css'
// hammer.js 移动端手势库
import Hammer from 'hammerjs'

Vue.config.productionTip = false
Vue.prototype.$Hammer = Hammer
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
