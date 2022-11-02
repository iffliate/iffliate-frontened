import axios from 'axios'
import { getUserTokenOr404, isAuth } from '../utils/extraFunction';

// http://iffilate.herokuapp.com
const url = 'https://iffitiate-test.herokuapp.com'
// const url = 'http://localhost:8000'
const api =axios.create({
  baseURL: url+'/api/v1',
 
});

export default api



api.interceptors.request.use((config)=>{

  // Do something before request is sent
  //let check if it a dasboard url or from listing url they are both authenticated routes
  //so we can add  token to the headers

  const path = window.location.pathname
  
  const user = getUserTokenOr404();
  if(user){
    config['headers']={ 'Authorization':`Bearer ${user?.access}`}

  }
  return config
})