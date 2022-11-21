import {BsPlus} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'
import { 

  SingleCartContainer,SingleCartBtnContainer,
  SingleCartImageContainer,SingleCartContentContainer
} from './SingleCart.style'
import Image from 'next/image';
import AppleImage from  '../../assets/apple.webp'
import {AiFillCloseCircle} from 'react-icons/ai'
import { CartItem, createOrderApi, reduceOrderItemApi, removeOrderItemApi } from '../../redux/Cart/CartApi';
import { Product } from '../../redux/Product/ProductApi';
import { isAuth } from '../../utils/extraFunction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addCartLocally, reduceCart, removeCartLocally, selectCart } from '../../redux/Cart/CartSlice';
import Preloader from '../Preloader/Preloder';

type Prop ={
  data:CartItem
}
const SingleCart=({data}:Prop):React.ReactElement=>{
  const dispatch = useAppDispatch()
  const {status,cartItem,total,} = useAppSelector(selectCart)


  const handleCart=(product:Product)=>{
    if(isAuth()){
      //the user is logged in use the api
      if(isAuth()){
        //the user is logged in use the api
  
        if(product.id){
          dispatch(createOrderApi({product_id:product.id,cartItemState:cartItem}))
        }
      }
    }else{
      //the user is not logged in use the local storage
      dispatch(addCartLocally(product))
    }
  }
  const handleRemoveCartItem = (cartItem:CartItem)=>{
    //
    if(isAuth()){
      //
      if (cartItem.quantity===1){
        if(cartItem.id&&cartItem.orderID){
          dispatch(removeOrderItemApi({'orderID':cartItem.orderID,'orderitem_id':cartItem.id}))
        }
      }else{
        dispatch(reduceOrderItemApi({'cartItemState':cartItem}))
      }
    }else{

      if(cartItem.quantity==1){
        if(cartItem.product.id){
          dispatch(removeCartLocally(cartItem.product.id))
        }
      }
      else if(cartItem.product.id){
        dispatch(reduceCart(cartItem.product.id))
      }
    }
  }
  return (
    <>
      <Preloader loading={status=='pending'} />
      {
        data?
          <SingleCartContainer>
            <div>
              <SingleCartBtnContainer>
                <BsPlus  onClick={(e)=>handleCart(data.product)}/>
                <p>{data.quantity}</p>
                <AiOutlineMinus onClick={(e)=>{
                  e.preventDefault()
                  handleRemoveCartItem(data)
                }}/>
              </SingleCartBtnContainer>

              <SingleCartImageContainer>
                <Image src={AppleImage}/>
              </SingleCartImageContainer>

              <SingleCartContentContainer>
                <h2>{data.product.name} </h2>
                <p>${data.product.actual_price}</p>
                <small>{`1 X ${data.quantity}pc`}</small>
              </SingleCartContentContainer>
            </div>

            <div>
              <p><small><strong>${data.product.actual_price * data.quantity}</strong></small></p>
              <AiFillCloseCircle onClick={(e)=> {

                if(isAuth()){
                  if(data.id&&data.orderID){
                    dispatch(removeOrderItemApi({'orderID':data.orderID,'orderitem_id':data.id}))
                  }
                }else{
                  if(data.product.id){
                    dispatch(removeCartLocally(data.product.id))
                  }
                }
              }}/>
            </div>
          </SingleCartContainer>:''
      }
    </>
  )
}


export default SingleCart