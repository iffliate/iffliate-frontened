import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { getOrderHistoryDetail, getorderHistoryList, OrderHistoryType, updateOrderHistoryStatus } from './OrderHistoryApi';



type State ={
    status:sliceStatus,
    errMessage:any,
    order_historys:OrderHistoryType[],
    order_history_paystacks:{'paystack':string}[]
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
      state.order_history_paystacks=payload.map(d=>({'paystack':d}))
    })
    addCase(getorderHistoryList.rejected,(state,{payload})=>{
      //
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
    })
  }
})
// 



export const selectOrderHistory = (state:RootState)=>state.orderhistory
export default OrderHistory.reducer