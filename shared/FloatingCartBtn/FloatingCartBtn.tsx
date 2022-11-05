import { useEffect, useRef, useState } from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import { getOrderApi } from '../../redux/Cart/CartApi'
import { getCartLocally, selectCart } from '../../redux/Cart/CartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { isAuth } from '../../utils/extraFunction'
import {FloatingCartBtnContainer} from './FloatingCartBtn..style'


type Prop ={
  dragConstraints:any
}
const FloatingCartBtn = ({dragConstraints}:Prop):React.ReactElement=>{

  const {status,cartItem} = useAppSelector(selectCart)
  const [total,setTotal]= useState<number>(0.00);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    console.log
    setTotal(cartItem.map(d=>d.quantity*d.product.actual_price).reduce((partialSum,a)=>partialSum+a,0))
  },[cartItem])

  useEffect(()=>{
    if(cartItem.length == 0){
      if(isAuth()){
        //
        dispatch(getOrderApi())
  
      }else{
        //
        dispatch(getCartLocally({}))
      }
    }
  },[])
  return (
    <FloatingCartBtnContainer drag dragConstraints={dragConstraints}>
      <div>
        <BsFillBagCheckFill/>
        <p>{cartItem.length} Items</p>
      </div>
      <div>
        ${total}
      </div>
    </FloatingCartBtnContainer>
  )
}

export default FloatingCartBtn