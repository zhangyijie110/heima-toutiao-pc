import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js是入口文件
// 创建一个根实例
// 复杂全局范围的依赖导入
