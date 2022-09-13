import  {useState} from 'react'
import {
  MainImageContainer,
  PreviewBoxContainer,ThumbNailImageContainer,
  ThunbNail,Container
} from './ItemImagePreview.style'
import {BiChevronLeft} from 'react-icons/bi'
import {BiChevronRight} from 'react-icons/bi'

import Image from 'next/image'
import DummyImage from '../../../assets/offer-1.webp'


export interface ItemImagePreviewType {
    openModalPic?:()=>void;
    isInModalState?:boolean;
}

export interface PreviewBoxContainerType{
    isInModalState?:boolean;
}



export interface ThunbNailType{
    currentItem:number;   
}

const ItemImagePreview= ({isInModalState=false}:ItemImagePreviewType):React.ReactElement=>{
    
  const [slideIndex, setSlideIndex] = useState(1)
  const  MAX_PICS =4;
  const nextSlide = () => {
    if(slideIndex !==MAX_PICS){
      setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === MAX_PICS){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
      setSlideIndex(MAX_PICS)
    }
  }
  const moveDot = (index:number) => {
    setSlideIndex(index)
  }
  return(
    <Container>
      <MainImageContainer>
        <Image  src={DummyImage} alt="mainImage"/>
        <PreviewBoxContainer isInModalState={isInModalState}>
          <BiChevronRight  onClick={()=>nextSlide()}/>

          <BiChevronLeft onClick={()=>prevSlide()}/>
        </PreviewBoxContainer>
      </MainImageContainer>

      {/* 
            the three images would appear hear when the time comes
            */}
      <ThumbNailImageContainer>
        {[...new Array(4)].map((data,index)=>(
          <ThunbNail key={index}
            currentItem={slideIndex} 
            onClick={()=>moveDot(index+1)}
          >
            <Image src={DummyImage} alt="" />
          </ThunbNail>
        ))}
                
      </ThumbNailImageContainer>  
    </Container>
  )
}


export default ItemImagePreview