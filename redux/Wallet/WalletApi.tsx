import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/axios';



export type getWalletResponse = {
    'wallet':number
}
export const getWallet = createAsyncThunk(
  'wallet/getWallet',async (data:{shop_id:number},thunkApi)=>{
    //
    try {
      const resp = await api.get(`/payment/handle_shop_payment/${data.shop_id}/get_wallet/`);
      return resp.data.data as getWalletResponse
    } catch (error:any) {
      return thunkApi.rejectWithValue(error)
    }
  })


export type requestForPaymentProp = {
    'bank_name':string,
    'account_number':string,
    'amount':number,
    'shop_id':number
}
export type requestForPaymentResponse= {
    'message': string,
    'status_code': number,
    'data': any,//dont care
    'success': false // will use this to know what went wrong
}
export const requestForPayment = createAsyncThunk(
  'wallet/requestForPayment',async (data:requestForPaymentProp,thunkApi)=>{
    //
    try {
      const resp = await api.post('/payment/handle_shop_payment/',data);
      return resp.data as requestForPaymentResponse
    } catch (err:any) {
      return thunkApi.rejectWithValue(err)
    }
  }
)

export type listWalletWithdrawType ={
    'shop': {
        'name':string,
        'id': number
    },
    'amount': string,
    'transfer_state':string,
    'created_at': string
}
export const listWalletWithdraw = createAsyncThunk(
  'wallet/listWalletWithdraw',async (shop_id:number,thunkApi)=>{
    //
    try {
      const resp = await api.get(`payment/handle_shop_payment/?shop_id=${shop_id}`)
      return resp.data.data as listWalletWithdrawType[]
    } catch (err) {
        
      return thunkApi.rejectWithValue(err)
    }
  }
)