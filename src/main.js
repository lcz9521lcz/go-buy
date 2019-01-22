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

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

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
