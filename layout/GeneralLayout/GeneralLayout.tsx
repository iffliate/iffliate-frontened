import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar'
import Nav from '../../shared/Nav/Nav'




type GeneralLayoutType = React.PropsWithChildren<{}>
const GeneralLayout = ({children}:GeneralLayoutType):React.ReactElement=>{



  return (
    <div>
      <Nav/>
      {
        children
      }

      <MobileNavBar/>
    </div>
  )
}

export default GeneralLayout