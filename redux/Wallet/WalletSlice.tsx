import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { getWallet, getWalletResponse, listWalletWithdraw, listWalletWithdrawType, requestForPayment, requestForPaymentResponse } from './WalletApi';


type State = {
    wallet_status:sliceStatus,
    list_of_wallet_transactionStatus:sliceStatus,
    wallet?:number;
    list_of_wallet_transaction:listWalletWithdrawType[],
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


    addCase(listWalletWithdraw.pending,(state,action)=>{
      state.list_of_wallet_transactionStatus='pending'
    })
    addCase(listWalletWithdraw.fulfilled,(state,{payload}:PayloadAction<listWalletWithdrawType[]>)=>{
      state.list_of_wallet_transactionStatus='success'
      state.list_of_wallet_transaction=payload
    })
  
  }
})


export const {clean_stateWallet} = WalletSlice.actions
export default WalletSlice.reducer
export const selectWallet = (state:RootState)=>state.wallet