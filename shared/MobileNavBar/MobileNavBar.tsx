import { useRouter } from 'next/router'
import { CartBagStyleInMobileNav, MobileNavBarContainer,MobileNavLinkContainer } from './MobileNavBar.style'
import {FaBars, FaCut, FaTasks} from 'react-icons/fa'
import {BiMoney, BiSearchAlt} from 'react-icons/bi'
import {BiHomeCircle} from 'react-icons/bi'
import {BsBagDash, BsFillMegaphoneFill}from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import OffCanvas from '../OffCanvas/OffCanvas'
import CustomAccordion from '../Accordion/Accordion'
import { GiBossKey } from 'react-icons/gi'
import SingleCart from '../SingleCart/SingleCart'
import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCart, toggleMobileSearch } from '../../redux/Cart/CartSlice'
import FloatingCartBtn from '../FloatingCartBtn/FloatingCartBtn'
import { decodeToken } from '../../utils/extraFunction'
import {BsFillBagCheckFill} from 'react-icons/bs'

// import {BiMoney} from 'react-icons/bi';
type Prop ={
  dragConstraints:any
}
const MobileNavBar = ({dragConstraints}:Prop):React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 600px)' })
  const gotterTo700px = useMediaQuery({ query: '(min-width: 700px)' })
  const router = useRouter()
  const { shop } = router.query
  const {status,cartItem} = useAppSelector(selectCart);
  const user =  decodeToken()
  const route = useRouter()
  const dispatch = useAppDispatch()

  const handleFloatingBtnClick=()=>{
    //
  }

  const handleRoute=(value:string)=>{
    route.push(value)
  }
  const handleSignOut = ():void=>{
    window.localStorage.removeItem('iffilate_cred')
  }
  const onSearch = ()=>{
    //
    dispatch(toggleMobileSearch({}))
  

  }

  return (
    <MobileNavBarContainer>
      <OffCanvas btnContrroller={<FaBars 
      // style={{'transform':'translateX(10px)'}}
      />}
      >
        <MobileNavLinkContainer>
          <li><a  onClick={()=>handleRoute('/dashboard/shop/')}><AiOutlineShoppingCart/>{' '}Shops</a></li>
          <li><a  onClick={(e)=>route.push('/about')}><GiBossKey/>{' '}About</a></li>
          <li><a  onClick={(e)=>route.push('/dashboard/shop/create')}><FaCut/> {' '}Become a seller</a></li>

        </MobileNavLinkContainer>
      </OffCanvas >
      <BiSearchAlt className='nav_svg' style={{'transform':'translateX(-10px)'}}
        onClick={e=>{
        //
          onSearch()
          console.log('search r2')
        }}
      />
      <BiHomeCircle className='nav_svg' style={{'transform':'translateX(8px)'}}
        onClick={e=>handleRoute('/')}
      />



      {
        gotterTo700px?
        
        
        
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
              'height':'80%','overflowY':'scroll','zIndex':'80px'}}>
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
        
        

          :


          <OffCanvas
            size={isLaptop?60:100}
            btnClick={handleFloatingBtnClick}
            btnContrroller={ 
              <BsFillBagCheckFill  className='nav_svg' style={{'transform':'translateX(27px)'}}/>
            } >
            <br /><br />
            {/* children */}
            <div style={{'position':'relative',
            // 'border':'1px solid red',
              'height':'80%','overflow':'scroll','zIndex':'80px'}}>
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
                
      }






     
    
      <OffCanvas btnContrroller={<AiOutlineUser style={{'transform':'translateX(10px)'}}/>}>
        <MobileNavLinkContainer>
          {
            user?
              <>
                <li><a  onClick={()=>handleRoute('/dashboard/personal/myorders/')}><AiOutlineShoppingCart/>{' '}DashBoard</a></li>
                <li><a onClick={()=>handleRoute(`/dashboard/shop/${'?user='+user.user_id}`)}><AiOutlineShoppingCart/>{' '}Shops</a></li>


                <li><a  onClick={()=>handleRoute('/dashboard/personal/myorders/')}><AiOutlineShoppingCart/>{' '}My Orders</a></li>
                <li><a href="" onClick={e=>{
                  e.preventDefault()
                  handleRoute('/logout')
                }}><AiOutlineShoppingCart/>{' '}Sign Out</a></li>
              
                {
                  router.pathname.includes('/dashboard/shop/[shop]')?
                    <>
                      <li><a  onClick={()=>handleRoute(`/dashboard/shop/${shop}/wallet`)}><BiMoney/>{' '}Wallet</a></li>
                      <li><a  onClick={()=>handleRoute(`/dashboard/shop/${shop}/`)}><AiOutlineShoppingCart/>{' '}Shop Products</a></li>
                      <li><a  onClick={()=>handleRoute(`/dashboard/shop/${shop}/order/`)}><AiOutlineShoppingCart/>{' '}Shop Orders</a></li>
                  
                    </>:''
                }
                <Button style={{'width':'70%','margin':'30px auto'}} onClick={(e)=>route.push('/dashboard/shop/create')}
                >Become a Seller</Button>
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