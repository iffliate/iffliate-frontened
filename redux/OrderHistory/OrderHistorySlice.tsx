import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { getOrderHistoryDetail, getorderHistoryList, OrderHistoryType, updateOrderHistoryStatus } from './OrderHistoryApi';



type State ={
    status:sliceStatus,
    errMessage:any,
    order_historys:OrderHistoryType[],
    order_history_paystacks:string[]
}

const initialState:State = {
  status:'idle',
  errMessage:null,
  order_history_paystacks:[],
  order_historys:[]
}
const OrderHistory = createSlice({
  name:'orderhistory',
  initialState,
  reducers:{},
  extraReducers:({addCase})=>{
    //


    addCase(getorderHistoryList.pending,(state,action)=>{
      state.status='pending'
    })

    addCase(getorderHistoryList.fulfilled,(state,{payload}:PayloadAction<string[]>)=>{
      state.status='success'
      state.order_history_paystacks=payload
    })
    addCase(getorderHistoryList.rejected,(state,{payload})=>{
      //
      console.log({'fail error for getorderHistoryList':payload})
      state.status='error'
      state.errMessage='Please Check your Internet'
    })

    addCase(getOrderHistoryDetail.pending,(state,action)=>{
      //
      state.status='pending'
    })

    addCase(getOrderHistoryDetail.fulfilled,(state,{payload}:PayloadAction<OrderHistoryType[]>)=>{
      //
      state.status='success'
      state.order_historys = payload
    })

    addCase(getOrderHistoryDetail.rejected,(state,{payload})=>{
      console.log({'getOrderHistoryDetail failed':payload})
      state.status='error'
      state.errMessage='Please Check Your Internet'
    })

    addCase(updateOrderHistoryStatus.pending,(state,action)=>{
      state.status='pending'
    })
    addCase(updateOrderHistoryStatus.fulfilled,(state,{payload}:PayloadAction<OrderHistoryType[]>)=>{
      //

      state.status='success'

      state.order_historys = payload
    })

    addCase(updateOrderHistoryStatus.rejected,(state,{payload}:any)=>{
      state.status='error'
      state.errMessage='Please Check your internet'
      console.log({'updateOrderHistoryStatus error':payload})
    })
  }
})
// 



export const selectOrderHistory = (state:RootState)=>state.orderhistory
export default OrderHistory.reducer