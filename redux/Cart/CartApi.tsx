import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../Product/ProductApi';


export type CartItem = {
    product:Product;
    quantity:number;
    id?:number,
}
