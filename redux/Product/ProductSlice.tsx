import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { getProductApi, Product, productCreateApi } from './ProductApi';




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
    // 
    addCase(getProductApi.pending,(state,action)=>{
      state.status='pending';
    })

    addCase(getProductApi.fulfilled,(state,{payload}:PayloadAction<Product[]>)=>{
      state.status='success';
      console.log({payload})
      state.data = payload
    })
    addCase(getProductApi.rejected,(state,action)=>{
      state.status='error'
      state.errMessage= 'Sorry Something went wrong please reload the page'
    })
    
  }
})


export const selectProduct = (state:RootState)=>state.product
export default productSlice.reducer