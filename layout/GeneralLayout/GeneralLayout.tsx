import { useMediaQuery } from 'react-responsive'
import Button from '../../shared/Button/Button'
import FloatingCartBtn from '../../shared/FloatingCartBtn/FloatingCartBtn'
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar'
import Nav from '../../shared/Nav/Nav'
import OffCanvas from '../../shared/OffCanvas/OffCanvas'
import SingleCart from '../../shared/SingleCart/SingleCart'




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
        isLaptop?
          <OffCanvas
            size={30}
            btnContrroller={ 
              <FloatingCartBtn/>
            } >
            <br /><br />
            {/* children */}
            <div style={{'position':'relative',
            // 'border':'1px solid red',
              'height':'80%','overflowY':'scroll'}}>
              <SingleCart/>
              {/* <SingleCart/> */}
              <SingleCart/>
            
              <Button style={{'padding':'.5rem 0','position':'absolute','bottom':'0'}}>
              Checkout

                <p style={{'padding':'.6rem','backgroundColor':'white','color':'#f77305','borderRadius':'20px','margin':'0 .8rem'}}>$2333000</p>
              </Button>
            </div>
          </OffCanvas>
          : <MobileNavBar/>
      }
     
    </div>
  )
}

export default GeneralLayout