import VueRouter from 'vue-router'
import Vue from 'vue'

import local from '@/utils/local'

import Login from '@/views/login'
import Home from '@/views/home'

import Article from '@/views/article'

import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由配置对象
  // 关键选项：routes 作用：配置路由规则
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 首页
    {
      path: '/',
      component: Home,
      children: [{
        path: '/',
        component: Welcome
      },
      { path: '/article',
        component: Article
      }]
    },
    // 404处理
    {
      path: '*',
      component: NotFound
    }

  ]
})
// 路由导航守卫(前置导航守卫)
router.beforeEach((to, form, next) => {
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router
