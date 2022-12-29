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
type Prop = {
  data:Product
}
const ItemDetail = ({data}:Prop) =>{

  const NotMobile = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const handleAddTOCart = ()=>{
    //
  }
  return (
    <ItemDetailContainer>
      <SmallHeading>
        {data.shop} ..shop name
      </SmallHeading>

      <h1>{data.name}</h1>

      <Content>
        {data.description}
      </Content>
      <br />
      <PricingContainer>
        <ActualPriceAndPricePercent>
          <ActualPrice>
            {data.actual_price}
            
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