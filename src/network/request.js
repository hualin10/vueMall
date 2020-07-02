//1、引入axios
import axios from 'axios'

export function request(config){
	//2.创建axios的实例
  const instance = axios.create({
  	// baseURL:'http://localhost:8080',
    //根地址 
    baseURL:'http://106.54.54.237:8000/api/mn',
    //延迟时间
  	timeout:5000
  })

  //3.axios的拦截器

  //3.1.请求拦截的作用
  instance.interceptors.request.use(config => {
  	return config
  },err => {
  	//console.log(err);
  })
  
  //3.2.响应拦截
  instance.interceptors.response.use(res => {
  	return res.data
  },err => {
  	console.log(err);
  })
  //4.发送真正的网络请求
  return instance(config)
}