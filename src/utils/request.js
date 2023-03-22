import axios from 'axios'
// import { Toast } from 'vant'
// import store from '../store/index'
import { getToken, removeToken } from './token'
// 创建一个自定义的axios方法(比原来axios多一个基地址)

// axios函数请求地址的url地址前面会被拼接基地址，然后axios请求baseURL+uti后完整地址
const request = axios.create({
  baseURL: 'http://localhost:3000'
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
// 白名单: 不需要携带token的api地址
const whiteAPIList = ['/api/register', '/api/login']
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  const token = getToken()
  if (!whiteAPIList.includes(config.url)) {
    config.headers.Authorization = token // 设置请求头
  }
  return config
}, error => {
  return Promise.reject(error)
})
// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
    let res = response.data
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    // 当权限验证不通过的时候给出提示
    if (res.status === 401) {
      removeToken()
      localStorage.removeItem('userInfo')
      // return res
    }
    return res
  }, error => {
    // console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
// 导出自定义的axios方法，供外面调用传参发请求
export default request
