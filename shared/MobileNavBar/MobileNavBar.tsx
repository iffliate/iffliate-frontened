import { CartBagStyleInMobileNav, MobileNavBarContainer,MobileNavLinkContainer } from './MobileNavBar.style'
import {FaBars, FaCut, FaTasks} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import {BiHomeCircle} from 'react-icons/bi'
import {BsBagDash, BsFillMegaphoneFill}from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import OffCanvas from '../OffCanvas/OffCanvas'
import CustomAccordion from '../Accordion/Accordion'
import { GiBossKey } from 'react-icons/gi'
const MobileNavBar = ():React.ReactElement=>{

  return (
    <MobileNavBarContainer>
      <OffCanvas btnContrroller={<FaBars 
      // style={{'transform':'translateX(10px)'}}
      />}
      >
        <MobileNavLinkContainer>
          <li><a href=""><AiOutlineShoppingCart/>{' '}Shops</a></li>
          <li><a href=""><GiBossKey/>{' '}Founders</a></li>
          <li><a href=""><FaCut/> {' '}Offers</a></li>
          <li><a href=""><FaTasks/>{' '}Faqs</a></li>
          <li><a href=""><BsFillMegaphoneFill/>{' '}Contact</a></li>

        </MobileNavLinkContainer>
      </OffCanvas >
      <BiSearchAlt style={{'transform':'translateX(-20px)'}}/>
      <BiHomeCircle style={{'transform':'translateX(-20px)'}}/>
      <CartBagStyleInMobileNav>
        <p>
          10
        </p>
        <BsBagDash/>
      </CartBagStyleInMobileNav>
      
      <OffCanvas btnContrroller={<AiOutlineUser style={{'transform':'translateX(10px)'}}/>}>
        <p>dd</p>
      </OffCanvas>
      
      {/* <AiOutlineUser/> */}
    </MobileNavBarContainer>
  )
}


export default MobileNavBar