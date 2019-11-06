import VueRouter from 'vue-router'
import Vue from 'vue'

import local from '@/utils/local'

import Login from '@/views/login'
import Home from '@/views/home'

import Article from '@/views/article'

import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Image from '@/views/image'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Setting from '@/views/setting'

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
        // 欢迎
        path: '/',
        component: Welcome
      },
      // 内容管理
      {
        path: '/article',
        component: Article
      },
      // 素材管理
      {
        path: '/image',
        component: Image
      },
      // 发布文章
      {
        path: '/publish',
        component: Publish
      },
      // 评论管理
      {
        path: '/comment',
        component: Comment
      },
      // 个人设置
      {
        path: '/setting',
        component: Setting
      }
      ]
    },
    // 404处理 匹配 不符合路由规则的路径
    {
      path: '*',
      component: NotFound
    }

  ]
})
// 路由导航守卫(前置导航守卫)
router.beforeEach((to, form, next) => {
  // 当每次跳转路由前触发
  // to 跳转到目标 路由对象
  // from 从哪里跳转过来 路由对象
  // next 下一步方法 next()旅行 next('/login') 拦截
  const user = local.getUser()
  // 如果登录
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router
