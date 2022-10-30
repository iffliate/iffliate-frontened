import { useEffect, useRef, useState } from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import { selectCart } from '../../redux/Cart/CartSlice'
import { useAppSelector } from '../../redux/hooks'
import {FloatingCartBtnContainer} from './FloatingCartBtn..style'


type Prop ={
  dragConstraints:any
}
const FloatingCartBtn = ({dragConstraints}:Prop):React.ReactElement=>{

  const {status,cartItem} = useAppSelector(selectCart)
  const [total,setTotal]= useState<number>(0.00);
  useEffect(()=>{
    console.log
    setTotal(cartItem.map(d=>d.quantity*d.product.actual_price).reduce((partialSum,a)=>partialSum+a,0))
  },[cartItem])

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