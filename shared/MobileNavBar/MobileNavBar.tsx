import { CartBagStyleInMobileNav, MobileNavBarContainer,MobileNavLinkContainer } from './MobileNavBar.style'
import {FaBars, FaCut, FaTasks} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import {BiHomeCircle} from 'react-icons/bi'
import {BsBagDash, BsFillMegaphoneFill}from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import OffCanvas from '../OffCanvas/OffCanvas'
import CustomAccordion from '../Accordion/Accordion'
import { GiBossKey } from 'react-icons/gi'
import SingleCart from '../SingleCart/SingleCart'
import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'

const MobileNavBar = ():React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 600px)' })

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
      <BiSearchAlt style={{'transform':'translateX(-10px)'}}/>
      <BiHomeCircle style={{'transform':'translateX(-7px)'}}/>

      <OffCanvas
        size={isLaptop?60:100}
        btnContrroller={ 
          <CartBagStyleInMobileNav style={{'transform':'translateX(20px)'}}>
            <p>
          10
            </p>
            <BsBagDash/>
          </CartBagStyleInMobileNav>} >
        <br /><br />
        <div style={{'position':'relative',
          // 'border':'1px solid red',
          'height':'80%','overflowY':'scroll'}}>
          <SingleCart/>
          {/* <SingleCart/> */}
          <SingleCart/>
            
          <Button style={{'padding':'.5rem 0','position':'absolute','bottom':'0'}}>
              Checkout

            <p style={{'padding':'.6rem','backgroundColor':'white','color':'#f77305','borderRadius':'20px','margin':'0 .8rem'}}>$2333000</p>
          </Button>
        </div>
      </OffCanvas>
     
      
      <OffCanvas btnContrroller={<AiOutlineUser style={{'transform':'translateX(10px)'}}/>}>
        <p>dd</p>
      </OffCanvas>
      
      {/* <AiOutlineUser/> */}
    </MobileNavBarContainer>
  )
}


export default MobileNavBar