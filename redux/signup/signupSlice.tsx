import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { signUpApi, signUpApiResponse } from './signupApi';

type State ={
  status:sliceStatus,
  data:signUpApiResponse,
  errMessage:any,
}
const initialState:State ={
  status:'idle',
  data:{} as signUpApiResponse,
  errMessage:null,
}

const signup = createSlice({
  name:'signup',
  initialState:initialState,
  reducers:{},
  extraReducers:({addCase})=>{
    //
    addCase(signUpApi.pending,(state,action)=>{
      state.status='pending';
    })

    addCase(signUpApi.fulfilled,(state,action:PayloadAction<signUpApiResponse>)=>{
      state.status='created';
      state.data=action.payload;
    })
    addCase(signUpApi.rejected,(state,action:PayloadAction<any>)=>{
      //
      const err  =  action.payload.response.data.data
      if(err.email){
        state.status='error'
        state.errMessage='Email Already Exists'
      }
    })

  }
})

export const selectSignUp =(state:RootState)=>state.signup
export default signup.reducer