import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/axios';
import { Product } from '../Product/ProductApi';

export type shopType = {
  'user'?:number,
  'id'?:number,
  'name':string,
  'slug':string,
  'facebook'?: string,
  'twitter'?: string,
  'whatsapp'?: string,
  'instagram'?: string;
  'about': string,
  'banner':any,
  'logo': any,
  'info': string,
  'account_holder_name':string,
  'account_number': number,
  'account_holder_email': string,
  'bank_name':string,
  'address_country': string,
  'address_city':string,
  'address_zip': number,
  'street_address':string,
  'created_at'?: string,
  'updated_at'?:string;
}

export const createShop = createAsyncThunk(
  'shop/createAsyncThunk',async (data:shopType,thunkApi)=>{
    //
    const form = new FormData()

    form.append('name',data.name)
    if(data.facebook){
      form.append('facebook',data.facebook)
    }

    if(data.twitter){
      form.append('twitter',data.twitter)
    }
    if(data.whatsapp){
      form.append('whatsapp',data.whatsapp)
    }
    if(data.instagram){
      form.append('instagram',data.instagram)
    }

    form.append('about',data.about)
    form.append('banner',data.banner)
    form.append('logo',data.logo)
    form.append('info',data.info)
    form.append('account_holder_name',data.account_holder_name)
    form.append('account_number',JSON.stringify(data.account_number))
    form.append('account_holder_email',data.account_holder_email)
    form.append('bank_name',data.bank_name)
    form.append('address_country',data.address_country)
    form.append('address_city',data.address_city)
    form.append('address_zip',JSON.stringify(data.address_zip))
    form.append('street_address',data.street_address)

    try {
      const resp = await api.post('/shop/',form)
      console.log({resp})
      return resp.data  
    } catch (err:any) {
      console.log({err})
      return thunkApi.rejectWithValue(err)
    }
  }
)

export const getShop = createAsyncThunk(
  'shop/getShop',async ()=>{
     
    try {
      const resp = await api.get('/shop/')
      return resp.data as shopType[]
    } catch (error:any) { 
      return error.response.data
    }
  }
)




export type ShopDetailType ={
    'name': string,
    'id': number,
    'facebook'?: string,
    'twitter'?: string,
    'whatsapp'?: string,
    'instagram'?: string,
    'about': string,
    'banner': string,
    'logo':string,
    'info': string,
    'address_country':string,
    'address_city':string,
    'street_address':string,
    'products': Product[],
    'phone':string;
}

export const getShopDetail= createAsyncThunk(
  'shop/getShopDetail',async ({shopName}:{shopName:string},thunkApi)=>{
    //

    try {
      const resp = await api.get(`/shop/${shopName}/`)
      

      return resp.data.data as ShopDetailType
    } catch (error) {
      
      return thunkApi.rejectWithValue(error)
    }
  }
)