import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { sigininApi } from './sigininApi';


type State = {
  status:sliceStatus,
  errMessage:any,
  data:{ refresh:string;access:string;},

}
const initialState:State={
  status:'idle',
  errMessage:null,
  data:{} as State['data']
}
const sign_in = createSlice({
  name:'sign_in',
  initialState:initialState,
  reducers:{},
  extraReducers:({addCase})=>{
    //
    addCase(sigininApi.pending,(state,action)=>{
      // 
      state.status='pending'
    })
    addCase(sigininApi.fulfilled,(state,{payload}:PayloadAction<State['data']>)=>{
      // 
      state.status='success'
      console.log({payload})
      state.data=payload
      localStorage.setItem('iffilate_cred',JSON.stringify(payload))
    })

    addCase(sigininApi.rejected,(state,action)=>{
      state.status='error';
      state.errMessage='Invalid credentials'
    })
  }
})


export const selectSignIn = (state:RootState)=>state.sign_in
export default sign_in.reducer

