import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'

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
