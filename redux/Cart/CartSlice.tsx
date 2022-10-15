import { createSlice ,PayloadAction} from '@reduxjs/toolkit';
import { stat } from 'fs/promises';
import { Product } from '../Product/ProductApi';
import { RootState, sliceStatus } from '../store';
import { CartItem } from './CartApi';

type State ={

    status:sliceStatus,
    errMessage:any,
    cartItem:CartItem[];
    total:number;
  }
const initialState:State = {
  status:'idle',
  errMessage:null,
  cartItem:[],
  total:0
}


const CartSlice= createSlice({
  name:'Cart',
  initialState,
  reducers:{

    addCartLocally:(state,{payload}:PayloadAction<Product>)=>{
      if(!state.cartItem.map(d=>d.product.id).includes(payload.id)){
        console.log('is Zero:')
        //
        state.cartItem = [{id:state.cartItem.length+1,quantity:1,product:payload},...state.cartItem]
         
      }else{
        console.log('is Not Zero:')

        state.cartItem =  state.cartItem.map((data,index)=>{
          // if(!payload.id){
          //   // this payload does not have payload.id so we add it to cart
          //   return {id:state.cartItem.length+1,quantity:1,product:payload.product}
          // }
        
          if(payload.id==data.product.id){
            console.log( {...data,quantity:data.quantity+1},'exist')
            // 'this handles the duplicate payload by incrementing the quantity only'
            return {...data,quantity:data.quantity+1}
          }
          //   else{
          //     console.log({id:state.cartItem.length+1,quantity:1,product:payload},'new')
          //     return {id:state.cartItem.length+1,quantity:1,product:payload}
          //   }
          return data
        })

      }

      localStorage.setItem('iffiliate_cart',JSON.stringify(state.cartItem))
    },
    removeCartLocally:(state,{payload}:PayloadAction<number>)=>{
      //
      state.cartItem = state.cartItem.filter(d=>d.product.id!==payload)

      localStorage.setItem('iffiliate_cart',JSON.stringify(state.cartItem))

    },
    reduceCart:(state,{payload}:PayloadAction<number>)=>{
      //
      if(state.cartItem.length!==0){
        state.cartItem = state.cartItem.map(d=>{
          if(d.product.id==payload){
            return {...d,quantity:d.quantity-1}
          }
          return d
        })
      }
      else{
        state.cartItem=[]
      }
    },
    getCartLocally:(state,action)=>{
      //
      const localCart = localStorage.getItem('iffiliate_cart')
      if(localCart){
        state.cartItem= JSON.parse(localCart)
      }

    }
  },
  extraReducers:{}
})



export const {addCartLocally,removeCartLocally,getCartLocally,reduceCart} = CartSlice.actions
export const selectCart= (state:RootState)=>state.cart
export default CartSlice.reducer