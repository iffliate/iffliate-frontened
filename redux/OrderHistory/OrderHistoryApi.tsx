import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/axios'


export  type OrderHistoryType = {
    'id': number,
    'created_at': string,
    'buyer_first_name':string,
    'buyer_last_name': string,
    'buyer_email': string,
    'buyer_phone':string,
    'buyer_shipping_address':string,
    'amount': string,
    'paystack': string,
    'quantity': number,
    'product_name': string,
    'description':string,
    'iffiliate_earning':string,
    'shop_earning':string,
    'status': 'delivered'|'order_processing'|'ready_to_dispatch'|'order_dispatched',
    'image_one': string|null,
    'image_two': string|null,
    'image_three': string|null,
    'image_four': string|null,
    'shop': number,
    'user': number
}



export const getorderHistoryList = createAsyncThunk(
  'orderhistory/getorderHistoryList',async ({shopID}:{shopID:number},thunkAPi)=>{
    //
    try {
      const resp = await api.get(`/order-shop-management/${shopID}/get_all_paystack_keys/`) 

      return resp.data.data as string[];
    } catch (err:any) {
      //
      return thunkAPi.rejectWithValue(err)
    }
  }
)

type getOrderHistoryDetailType = {
    shopID:string;
    paystack:string;
}
export const getOrderHistoryDetail = createAsyncThunk(
  'orderhistory/getOrderHistoryDetail',async ({paystack,shopID}:getOrderHistoryDetailType,thunkApi)=>{
    //
    try {
      const resp = await api.get(`order-user-management/${paystack}/?shop=${shopID}`)

      return resp.data.data as OrderHistoryType[]
    } catch (err:any) {
        
      return thunkApi.rejectWithValue(err)
    }
  }
)

type updateOrderHistoryStatus ={
    'status':OrderHistoryType['status'],
    'paystack':string
}

export const updateOrderHistoryStatus = createAsyncThunk(
  'orderhistory/updateOrderHistoryStatus', async (data:updateOrderHistoryStatus,thunkApi)=>{
    //
    try {
      const resp = await api.post('/order-shop-management/',data)
      return resp.data.data as  OrderHistoryType[]
    } catch (err:any) {
      return thunkApi.rejectWithValue(err)
    }
  }
)
