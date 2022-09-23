import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/axios';





export type sigininApiPropType = {
  email:string;
  password:string
}
export const sigininApi = createAsyncThunk(
  'sigin_in/sigininApi',async  (data:sigininApiPropType,thunkApi)=>{
    //
    try {
      const resp = await api.post('/auth/jwt/create/',data);
      console.log(resp)
      return resp.data
    } catch (err:any) {
      return thunkApi.rejectWithValue( err.response.data)
    }
  })