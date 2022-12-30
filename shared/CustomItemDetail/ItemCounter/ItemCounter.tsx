import {TiMinus,TiPlus} from 'react-icons/ti'
import {
  ItemCounterContainer,Number
}from './ItemCounter.style'
import React, { useState } from 'react'
import { Product } from '../../../redux/Product/ProductApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addCartLocally, selectCart } from '../../../redux/Cart/CartSlice';
import { isAuth } from '../../../utils/extraFunction';
import { createOrderApi } from '../../../redux/Cart/CartApi';
export interface ItemCounterContainerType{
width?:string;
product?:Product;
dataCount?:number;
setDataCount?:any;
}
const ItemCounter = ({width,product,dataCount=0,setDataCount}:ItemCounterContainerType):React.ReactElement=>{

  const dispatch = useAppDispatch()
  const {status,cartItem,total,} = useAppSelector(selectCart)



  const handleIncrement = ()=>{
    //
    setDataCount(dataCount+1)
  }
  const handleDecrement = ()=>{
    //
    if(dataCount !=1){
      setDataCount(dataCount-1)
    }

  }



  return (
    <ItemCounterContainer width={width}>

      <TiPlus   onClick={handleIncrement}/>

      <Number>
        {
          dataCount
            
        }
      </Number>

      <TiMinus onClick={handleDecrement}/>

    </ItemCounterContainer> 
  )
}

export default ItemCounter