import { createSlice ,PayloadAction} from '@reduxjs/toolkit';
import { stat } from 'fs/promises';
import { Product } from '../Product/ProductApi';
import { RootState, sliceStatus } from '../store';
import { CartItem, createOrderApi, createOrderApiResponse, getOrderApi, reduceOrderItemApi, removeOrderItemApi,removeOrderItemApiProp } from './CartApi';

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
      state.cartItem = []


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
  extraReducers:({addCase})=>{
    addCase(getOrderApi.pending,(state,action)=>{
      state.status='pending'
    }),
    addCase(getOrderApi.fulfilled,(state,{payload}:PayloadAction<createOrderApiResponse[]>)=>{
      //
      state.status='success';
      if(payload.length===0){
        state.cartItem=[]
      }else{
        state.cartItem=payload[0].items.map(d=>{
          return {id:d.id,quantity:d.quantity,product:d.product,'orderID':payload[0].id}
        })
      }
    }),
    addCase(getOrderApi.rejected,(state,action)=>{
      state.status='error'
      state.errMessage='Some Error Occured'
      console.log({'getOrderApi error':action.payload})

    })



    addCase(createOrderApi.pending,(state,action)=>{
      state.status='pending'
    })
    
    addCase(createOrderApi.fulfilled,(state,{payload}:PayloadAction<createOrderApiResponse>)=>{
      state.status='created';
      // state.cartItem.map(d=>d.product.id).includes(payload.id
      // if(state.cartItem.map(d=>d.product.id).includes(payload.items[0].product.id)){
      //   state.cartItem= [...state.cartItem.map(d=>{
      //     return {...d,quantity:payload.items[0].quantity}
      //   })]
      // }
      // else{
      //   state.cartItem = [...state.cartItem,{
      //     product:payload.items[0].product,
      //     quantity:payload.items[0].quantity,
      //     id:payload.items[0].id
      //   }]
      // }
      state.cartItem =payload.items.map(d=>{

        return {id:d.id,'orderID':payload.id,quantity:d.quantity,'product':d.product}
      })
    })

    addCase(createOrderApi.rejected,(state,action)=>{
      console.log({'createOrderApi error':action.payload})
      state.status='error'
      state.errMessage='Some Error Occured Creating your order'
    })
    
    addCase(reduceOrderItemApi.pending,(state,action)=>{
      //
      state.status='updating'
    })

    addCase(reduceOrderItemApi.fulfilled,(state,{payload}:PayloadAction<createOrderApiResponse>)=>{
      state.status='updated'
      state.cartItem =payload.items.map(d=>{
        
        return {id:d.id,'orderID':payload.id,quantity:d.quantity,'product':d.product}
      })
    })

    // remove cart item  with api
  
    addCase(removeOrderItemApi.pending,(state,action)=>{
      state.status='deleting'
    })

    addCase(removeOrderItemApi.fulfilled,(state,{payload}:PayloadAction<removeOrderItemApiProp>)=>{
      //
      state.status='deleted'
      state.cartItem= state.cartItem.filter(d=>d.id != payload.orderitem_id)
    })


  }
})



export const {addCartLocally,removeCartLocally,getCartLocally,reduceCart} = CartSlice.actions
export const selectCart= (state:RootState)=>state.cart
export default CartSlice.reducer