import Button from '../../Button/Button'
import ItemCounter from '../ItemCounter/ItemCounter'
import {
  SmallHeading,Content,
  PricingContainer,ActualPrice,
  PricePercent,CrossedPrice,ItemDetailContainer,ActualPriceAndPricePercent
} from './itemDetail.style'

import {BsCart3 } from 'react-icons/bs' 
import { useMediaQuery } from 'react-responsive'
import { Product } from '../../../redux/Product/ProductApi'
import { isAuth } from '../../../utils/extraFunction'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { addCartLocally, selectCart } from '../../../redux/Cart/CartSlice'
import { createOrderApi } from '../../../redux/Cart/CartApi'
import { useState } from 'react'
import { useRouter } from 'next/router'
type Prop = {
  data:Product
}
const ItemDetail = ({data}:Prop) =>{
  const route = useRouter()
  const NotMobile = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const dispatch = useAppDispatch()
  const {status,cartItem,total,} = useAppSelector(selectCart)
  const [dataCount,setDataCount] =useState<number>(
    cartItem.map(d=>d.product.id).includes(data?.id)?
      cartItem.filter(d=>d.product.id==data?.id)[0].quantity 
      :0)



  const handleAddTOCart =()=>{
    if(isAuth()){
      //the user is logged in use the api

      if(data.id){
        console.log('You are good')
        dispatch(createOrderApi({product_id:data.id,cartItemState:cartItem,'custom_quantity':dataCount}))
      }
    }else{
      //the user is not logged in use the local storage
      if(data.id){
        dispatch(addCartLocally(data))
      }
    }
  }
  return (
    <ItemDetailContainer>
      <SmallHeading onClick={(e)=>{
        if(data.shop_info){
          route.push(`/shops/${data?.shop_info.slug}`)
        }
      }}>
        {data?.shop_info?.name}
      </SmallHeading>

      <h1>{data.name}</h1>

      <Content>
        {data.description}
      </Content>
      <br />
      <PricingContainer>
        <ActualPriceAndPricePercent>
          <ActualPrice>
            {data.actual_price}0
            
          </ActualPrice>
          <PricePercent>
            <strong>50%</strong>
          </PricePercent>
        </ActualPriceAndPricePercent>

        <CrossedPrice>
          {/* this shoudld be a component */}
          <s>
            {data.slashed_price}
          </s>
        </CrossedPrice>
      </PricingContainer>
      <br />
      <br />
      <div style={{'display':NotMobile?'flex':'block','justifyContent':'space-between','alignItems':'center'}}>

        <ItemCounter
          width={NotMobile?'35%':'100%'}
          product={data}
          dataCount={dataCount}
          setDataCount={setDataCount}
        />
        <br />
        <Button 
          style={{'width':NotMobile?'60%':'100%'}}
          onClick={handleAddTOCart}
          //  isLoading={true}
        >
          <BsCart3 /> Add to cart
        </Button>
      </div>
    </ItemDetailContainer>
  )
}


export default ItemDetail