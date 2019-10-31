import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'
import axios from '@/api'

// import MyBread from '@/components/my-bread'
// Vue.component('my-bread', MyBread)
import plugin from '@/components'
Vue.use(plugin)

Vue.prototype.$http = axios

// ElementUI 是一个插件  集成了很多组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js是入口文件
// 创建一个根实例
// 复杂全局范围的依赖导入
