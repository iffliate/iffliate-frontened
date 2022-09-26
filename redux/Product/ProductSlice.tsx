import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { Product, productCreateApi } from './ProductApi';




type State ={
  status:sliceStatus,
  errMessage:any,
  data:Product[];
}

const initialState:State={
  status:'idle',
  data:[],
  errMessage:null
}
const productSlice = createSlice({
  name:'product',
  initialState:initialState,
  reducers:{},
  extraReducers:({addCase})=>{
    //


    addCase(productCreateApi.pending,(state,action)=>{
      state.status='pending'
    })

    addCase(productCreateApi.fulfilled,(state,action:PayloadAction<Product>)=>{
      //
      state.status='created';
      state.data=[...state.data,action.payload]
      
    })
  }
})


export const selectProduct = (state:RootState)=>state.product
export default productSlice.reducer