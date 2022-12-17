import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, sliceStatus } from '../store';
import { deleteProductApi, getCategory, getProductApi, getProductDetail, Product, productCreateApi, updateProductDetail } from './ProductApi';



export type Category ={
  'id':number;
  'name':string;

}
type State ={
  status:sliceStatus,
  errMessage:any,
  data:Product[];
  category_list:Category[]
  currentCategory:string;
  productDetail:Product;
}

const initialState:State={
  status:'idle',
  data:[],
  errMessage:null,
  category_list:[],
  currentCategory:'clothing',
  productDetail: {} as Product
}
const productSlice = createSlice({
  name:'product',
  initialState:initialState,
  reducers:{
    setCurrentCategory:(state,{payload}:PayloadAction<string>)=>{
      state.currentCategory=payload
    },
    setProductDetail:(state,{payload}:PayloadAction<Product>)=>{
      // this set detail without the need of getting from the endpoint
      state.productDetail=payload
    }
  },
  extraReducers:({addCase})=>{
    //


    addCase(productCreateApi.pending,(state,action)=>{
      state.status='pending'
    })

    addCase(productCreateApi.fulfilled,(state,action:PayloadAction<Product>)=>{
      //
      state.status='created';
      state.data=[...state.data,action.payload]
      
    })
    addCase(productCreateApi.rejected,(state,action:any)=>{
      state.status='error'
      if(action.payload.code === 'ERR_NETWORK'){
        state.errMessage='Please Check your internet and refresh the page'
      }
    })
    // 
    addCase(getProductApi.pending,(state,action)=>{
      state.status='pending';
    })

    addCase(getProductApi.fulfilled,(state,{payload}:PayloadAction<Product[]>)=>{
      state.status='success';
      state.data = payload
    })
    addCase(getProductApi.rejected,(state,action:any)=>{
      state.status='error'
      if(action.payload.code === 'ERR_NETWORK'){
        state.errMessage='Please Check your internet and refresh the page'
      }else{
        state.errMessage= 'Sorry Something went wrong please reload the page'
      }
    })


    addCase(deleteProductApi.pending,(state,action)=>{
      state.status='pending'
    })
    addCase(deleteProductApi.fulfilled,(state,{payload}:PayloadAction<string>)=>{
      state.status='deleted'
      state.data = state.data.filter(d=>d.slug !=payload)
    })

    // get categories

    addCase(getCategory.pending,(state,action)=>{
      state.status='pending'
    })

    addCase(getCategory.fulfilled,(state,{payload}:PayloadAction<Category[]>)=>{
      state.status='success'
      state.category_list= payload
    })

    addCase(getCategory.rejected,(state,{payload})=>{
      state.status='error'
      // state.category_list= payload
    })
    


    // get product detail

    addCase(getProductDetail.pending,(state,action)=>{
      //
      state.status = 'pending'
    })

    addCase(getProductDetail.fulfilled,(state,{payload}:PayloadAction<Product>)=>{
      //
      state.status = 'success'
      state.productDetail= payload
    })


    addCase(getProductDetail.rejected,(state,action)=>{
      //
      state.status='error'
      console.log({
        'error from Product DetailSLice':action.payload
      })
    })

    addCase(updateProductDetail.pending,(state,action)=>{
      state.status='updating'
    })
    addCase(updateProductDetail.fulfilled,(state,{payload}:PayloadAction<Product>)=>{
      state.status='updated'

      state.data = state.data.map(data=>{
        if(data.id ==payload.id){
          return payload
        }
        return data
      })
    })


    addCase(updateProductDetail.rejected,(state,action)=>{
      state.status='error'
      console.log({'couldnot Update Product':action.payload})
    })
  }
})

export const {setCurrentCategory} = productSlice.actions
export const selectProduct = (state:RootState)=>state.product
export default productSlice.reducer