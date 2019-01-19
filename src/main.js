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
// import axios from 'axios'
// Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
