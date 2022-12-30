import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/axios';
import { Product } from '../Product/ProductApi';


export type CartItem = {
    product:Product;
    quantity:number;
    id?:number,
    orderID?:number;
}



type createOrderApiProp = {
    product_id:number;
    cartItemState:CartItem[],
    custom_quantity?:number;
}

type reduceOrderApiProp = {
  cartItemState:CartItem
}
type EndpointItems ={
  'id': 1,
  'quantity': 5,
  'size': null,
  product:Product
}
export type createOrderApiResponse =  {
  'id': number,
  'user': any,
  'created_at':string,
  'is_paid': boolean,
  'total_amount': number,
  'items': EndpointItems[]
}

export const getOrderApi = createAsyncThunk(
  'Cart/getOrderApi',async (data,thunkApi)=>{
    try {
      const resp = await api.get('/order/?is_paid=False');
      return resp.data.data as createOrderApiResponse[]
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
export const createOrderApi= createAsyncThunk(
  'Cart/createOrderApi', async ({product_id,cartItemState,custom_quantity}:createOrderApiProp,thunkApi)=>{
    //
    let dataToBesent:{'product_id'?:number,'quantity':number}[]=[]
    if(!cartItemState.map(d=>d.product.id).includes(product_id)){
      dataToBesent = [{'product_id':product_id,quantity:1}]
    }else{
      const item:CartItem[] = cartItemState.filter(d=>d.product.id==product_id)
      dataToBesent = [{'product_id':product_id,quantity:item[0].quantity+1}]
    }
    if(custom_quantity){
      dataToBesent = [{'product_id':product_id,quantity:custom_quantity}]
    }
    // return 
    console.log({dataToBesent})
    try{
      const resp = await api.post('/order/',{'items':dataToBesent})
      return resp.data.data   as createOrderApiResponse
    }
    catch(err:any){
      //

      return thunkApi.rejectWithValue(err)
    }
  })

export const reduceOrderItemApi = createAsyncThunk(
  'Cart/reduceOrderItemApi', async ({cartItemState}:reduceOrderApiProp,thunkApi)=>{
    //
    // 
    const dataToBesent = {'items':[{'product_id':cartItemState.product.id,quantity:cartItemState.quantity-1}]}
    try{
      const resp = await api.post('/order/',dataToBesent)
      return resp.data.data   as createOrderApiResponse
    }
    catch(err:any){
      return thunkApi.rejectWithValue(err)
    }
  }
)

export type removeOrderItemApiProp = {orderID:number,orderitem_id:number}
export const removeOrderItemApi = createAsyncThunk(
  'Cart/removeOrderItemApi',async({orderID,orderitem_id}:removeOrderItemApiProp,thunkApi)=>{
    //

    try{
      const resp = await api.delete(`/order/${orderID}/?orderitem_id=${orderitem_id}`,)
      resp.data.data
      return resp.data.data as removeOrderItemApiProp
    }
    catch(err:any){
      return thunkApi.rejectWithValue(err)
    }

  })

export  type bulkCreateOrderApiProp ={product_id:number,quantity:number}
export const bulkCreateOrderApi = createAsyncThunk(
  'Cart/bulkCreateOrderApi', async (data:bulkCreateOrderApiProp[],thunkAPi)=>{
    //
    try{
      const resp = await api.post('/order/',{'items':data})
      return resp.data.data   as createOrderApiResponse
    }
    catch(err:any){
      //
      return thunkAPi.rejectWithValue(err)
    }
  }
)



