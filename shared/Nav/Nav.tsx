import { useMediaQuery } from 'react-responsive'
import Logo from '../Logo/Logo'
import {NavContainer} from './Nav.style'


const Nav = ():React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 660px)' })
  return (
    <NavContainer>
      {
        isLaptop?
          ''
          :
          <div style={{'margin':'0 auto','width':'50%'}}>
            <Logo/>

          </div>      }

    </NavContainer>
  )
}



export default Nav