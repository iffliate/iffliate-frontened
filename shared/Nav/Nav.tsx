import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import {NavContainer,NavLinkContainer,NavBtnContainer} from './Nav.style'
import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import {  RiShoppingBagFill } from 'react-icons/ri'
import { GiAmpleDress, GiAppleSeeds, GiOfficeChair, GiSlicedBread } from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiBookReader } from 'react-icons/bi'
import SelectBar from '../SelectBar/SelectBar'
import { decodeToken, isAuth } from '../../utils/extraFunction'
import { useRouter } from 'next/router'
import UserIconBtn from '../UserIconBtn/UserIconBtn'
import OffCanvas from '../OffCanvas/OffCanvas'
import { MobileNavLinkContainer } from '../MobileNavBar/MobileNavBar.style'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = ():React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const isLaptopIn100px = useMediaQuery({ query: '(min-width: 1000px)' })
  const logged_in =  isAuth()
  const [readyToSearch,setReadyToSearch] = useState(false);
  const route = useRouter()
  const path:string = route.pathname
  const user =  decodeToken()
  const handleRoute=(value:string)=>{
    route.push(value)
  }
  const handleSignOut = ():void=>{
    window.localStorage.removeItem('iffilate_cred')
  }
  
  return (
    <NavContainer>
      {
        isLaptop?
          <div className='ddg'>
            <div style={{
              // 'border':'1px solid red',
              'display':'flex','alignItems':'center'
              
            }}>
              <Logo width={200}/>
              {
                isLaptopIn100px?
                  <div style={{'width':'140px','marginLeft':'20px'}} >
                    <SelectBar data={[
                      {value:'Grocery',label:'Grocery',icon:<GiAppleSeeds color='#ff4f01'/>},
                      {value:'Bakery',label:'Bakery',icon:<GiSlicedBread color='#ff4f01'/>},
                      {value:'MakeUP',label:'Makeup',icon:<FaPaintBrush color='#ff4f01'/>},
                      {value:'Bags',label:'Bags',icon:<RiShoppingBagFill color='#ff4f01'/>},
                      {value:'Clothing',label:'Clothing',icon:<GiAmpleDress color='#ff4f01'/>},
                      {value:'Funiture',label:'Funiture',icon:<GiOfficeChair color='#ff4f01'/>},
                      {value:'Book',label:'Book',icon:<BiBookReader color='#ff4f01'/>},
                    ]}
                    />
                  </div>
                  :
                  ''
              }
              <SearchBar/>

            </div>

            <NavLinkContainer>
              <ul>
                <li><a href="">Faq</a></li>
                <li><a onClick={()=>handleRoute('/dashboard/shop/')}>Shops</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <NavBtnContainer>
                {
                  logged_in ?
                    <>  
                      {
                        path.includes('personal')?
                          <Button style={{'padding':'.4rem'}} onClick={(e)=>route.push('/dashboard/shop/create')}>Become a Seller</Button>
                          :
                          <OffCanvas 
                            size={25}
                            direction='right'
                            btnContrroller={<UserIconBtn/>}>
                            <div>
                              <MobileNavLinkContainer >
                                {
                                  user?
                                    <li><a onClick={()=>handleRoute(`/dashboard/shop/${'?user='+user.user_id}`)}><AiOutlineShoppingCart/>{' '}My Shops</a></li>
                                    :''
                                }
                                <li><a onClick={()=>handleRoute('/dashboard/shop/')}><AiOutlineShoppingCart/>{' '}All Shops</a></li>
                                <li><a href="" onClick={()=>handleRoute('/dashboard/personal/myorders/')}><AiOutlineShoppingCart/>{' '}My Orders</a></li>
                              
                                <li><a href=""><AiOutlineShoppingCart/>{''}My Wishlist</a></li>
                                <li><a href=""><AiOutlineShoppingCart/>{' '}Checkout</a></li>
                                <li><a href="" onClick={e=>{
                                  e.preventDefault()
                                  handleSignOut()
                                }}><AiOutlineShoppingCart/>{' '}Sign Out</a></li>
                              </MobileNavLinkContainer>
                            </div>
                          </OffCanvas>
                      }
                      {/* <UserIconBtn/> */}
                      {/* <Button style={{'padding':'.4rem'}} onClick={(e)=>route.push('/dashboard/shop/create')}>Become a Seller</Button> */}
                      <Button style={{'padding':'.4rem'}} onClick={handleSignOut} >signout</Button>

                    </>
                    :
                    <>
                      <Button style={{'padding':'.4rem'}} onClick={(e)=>route.push('/signup')}>Sign up</Button>
                      <Button style={{'padding':'.4rem'}}  onClick={(e)=>route.push('/signin')}>Sign in</Button>
                    </>
                }
              </NavBtnContainer>
            </NavLinkContainer>

          </div>
          :
          <>
            {
              readyToSearch?
                <SearchBar/>
                :
                <div style={{'margin':'0 auto','width':'50%'}}>
                
                  <Logo width={200}/>
                </div>     
            }
          </>
      }

    </NavContainer>
  )
}



export default Nav