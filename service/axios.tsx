import axios from 'axios'




const api =axios.create({
  baseURL: 'http://iffilate.herokuapp.com/api/v1',
 
});

export default api