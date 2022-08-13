import { StyledLogo } from './Logo.style'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Logo = ():React.ReactElement=>{

  
  return (
    <>
      <StyledLogo>
        <AiOutlineShoppingCart/>
        <span>
        Iffiliate
        </span>
      </StyledLogo>
    </>
  )
}

export default Logo