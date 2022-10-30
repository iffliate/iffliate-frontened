import { useRouter } from 'next/router'
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
import { useAppSelector } from '../../redux/hooks'
import { selectCart } from '../../redux/Cart/CartSlice'
import FloatingCartBtn from '../FloatingCartBtn/FloatingCartBtn'
import { decodeToken } from '../../utils/extraFunction'
type Prop ={
  dragConstraints:any
}
const MobileNavBar = ({dragConstraints}:Prop):React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 600px)' })
  const router = useRouter()
  const {status,cartItem} = useAppSelector(selectCart);
  const user =  decodeToken()
  const route = useRouter()

  const handleFloatingBtnClick=()=>{
    //
    console.log(2*2)
  }

  const handleRoute=(value:string)=>{
    route.push(value)
  }
  const handleSignOut = ():void=>{
    window.localStorage.removeItem('iffilate_cred')
  }
  
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
      <BiSearchAlt style={{'transform':'translateX(-10px)'}}
        onClick={e=>{
        //
        }}
      />
      <BiHomeCircle style={{'transform':'translateX(-7px)'}}
        onClick={e=>handleRoute('/')}
      />

      <OffCanvas
        size={isLaptop?60:100}
        btnClick={handleFloatingBtnClick}
        btnContrroller={ 
          <FloatingCartBtn dragConstraints={dragConstraints}/>
        } >
        <br /><br />
        {/* children */}
        <div style={{'position':'relative',
          // 'border':'1px solid red',
          'height':'80%','overflowY':'scroll'}}>
          {
            cartItem.length==0?
              '':
              cartItem.map((data,index)=>(
                <SingleCart data={data} key={index}/>
              ))
          }
            
          <Button style={{'padding':'.5rem 0','position':'absolute','bottom':'0'}} onClick={()=>router.push('/checkout')}>
              Checkout
            <p style={{'padding':'.6rem','backgroundColor':'white','color':'#f77305','borderRadius':'20px','margin':'0 .8rem'}}>
                  ${cartItem.map(d=>d.quantity*d.product.actual_price).reduce((partialSum,a)=>partialSum+a,0)}
            </p>
          </Button>
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
        </div>
      </OffCanvas>
     
    
      <OffCanvas btnContrroller={<AiOutlineUser style={{'transform':'translateX(10px)'}}/>}>
        <MobileNavLinkContainer>
          {
            user?
              <>
                <li><a onClick={()=>handleRoute(`/dashboard/shop/${'?user='+user.user_id}`)}><AiOutlineShoppingCart/>{' '}Shops</a></li>


                <li><a  onClick={()=>handleRoute('/dashboard/personal/myorders/')}><AiOutlineShoppingCart/>{' '}My Orders</a></li>
                <li><a href="" onClick={e=>{
                  e.preventDefault()
                  handleSignOut()

                  handleRoute('/')
                }}><AiOutlineShoppingCart/>{' '}Sign Out</a></li>
              </>
              :
              <>
              
                <li><a onClick={()=>handleRoute('/signup')}>Sign up</a></li>
                <li><a onClick={()=>handleRoute('/signin')}>Sign in</a></li>
              </>
          }
          
        </MobileNavLinkContainer>
      </OffCanvas>
          
      
      {/* <AiOutlineUser/> */}
    </MobileNavBarContainer>
  )
}


export default MobileNavBar