import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getProductApi } from '../../redux/Product/ProductApi';
import { selectProduct } from '../../redux/Product/ProductSlice';
import Button from '../Button/Button'

import {HeroSearchBarContainer} from './HeroSearchBar.style'


const HeroSearchBar = ():React.ReactElement=>{
  const dispatch  = useAppDispatch();
  const {currentCategory}= useAppSelector(selectProduct)
  const [data,setData ]= useState<string>('')

  const handleSearch = ()=>{
    if(!data) return
    setData('')//to avoid duplicate search

    dispatch(getProductApi({'shopId':'',look_up:`&name=${data}`}))
  }
  return (  
    <HeroSearchBarContainer >
      <input type="text" onChange={e=>setData(e.target.value)} placeholder='Search your product from here'/>
      <Button onClick={handleSearch}>
        Search
      </Button>
    </HeroSearchBarContainer>
  )
}

export default HeroSearchBar