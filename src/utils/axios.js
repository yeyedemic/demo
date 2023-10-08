import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
  timeout: 20000,
});
// 请求拦截器(请求发出了、请求没有发出去)
http.interceptors.request.use(
  (config) => {
    // 提供了每次请求发出之前修改配置的机会
    return config;
  },
  (err) => {
    console.log(err);
  },
);
// 响应拦截器(收到响应了、没收到响应)
http.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 400:
        alert('请求的参数或格式不正确');
        break;
      case 401:
        alert('没有权限，先登录');
        break;
      case 403:
        alert('禁止访问');
        break;
      case 404:
        alert('请求路径出错，请气息核对');
        break;
      default:
        break;
    }
  },
);

export default http;
