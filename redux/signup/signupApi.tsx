import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/axios';

type dataType ={
  first_name:string;
  last_name:string;
  phone:string;
  email:string;
  password:string;
  confirm_password?:string;
}
export interface  signUpApiResponse extends dataType{
  id?:number
}
export const signUpApi = createAsyncThunk('sigup/signUpApi',async(data:dataType,thunkApi)=>{
  //
  try {
    const resp = await api.post('/auth/users/',data)
    return resp.data  as signUpApiResponse
  } catch (err:any) {
    return thunkApi.rejectWithValue(err)
  } 
})