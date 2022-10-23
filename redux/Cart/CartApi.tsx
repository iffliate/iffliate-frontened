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
    cartItemState:CartItem[]
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
      const resp = await api.get('/order/');
      console.log({'order get resp':resp.data})
      return resp.data.data as createOrderApiResponse[]
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
export const createOrderApi= createAsyncThunk(
  'Cart/createOrderApi', async ({product_id,cartItemState}:createOrderApiProp,thunkApi)=>{
    //
    let dataToBesent:{'product_id'?:number,'quantity':number}[]=[]
    if(!cartItemState.map(d=>d.product.id).includes(product_id)){
      dataToBesent = [{'product_id':product_id,quantity:1}]
    }else{
      const item:CartItem[] = cartItemState.filter(d=>d.product.id==product_id)
      dataToBesent = [{'product_id':product_id,quantity:item[0].quantity+1}]
    }
    console.log({dataToBesent})
    // return 
    try{
      const resp = await api.post('/order/',{'items':dataToBesent})
      console.log({resp})
      return resp.data.data   as createOrderApiResponse
    }
    catch(err:any){
      //

      return thunkApi.rejectWithValue(err)
    }
  })

export  type bulkCreateOrderApiProp ={product_id:number,quantity:number}
export const bulkCreateOrderApi = createAsyncThunk(
  'Cart/bulkCreateOrderApi', async (data:bulkCreateOrderApiProp[],thunkAPi)=>{
    //
    try{
      const resp = await api.post('/order/',{'items':data})
      console.log({'from bulk':resp})
      return resp.data.data   as createOrderApiResponse
    }
    catch(err:any){
      //
      return thunkAPi.rejectWithValue(err)
    }
  }
)



