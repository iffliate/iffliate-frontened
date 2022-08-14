import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import {NavContainer,NavLinkContainer,NavBtnContainer} from './Nav.style'
import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import { RiFilterFill, RiShoppingBagFill } from 'react-icons/ri'
import { GiAmpleDress, GiAppleSeeds, GiOfficeChair, GiSlicedBread } from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiBookReader } from 'react-icons/bi'
import SelectBar from '../SelectBar/SelectBar'

const Nav = ():React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const isLaptopIn100px = useMediaQuery({ query: '(min-width: 1000px)' })

  const [readyToSearch,setReadyToSearch] = useState(false)
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
                <li><a href="">shops</a></li>
                <li><a href="">Offers</a></li>
                <li><a href="">Faq</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <NavBtnContainer>
                <Button style={{'padding':'.4rem'}} >Become a Seller</Button>
                <Button style={{'padding':'.4rem'}}>Join</Button>
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