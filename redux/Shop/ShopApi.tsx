import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/axios';

export type shopType = {
  'id'?:number,
  'name':string,
  'facebook': string,
  'twitter': string,
  'whatsapp': string,
  'instagram': string;
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
    form.append('facebook',data.facebook)
    form.append('twitter',data.twitter)
    form.append('whatsapp',data.whatsapp)
    form.append('instagram',data.instagram)
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