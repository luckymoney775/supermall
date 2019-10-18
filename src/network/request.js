//首页的请求
import axios from 'axios'
//代理接口
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export function request(config) {
  const instance = axios.create({
    baseURL: API_PROXY+"http://123.207.32.32:8000",
    timeout: 40000
  })


  instance.interceptors.request.use(config =>{
    return config
  },error => {
     // console.log(error)
  })


  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error)
  })

    return instance(config)
}
