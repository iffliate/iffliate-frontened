
import Image from 'next/image'
import {
  SingleItemContainer,PercentageBar,
  PriceContainer,ItemName,SingleItemBtnContainer
} from './SingleItem.style'
import {BsPlus} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'
import PlaceholderImage from '../../assets/apple.webp'
// import PlaceholderImage from '../../assets/bags.webp'

type Prop = {
  onClick:(e:any)=>void
}
const SingleItem = ({ onClick }:Prop):React.ReactElement=>{



  return (
    <SingleItemContainer onClick={(e)=>onClick(e)}>
      <PercentageBar>
        20%
      </PercentageBar>

      <Image src={PlaceholderImage} style={{'zIndex':'0'}}/>

      <PriceContainer>
        <p>$1.60</p>
        <p><strike>$2.00</strike></p>
      </PriceContainer>

      <ItemName>
        Apples
      </ItemName>
      <br />
      <SingleItemBtnContainer variant='empty'>
        <AiOutlineMinus/>
        {/* if it fill show number else show add */}
        {/* <p>2</p> */}
        <p>Add</p>
        <BsPlus />
      </SingleItemBtnContainer>
    </SingleItemContainer>
  )
}

export default SingleItem