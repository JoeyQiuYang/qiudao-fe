import axios from "axios";

//创建新的实例
const fetch = axios.create({
  baseURL: '/api',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

fetch.interceptors.request.use(config => {
  console.log('这里是request拦截success中: ', config);
  return config
}, err => {
  console.log('这里是request拦截器failure中: ', err);
  return err
})

fetch.interceptors.response.use(response => {
  console.log('这里是response拦截success中: ', response.data);
  return response.data
}, err => {
  console.log('这里是response拦截器failure中: ', err);
  return err
})


export default fetch;
