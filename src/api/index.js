// 导出一个配置好的axios提供给main挂载
import axios from 'axios'
import local from '@/utils/local'
// 对axios进行配置
// baseURL  作用：设置基准地址（前面一段相同的地址）
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 配置请求头 ...
// if (local.getUser()) {
//   axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
// }
// 请求拦截器
axios.interceptors.request.use(config => {
  // 1. 获取token
  const user = local.getUser() || {}
  // 2. 头部设置token
  config.headers.Authorization = `Bearer ${user.token}`
  return config
}, err => {
  return Promise.reject(err)
})
export default axios
