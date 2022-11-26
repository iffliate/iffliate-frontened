import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import {NavContainer,NavLinkContainer,NavBtnContainer} from './Nav.style'
import SearchBar from '../SearchBar/SearchBar'
import { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { selectProduct, setCurrentCategory } from '../../redux/Product/ProductSlice'
import { getCategory, getProductApi } from '../../redux/Product/ProductApi'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCart, toggleMobileSearch } from '../../redux/Cart/CartSlice'

const Nav = ():React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const isLaptopIn100px = useMediaQuery({ query: '(min-width: 1000px)' })
  const logged_in =  isAuth()
  const [readyToSearch,setReadyToSearch] = useState(false);
  const route = useRouter()
  const path:string = route.pathname
  const user =  decodeToken()
  const {category_list,status} = useAppSelector(selectProduct);
  const {isMobileSearch } = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const handleRoute=(value:string)=>{
    route.push(value)
  }
  const handleSignOut = ():void=>{
    window.localStorage.removeItem('iffilate_cred')
  }

  useEffect(()=>{
    if(category_list.length == 0 ){
      dispatch(getCategory(''))
    }
  },[])
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
                    <SelectBar data={category_list.map(data=>(
                      {value:data.id,label:data.name,icon:''}
                    )) }

          
                    runAfterChange={e=>{
                      dispatch(setCurrentCategory(e.label))
                      //this is were we would search by categories
                      dispatch(getProductApi({shopId:'',look_up:`&category=${e.label}`}))
                    }}
                    />
                  </div>
                  :
                  ''
              }

            </div>

            <NavLinkContainer>
              <ul>
                <li><a onClick={()=>handleRoute('/dashboard/shop/')}>Shops</a></li>
                <li><a href="#" onClick={()=>handleRoute('/about/')}>About</a></li>
                <li><a href="#"  onClick={(e)=>route.push('/dashboard/shop/create')}>Become a seller</a></li>
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
                                <li><a onClick={()=>handleRoute('/dashboard/personal/myorders/')} ><AiOutlineShoppingCart/>{' '}Dasboard</a></li>
                                {
                                  user?
                                    <li><a onClick={()=>handleRoute(`/dashboard/shop/${'?user='+user.user_id}`)}><AiOutlineShoppingCart/>{' '}Shops</a></li>
                                    :''
                                }
                                {/* <li><a onClick={()=>handleRoute('/dashboard/shop/')}><AiOutlineShoppingCart/>{' '}All Shops</a></li> */}
                                <li><a href="#" onClick={()=>handleRoute('/dashboard/personal/myorders/')}><AiOutlineShoppingCart/>{' '}My Orders</a></li>
                              
                                <li><a onClick={()=>handleRoute('/checkout')} ><AiOutlineShoppingCart/>{' '}Checkout</a></li>
                                <li><a href="" onClick={e=>{
                                  e.preventDefault()
                                  handleRoute('/logout')
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
              isMobileSearch?
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