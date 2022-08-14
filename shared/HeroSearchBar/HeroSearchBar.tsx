import Button from '../Button/Button'

import {HeroSearchBarContainer} from './HeroSearchBar.style'


const HeroSearchBar = ():React.ReactElement=>{


  return (
    <HeroSearchBarContainer>
      <input type="text" placeholder='Search your product from here'/>
      <Button>
        Search
      </Button>
    </HeroSearchBarContainer>
  )
}

export default HeroSearchBar