import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { getWallet, getWalletResponse, requestForPayment, requestForPaymentResponse } from './WalletApi';

type WalletTrasaction ={
    'shop__name':string;
    'amount':number,
    'transfer_state':'success'|'failed'|'reversed'|'pending',
    'created_at':string
}
type State = {
    wallet_status:sliceStatus,
    list_of_wallet_transactionStatus:sliceStatus,
    wallet?:number;
    list_of_wallet_transaction:WalletTrasaction[],
    message:null|string;
    errMessage:null|string;
}
const initialState:State={
  wallet_status:'idle',
  list_of_wallet_transactionStatus:'idle',
  wallet:undefined,
  list_of_wallet_transaction:[],
  message:null,
  errMessage:null
} 
const WalletSlice = createSlice({
  name:'wallet',
  initialState,
  reducers:{
    clean_stateWallet:(state,action)=>{
      state.message=null
      state.list_of_wallet_transactionStatus='idle'
      state.wallet_status='idle'
      state.errMessage=null
    }
  },
  extraReducers:({addCase})=>{
    //
    //
    addCase(getWallet.pending,(state,action)=>{
      state.wallet_status= 'pending'
    })

    addCase(getWallet.fulfilled,(state,action:PayloadAction<getWalletResponse>)=>{
      state.wallet_status= 'success'
      state.wallet=action.payload.wallet
    })

    addCase(getWallet.rejected,(state,action:any)=>{
      state.wallet_status='error'
      if(action.payload.code=='ERR_NETWORK'){
        state.errMessage='Please Check Your Mobile Data'
      }
      console.log({'error from getWallet':action.payload})
    })

    addCase(requestForPayment.pending,(state,action)=>{
      state.list_of_wallet_transactionStatus='pending'
    })

    addCase(requestForPayment.fulfilled,(state,{payload}:PayloadAction<requestForPaymentResponse>)=>{
      state.list_of_wallet_transactionStatus='success'
      if(payload.success){
        state.message = 'We recived Your Request And are proccessing it'
      }else{
        state.list_of_wallet_transactionStatus='error'
        if(payload.data.shop_id){
          state.errMessage=payload.data.shop_id
        }
        if(payload.data.error){
          state.errMessage='Insufficent Funds'
        }
        // state.message
      }
    })

    addCase(requestForPayment.rejected,(state,{payload}:any)=>{
      state.list_of_wallet_transactionStatus='error'
      console.log({'requestForPaymentError':payload.response.data.data.shop_id})
      if(payload.response.data.data.error){
        state.errMessage=payload.response.data.data.error
      }
      if(payload.response.data.data.error){
        state.errMessage=payload.response.data.data.error
      }
      else{
        state.errMessage= 'Somthing came up'
      }
    })
  
  }
})


export const {clean_stateWallet} = WalletSlice.actions
export default WalletSlice.reducer
export const selectWallet = (state:RootState)=>state.wallet