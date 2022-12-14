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


export type getorderHistoryListResponse = {
  'paystack': string,
            'created_at': string,
            'id': number
}
export const getorderHistoryList = createAsyncThunk(
  'orderhistory/getorderHistoryList',async ({shopID,is_for_shop=true,lookup=''}:{shopID:number,is_for_shop?:boolean;lookup?:string},thunkAPi)=>{
    //
    let url = `/order-shop-management/${shopID}/get_all_paystack_keys/`
    if(is_for_shop==false){
      url ='/order-user-management/get_all_paystack_keys/'
    }
    try {
      const resp = await api.get(url+`${lookup}`) 
      return resp.data.data as getorderHistoryListResponse[];
    } catch (err:any) {
      //
      return thunkAPi.rejectWithValue(err)
    }
  }
)

type getOrderHistoryDetailType = {
    shopID:string;
    paystack:string;
    is_for_shop?:boolean;
}
export const getOrderHistoryDetail = createAsyncThunk(
  'orderhistory/getOrderHistoryDetail',async ({paystack,shopID,is_for_shop=true}:getOrderHistoryDetailType,thunkApi)=>{
    let url =`order-shop-management/${paystack}/?shop=${shopID}`
    if(is_for_shop == false){
      url = `order-shop-management/${paystack}/`
    }
    try {
      const resp = await api.get(url)

      return resp.data.data as OrderHistoryType[]
    } catch (err:any) {
        
      return thunkApi.rejectWithValue(err)
    }
  }
)

type updateOrderHistoryStatus ={
    'status':OrderHistoryType['status'],
    'paystack':string;
    'shop_id':number
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
