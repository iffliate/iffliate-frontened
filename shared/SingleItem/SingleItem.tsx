
import Image from 'next/image'
import {
  SingleItemContainer,PercentageBar,
  PriceContainer,ItemName,SingleItemBtnContainer
} from './SingleItem.style'
import {BsPlus} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'
import PlaceholderImage from '../../assets/apple.webp'
import { Product } from '../../redux/Product/ProductApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addCartLocally, selectCart,removeCartLocally, reduceCart } from '../../redux/Cart/CartSlice';
import { isAuth } from '../../utils/extraFunction';
import { useEffect } from 'react';
import { CartItem, createOrderApi, reduceOrderItemApi, removeOrderItemApi } from '../../redux/Cart/CartApi';
// import PlaceholderImage from '../../assets/bags.webp'

type Prop = {
  onClick:(e:any)=>void,
  data:Product
}
const SingleItem = ({ onClick ,data}:Prop):React.ReactElement=>{
  const dispatch = useAppDispatch()
  const {status,cartItem,total,} = useAppSelector(selectCart)

  const handleCart=(product:Product)=>{
    if(isAuth()){
      //the user is logged in use the api

      if(product.id){
        dispatch(createOrderApi({product_id:product.id,cartItemState:cartItem}))
      }
    }else{
      //the user is not logged in use the local storage
      dispatch(addCartLocally(product))
    }
  }
  const handleRemoveCartItem = (fuccartItem:CartItem)=>{
    //
    if(isAuth()){
      if(fuccartItem.quantity===1){
        //endpoint to delete an item
        if(fuccartItem.id&&fuccartItem.orderID){
          dispatch(removeOrderItemApi({'orderID':fuccartItem.orderID,'orderitem_id':fuccartItem.id}))
        }
      }else{
        dispatch(reduceOrderItemApi({'cartItemState':fuccartItem}))
      }
    }else{

      if(fuccartItem.quantity==1){
        if(fuccartItem.product.id){
          dispatch(removeCartLocally(fuccartItem.product.id))
        }
      }
      else if(fuccartItem.product.id){
        dispatch(reduceCart(fuccartItem.product.id))
      }
    }
  }

  return (
    <SingleItemContainer >
      <PercentageBar>
        {data.slash_percentage}%
      </PercentageBar>

      <img src={data.image_one} style={{'zIndex':'0'}}/>
      <PriceContainer>
        <p>{data.actual_price}₦</p>
        {/* <p><strike>$2.00</strike></p> */}
        <p><small>{data.slashed_price}</small></p>

      </PriceContainer>

      <ItemName>
        {data.name}
      </ItemName>
      <br />

      {
        cartItem.map(d=>d.product.id).includes(data.id)?
          <SingleItemBtnContainer variant='fill'  >
            <AiOutlineMinus onClick={e=>{
              handleRemoveCartItem(cartItem.filter(d=>d.product.id==data.id)[0])
            }}/>
            {/* if it fill show number else show add */}
            <p>{ cartItem.filter(d=>d.product.id==data.id)[0].quantity }</p>
            {/* <p>Add</p> */}
            <BsPlus  onClick={(e)=>handleCart(data)}/>
          </SingleItemBtnContainer>
          :

          <SingleItemBtnContainer variant='empty'  onClick={(e)=>handleCart(data)}>
            <AiOutlineMinus/>
            {/* if it fill show number else show add */}
            {/* <p>2</p> */}
            <p>Add</p>
            <BsPlus />
          </SingleItemBtnContainer>
      }
    </SingleItemContainer>
  )
}

export default SingleItem