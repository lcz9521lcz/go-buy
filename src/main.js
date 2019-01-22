import Vue from 'vue'
import App from './App'
import router from './router'

// 导入element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册
Vue.use(ElementUI)

// 导入公共样式清除默认边距
import './styles/common.css'

// 导入axios
import axios from 'axios'
// 配置全局路径
axios.defaults.baseURL = 'http://litc.pro:9999/v1/'
// 在vue原型上挂载axios
Vue.prototype.$axios = axios

// 路由的导航守卫---判断用户是否登录如果没有进行拦截
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    return next('/login')
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
