import Button from '../../Button/Button'
import ItemCounter from '../ItemCounter/ItemCounter'
import {
  SmallHeading,Content,
  PricingContainer,ActualPrice,
  PricePercent,CrossedPrice,ItemDetailContainer,ActualPriceAndPricePercent
} from './itemDetail.style'

import {BsCart3 } from 'react-icons/bs' 
import { useMediaQuery } from 'react-responsive'
import { useContext } from 'react'

const ItemDetail = () =>{

  const NotMobile = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const handleAddTOCart = ()=>{
    //
  }
  return (
    <ItemDetailContainer>
      <SmallHeading>
                SNEAKER COMPANY
      </SmallHeading>

      <h1>Fall Limited Edition Sneakers</h1>

      <Content>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ill withstand everything
                the weather can offer.
      </Content>
      <br />
      <PricingContainer>
        <ActualPriceAndPricePercent>
          <ActualPrice>
            $125.00
            
          </ActualPrice>
          <PricePercent>
            <strong>50%</strong>
          </PricePercent>
        </ActualPriceAndPricePercent>

        <CrossedPrice>
          {/* this shoudld be a component */}
          <s>
                    $250.00
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