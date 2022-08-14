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
import {GiAmpleDress, GiAppleSeeds, GiOfficeChair} from 'react-icons/gi'
import {GiSlicedBread} from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiBookReader } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { IndexIntroInfo,
  ImageControllerContainer,FilterBtnContainer ,
  HeroSection,HeroSectionContentBox
} from '../pageStyles/index/index.style'
import HeroImage from '../assets/cloths.webp'
import HeroSearchBar from '../shared/HeroSearchBar/HeroSearchBar'

const Home: NextPage = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })

  return (
    
    <GeneralLayout>
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

        <Button styleType='sec' style={{'width':'100px'}} >
          <RiFilterFill/>
        Filter
        </Button>
      
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
    </GeneralLayout>

  )
}

export default Home
