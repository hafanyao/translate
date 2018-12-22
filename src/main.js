// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'Axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.use(ElementUI);

Vue.prototype.$Axios = Axios
Vue.config.productionTip = false

//配置axios基础路径
Axios.defaults.baseURL = 'http://www.wwtliu.com/sxtstu/blueberrypai/'
//配置请求头
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// Axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
// post请求方案
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//发送请求拦截器
Axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
//相应数据拦截器
Axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
