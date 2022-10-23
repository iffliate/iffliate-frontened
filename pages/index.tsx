import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Offer from '../assets/offer-1.webp'
import Offer2 from '../assets/offer-5.webp'
import Offer3 from '../assets/offer-3.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Button from '../shared/Button/Button'
import {RiFilterFill, RiShoppingBagFill} from 'react-icons/ri'
import SelectBar from '../shared/SelectBar/SelectBar'
import {GiAmpleDress, GiAppleSeeds, GiDiscGolfBag, GiOfficeChair} from 'react-icons/gi'
import {GiSlicedBread} from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiBookReader } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { IndexIntroInfo,
  ImageControllerContainer,FilterBtnContainer ,
  HeroSection,HeroSectionContentBox,IndexPageMainArea
} from '../pageStyles/index/index.style'
import HeroImage from '../assets/cloths.webp'
import HeroSearchBar from '../shared/HeroSearchBar/HeroSearchBar'
import OffCanvas from '../shared/OffCanvas/OffCanvas'
import { MobileNavLinkContainer } from '../shared/MobileNavBar/MobileNavBar.style'
import StickySideNav from '../shared/StickySideNav/StickySideNav'
import SingleItem from '../shared/SingleItem/SingleItem'
import { GridForSingleItem } from '../shared/SingleItem/SingleItem.style'
import ItemDetailMainBody from '../shared/CustomItemDetail/mainBody'
import CustomModal from '../shared/Modal/CustomModal'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectProduct } from '../redux/Product/ProductSlice'
import { getProductApi } from '../redux/Product/ProductApi'
import { getCartLocally } from '../redux/Cart/CartSlice'
import { isAuth } from '../utils/extraFunction'
import { getOrderApi } from '../redux/Cart/CartApi'
import Preloader from '../shared/Preloader/Preloder'
const Home: NextPage = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const  [modalIsOpen,setModalIsOpen] = useState(false);
  const { data ,status} = useAppSelector(selectProduct)
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getProductApi({shopId:''}))

    if(isAuth()){
    //get database Cart      
      dispatch(getOrderApi())
    }else{
      //get Local Storage Cart
      dispatch(getCartLocally({}))
    }
  },[])
  return (
    
    <GeneralLayout>
      <Preloader loading={status=='pending'}/>
      {
        isLaptop?
          <HeroSection >
            <Image src={HeroImage} 
              layout="fill"
            />
            <HeroSectionContentBox>
              <h1>Groceries Delivered in 90 Minute</h1>
              <br />
              <p>Get your healthy foods {'&'} snacks delivered at your doorsteps all day everyday</p>
              <br />
              <br />
              <HeroSearchBar/>
            </HeroSectionContentBox>
          </HeroSection>
          :''
      }

      <br />
      <IndexIntroInfo>
        <div>
          <div className='offer1'>
            <Image src={Offer} alt=""  />
          </div>
          <div className='offer2'>
            <Image src={Offer2} alt="" />
          </div>
          <div className='offer3'> 
            <Image src={Offer3} alt="" />
          </div>
        </div>
        <ImageControllerContainer>
          <AiOutlineArrowLeft/>
          <AiOutlineArrowRight/>
        </ImageControllerContainer>
      </IndexIntroInfo>
      <br />



      <FilterBtnContainer>

        <OffCanvas size={isLaptop?40:100} btnContrroller={
            
          <Button styleType='sec' style={{'width':'100px'}} >
            <RiFilterFill/>
          Filter by
          </Button>
        
        }>
          <MobileNavLinkContainer>
            <li><a href=""><GiDiscGolfBag/>Hand Bag</a></li>
            <li><a href=""><GiDiscGolfBag/>Laptop Bag</a></li>
            <li><a href=""><GiDiscGolfBag/>Shoulder Bags</a></li>
            <li><a href=""><GiDiscGolfBag/>Purse</a></li>
            <li><a href=""><GiDiscGolfBag/>Wallet</a></li>

          </MobileNavLinkContainer>
        </OffCanvas>
        <div style={{'width':'140px'}}>
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
      </FilterBtnContainer>
      {/* https://www.youtube.com/watch?v=HoyHhgMYFj4 for on sticky event listener */}
      <GridForSingleItem>
       
      
        {
          data.map((d,i)=>
            <SingleItem data={d} key={i} onClick={(e)=>setModalIsOpen(true)} />
          )
        }
      </GridForSingleItem>
      <br />
      <br />
      <br />

      {/* */}
      <CustomModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        element={
          <ItemDetailMainBody/> 
        }
      />
    
    </GeneralLayout>
    

  )
}

export default Home
