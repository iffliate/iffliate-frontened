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
}
const initialState:State={
  wallet_status:'idle',
  list_of_wallet_transactionStatus:'idle',
  wallet:undefined,
  list_of_wallet_transaction:[],
  message:null
} 
const WalletSlice = createSlice({
  name:'wallet',
  initialState,
  reducers:{
    clean_stateWallet:(state,action)=>{
      state.message=null
      state.list_of_wallet_transactionStatus='idle'
      state.wallet_status='idle'
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
        state.message='Please Check Your Mobile Data'
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
          state.message=payload.data.shop_id
        }
        if(payload.data.error){
          state.message='Insufficent Funds'
        }
        // state.message
      }
    })

    addCase(requestForPayment.rejected,(state,{payload})=>{
      state.list_of_wallet_transactionStatus='error'
      state.message= 'Somthing came up'
      console.log({'requestForPaymentError':payload})
    })
  
  }
})


export const {clean_stateWallet} = WalletSlice.actions
export default WalletSlice.reducer
export const selectWallet = (state:RootState)=>state.wallet