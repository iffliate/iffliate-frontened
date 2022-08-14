import {AiOutlineShoppingCart} from 'react-icons/ai'
import IffiliateLogo from '../../assets/Logo.png'
import Image from 'next/image'
import {LogoContainer} from './Logo.style'

const Logo = ({width=200}:{width:number}):React.ReactElement=>{
  
  return (
    <>
      <LogoContainer width={width}>
        <Image  src={IffiliateLogo}/>
      </LogoContainer>
      {/* <StyledLogo>
        <AiOutlineShoppingCart/>
        <span>
        Iffiliate
        </span>
      </StyledLogo> */}
    </>
  )
}

export default Logo