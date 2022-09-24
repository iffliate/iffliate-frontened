import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { createShop, shopType } from './ShopApi';


type State={
  status:sliceStatus,
  data:shopType[],
  errMessage:any
}
const initialState:State={
  status:'idle',
  data:[],
  errMessage:null
}
const shopSlice = createSlice({
  name:'shop',
  initialState,
  reducers:{
    setShopIdle:(state,action)=>{
      state.status='idle'
    }
  },
  extraReducers:({addCase})=>{
    //

    addCase(createShop.pending,(state,action)=>{
      //
      state.status='pending'
    })
    addCase(createShop.fulfilled,(state,{payload}:PayloadAction<shopType>)=>{
      //
      state.status='created'
      state.data= [...state.data,payload]
    })
    addCase(createShop.rejected,(state,{payload}:any)=>{
      state.status='error';
      const err:any= payload.response.data
      if(err.twitter){
        state.errMessage='Socials Must have a valid link'
      }
      if(err.whatsapp){
        state.errMessage='Socials Must have a valid link'
      }
      if(err.facebook){
        state.errMessage='Socials Must have a valid link'
      }
      if(err.instagram){
        state.errMessage='Socials Must have a valid link'
      }
      if(err.whatsapp){
        state.errMessage='Socials Must have a valid link'
      }
     
    })
  }
})

export const {setShopIdle} =shopSlice.actions
export const selectShop = (state:RootState)=>state.shop 

export default shopSlice.reducer