import IffiliateLogo from '../../assets/Logo.png'
import Image from 'next/image'
import {LogoContainer} from './Logo.style'
import { useRouter } from 'next/router'

const Logo = ({width=200}:{width:number}):React.ReactElement=>{
  const router = useRouter()
  return (
    <>
      <LogoContainer width={width}>
        <Image  src={IffiliateLogo} onClick={(e)=>{
          router.push('/')
        }}/>
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