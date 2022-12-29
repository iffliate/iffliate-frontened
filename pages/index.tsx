import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import SelectBar from '../shared/SelectBar/SelectBar'

import { useMediaQuery } from 'react-responsive'
import {FilterBtnContainer ,
  HeroSection,HeroSectionContentBox,
} from '../pageStyles/index/index.style'
import HeroSearchBar from '../shared/HeroSearchBar/HeroSearchBar'
import SingleItem from '../shared/SingleItem/SingleItem'
import { GridForSingleItem } from '../shared/SingleItem/SingleItem.style'
import ItemDetailMainBody from '../shared/CustomItemDetail/mainBody'
import CustomModal from '../shared/Modal/CustomModal'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectProduct, setCurrentCategory } from '../redux/Product/ProductSlice'
import { getCategory, getProductApi, Product } from '../redux/Product/ProductApi'
import { getCartLocally } from '../redux/Cart/CartSlice'
import { isAuth } from '../utils/extraFunction'
import { getOrderApi } from '../redux/Cart/CartApi'
import Preloader from '../shared/Preloader/Preloder'
import HeroImage from '../assets/cloths.webp'
import HeroImageBags from '../assets/bags.webp'
import HeroImageGrocery from '../assets/grocery.webp'
import HeroImagebakery from '../assets/bakery.webp'
import HeroImagemakeup from '../assets/makeup.webp'
import HeroImageFuniture from '../assets/funiture.jpg'
import PhoneHeroSection from '../shared/PhoneHeroSection/PhoneHeroSection'


type HeroContentType= {
  title: string;
  body: string;
  type: string;
  image: StaticImageData;
}
const HeroContent =[
  {
    title:'Groceries Delivered in 90 Minute',
    body:'Get your healthy foods & snacks delivered at your doorsteps all day everyday',
    type:'grocery',
    image:HeroImageGrocery
  },
  {
    title:'Get Your Bakery Items Delivered',
    body:'Get your favorite bakery items baked and delivered to your doorsteps at any time',
    type:'bakery',
    image:HeroImagebakery
  },
  {
    title:'Branded & imported makeups',
    body:'Easiest and cheapest way to get your branded & imported makeups',
    type:'makeup',
    image:HeroImagemakeup
  },
  {
    title:'Exclusive Branded bags',
    body:'Get your exclusive & branded bags delivered to you in no time',
    type:'bags',
    image:HeroImageBags
  },
  {
    title:'Shop your designer dresses ',
    body:'Ready to wear dresses tailored for you online. Hurry up while stock lasts.',
    type:'clothing',
    image:HeroImage
  },
  {
    title:'Exclusive Furnitures Made Only For you',
    body:'make your house a home with our wide collection of beatiful furniture',
    type:'funiture',
    image:HeroImageFuniture
  },{
    title:'Exclusive Books',
    body:'Meet Your Next Favorite Books.',
    type:'book',
    image:HeroImage
  }

]
const Home: NextPage = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const  [modalIsOpen,setModalIsOpen] = useState(false);
  const [currentDetail,setCurrentDetail] = useState<Product>()
  const { data ,status,currentCategory} = useAppSelector(selectProduct)
  const dispatch = useAppDispatch();
  const {category_list} = useAppSelector(selectProduct);


  useEffect(()=>{
    if(category_list.length == 0 ){
      dispatch(getCategory(''))
    }
  },[])


  
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

  const getData = (name:string):HeroContentType=>{
    return HeroContent.filter(d=>d.type.toLocaleLowerCase()==name.toLocaleLowerCase())[0]
  }
  const hero_content:HeroContentType = getData(currentCategory)
  return (
    
    <GeneralLayout>
      <Preloader loading={status=='pending'}/>
      {
        isLaptop?
          <HeroSection >
            <Image src={hero_content.image} 
              layout="fill"
            />
            <HeroSectionContentBox>
              
              <h1>{hero_content.title}</h1>
              <br />
              <p>{hero_content.body}</p>
              <br />
              <br />
              <HeroSearchBar/>
            </HeroSectionContentBox>
          </HeroSection>
          :<PhoneHeroSection/>
      }

      <br />
      {/* <IndexIntroInfo>
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
      </IndexIntroInfo> */}
      <br />



      <FilterBtnContainer>

        {/* <OffCanvas size={isLaptop?40:100} btnContrroller={
            
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
        </OffCanvas> */}
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
      </FilterBtnContainer>
      {/* https://www.youtube.com/watch?v=HoyHhgMYFj4 for on sticky event listener */}
      <GridForSingleItem>
       
      
        {
          data.map((d,i)=>
            <SingleItem data={d} key={i} onClick={(e)=>{
              setCurrentDetail(d)
              setModalIsOpen(true)
            }} />
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
          <ItemDetailMainBody data={currentDetail}/> 
        }
      />
    
    </GeneralLayout>
    

  )
}

export default Home
