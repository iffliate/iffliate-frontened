import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/axios';




export type Product ={
  id?:number;
  name:string;
  description:string;
  slashed_price:number;
  actual_price:number;
  shop:number;
  category:number;
  out_of_stock:boolean;
  image_one:any;
  image_two:any;
  image_three:any;
  image_four:any;
}
type productCreateApiResponse ={
  message:string;
  status_code:number;
  data:Product,
  success:boolean;
}
export const productCreateApi = createAsyncThunk(
  'product/productCreateApi',async (data:Product,thunkAPi)=>{
    console.log('sent fro real')

    const form = new FormData();

    form.append('name',data.name)
    form.append('description',data.description)
    form.append('slashed_price',data.slashed_price.toString())
    form.append('actual_price',data.actual_price.toString())
    form.append('shop',data.shop.toString())
    form.append('category',data.category.toString())
    form.append('out_of_stock',JSON.stringify(data.out_of_stock))
    form.append('image_one',data.image_one)
    form.append('image_three',data.image_three)
    form.append('image_two',data.image_two)
    form.append('image_four',data.image_four)

    try{
      const resp = await api.post('/product/',form)
      console.log({resp})
      return resp.data.data as Product
    }catch(err:any){
      console.log({err})
      return thunkAPi.rejectWithValue(err)
    }
  }
)