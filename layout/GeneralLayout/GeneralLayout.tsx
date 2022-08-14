import { useMediaQuery } from 'react-responsive'
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar'
import Nav from '../../shared/Nav/Nav'




type GeneralLayoutType = React.PropsWithChildren<{}>
const GeneralLayout = ({children}:GeneralLayoutType):React.ReactElement=>{


  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })

  return (
    <div>
      <Nav/>
      {
        children
      }
      {
        isLaptop?'': <MobileNavBar/>
      }
     
    </div>
  )
}

export default GeneralLayout