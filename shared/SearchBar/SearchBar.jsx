import { BiSearchAlt } from 'react-icons/bi'
import { SearchBarStyle, SearchBarStyleContainer } from './SearchBarStyle.style'
import {IoIosClose} from 'react-icons/io'


const SearchBar =()=>{


  return(
    <SearchBarStyleContainer>
      <BiSearchAlt className='searchIcon'/>
      <SearchBarStyle placeholder='Search your products fr....' />
      <IoIosClose className='closeIcon'/>
    </SearchBarStyleContainer>
  )
}

export default SearchBar