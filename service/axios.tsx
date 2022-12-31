import axios from 'axios'
import { getUserTokenOr404, isAuth } from '../utils/extraFunction';

const url = 'https://web-production-a2ac.up.railway.app'
// const url = 'http://localhost:8000'
const api =axios.create({
  baseURL: url+'/api/v1',
 
});

export default api



api.interceptors.request.use((config)=>{

  // Do something before request is sent
  //let check if it a dasboard url or from listing url they are both authenticated routes
  //so we can add  token to the headers
  console.log({config})
  const path = window.location.pathname
  
  const user = getUserTokenOr404();
  if(user){
    config['headers']={ 'Authorization':`Bearer ${user?.access}`}

  }
  return config
})

api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log({response})
  return response;
}, function (error) {
  const code:any = error.response.data.code
  if(code === 'token_not_valid') {
    window.location.reload()
    window.location.href='/expired_token_page'
  } 
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});