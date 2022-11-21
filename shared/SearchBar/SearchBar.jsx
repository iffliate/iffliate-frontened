import { BiSearchAlt } from 'react-icons/bi'
import { SearchBarStyle, SearchBarStyleContainer } from './SearchBarStyle.style'
import {IoIosClose} from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProduct } from '../../redux/Product/ProductSlice';
import { useState } from 'react';
import { getProductApi } from '../../redux/Product/ProductApi';
import { toggleMobileSearch } from '../../redux/Cart/CartSlice';


const SearchBar =()=>{
  const dispatch  = useAppDispatch();
  const {currentCategory}= useAppSelector(selectProduct)
  const [data,setData ]= useState('')

  const handleSearch = ()=>{
    if(!data) return
    setData('')//to avoid duplicate search

    dispatch(getProductApi({'shopId':'',look_up:`&name=${data}`}))
  }
  const onSearch = ()=>{
    //
    dispatch(toggleMobileSearch({}))

  }
  return(
    <SearchBarStyleContainer>
      <BiSearchAlt className='searchIcon' onClick={handleSearch}/>
      <SearchBarStyle placeholder='Search your products fr....' onChange={e=>setData(e.target.value)} />
      <IoIosClose className='closeIcon'
        onClick={onSearch}
      />
    </SearchBarStyleContainer>
  )
}

export default SearchBar