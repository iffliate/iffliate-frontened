import { CartBagStyleInMobileNav, MobileNavBarContainer } from './MobileNavBar.style'
import {FaBars} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import {BiHomeCircle} from 'react-icons/bi'
import {BsBagDash}from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
const MobileNavBar = ():React.ReactElement=>{

  return (
    <MobileNavBarContainer>
      <FaBars/>
      <BiSearchAlt/>
      <BiHomeCircle/>
      <CartBagStyleInMobileNav>
        <p>
          10
        </p>
        <BsBagDash/>
      </CartBagStyleInMobileNav>

      <AiOutlineUser/>
    </MobileNavBarContainer>
  )
}


export default MobileNavBar