import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import { IndexIntroInfo,ImageControllerContainer,FilterBtnContainer } from '../pageStyles/index/index.style'
import Offer from '../assets/offer-1.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Button from '../shared/Button/Button'
import {RiFilterFill, RiShoppingBagFill} from 'react-icons/ri'
import SelectBar from '../shared/SelectBar/SelectBar'
import {GiAmpleDress, GiAppleSeeds, GiOfficeChair} from 'react-icons/gi'
import {GiSlicedBread} from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { BiBookReader } from 'react-icons/bi'
const Home: NextPage = () => {
  return (
    
    <GeneralLayout>
      <br />
      <IndexIntroInfo>
        <Image src={Offer} alt="" />
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
