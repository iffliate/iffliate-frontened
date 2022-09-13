import {TiMinus,TiPlus} from 'react-icons/ti'
import {
  ItemCounterContainer,Number
}from './ItemCounter.style'
import React from 'react'

export interface ItemCounterContainerType{
width?:string;
}
const ItemCounter = (props:ItemCounterContainerType):React.ReactElement=>{


  const handleIncrement = ()=>{
    //
  }
  const handleDecrement = ()=>{
    //
  }

  return (
    <ItemCounterContainer width={props.width}>

      <TiPlus   onClick={handleIncrement}/>

      <Number>
            2
      </Number>

      <TiMinus onClick={handleDecrement}/>

    </ItemCounterContainer> 
  )
}

export default ItemCounter