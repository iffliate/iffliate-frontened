import {BsPlus} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'
import { 

  SingleCartContainer,SingleCartBtnContainer,
  SingleCartImageContainer,SingleCartContentContainer
} from './SingleCart.style'
import Image from 'next/image';
import AppleImage from  '../../assets/apple.webp'
import {AiFillCloseCircle} from 'react-icons/ai'


const SingleCart=():React.ReactElement=>{


  return (
    <SingleCartContainer>
      <div>
        <SingleCartBtnContainer>
          <BsPlus />
          <p>2</p>
          <AiOutlineMinus/>
        </SingleCartBtnContainer>

        <SingleCartImageContainer>
          <Image src={AppleImage}/>
        </SingleCartImageContainer>

        <SingleCartContentContainer>
          <h2>Apple </h2>
          <p>$1.60</p>
          <small>{'1 X 1pc'}</small>
        </SingleCartContentContainer>
      </div>

      <div>
        <p><small><strong>$40.00</strong></small></p>
        <AiFillCloseCircle/>
      </div>
    </SingleCartContainer>
  )
}


export default SingleCart