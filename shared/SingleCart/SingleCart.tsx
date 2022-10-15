import {BsPlus} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'
import { 

  SingleCartContainer,SingleCartBtnContainer,
  SingleCartImageContainer,SingleCartContentContainer
} from './SingleCart.style'
import Image from 'next/image';
import AppleImage from  '../../assets/apple.webp'
import {AiFillCloseCircle} from 'react-icons/ai'
import { CartItem } from '../../redux/Cart/CartApi';
import { Product } from '../../redux/Product/ProductApi';
import { isAuth } from '../../utils/extraFunction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addCartLocally, reduceCart, removeCartLocally, selectCart } from '../../redux/Cart/CartSlice';

type Prop ={
  data:CartItem
}
const SingleCart=({data}:Prop):React.ReactElement=>{
  const dispatch = useAppDispatch()

  const handleCart=(product:Product)=>{
    if(isAuth()){
      //the user is logged in use the api
    }else{
      //the user is not logged in use the local storage
      dispatch(addCartLocally(product))
    }
  }
  const handleRemoveCartItem = (cartItem:CartItem)=>{
    //
    if(cartItem.quantity==1){
      if(cartItem.product.id){
        dispatch(removeCartLocally(cartItem.product.id))
      }
    }
    else if(cartItem.product.id){
      dispatch(reduceCart(cartItem.product.id))
    }
  }
  return (
    <>
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
              <AiFillCloseCircle/>
            </div>
          </SingleCartContainer>:''
      }
    </>
  )
}


export default SingleCart