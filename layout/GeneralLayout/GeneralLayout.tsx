import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { selectCart } from '../../redux/Cart/CartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Button from '../../shared/Button/Button'
import FloatingCartBtn from '../../shared/FloatingCartBtn/FloatingCartBtn'
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar'
import Nav from '../../shared/Nav/Nav'
import OffCanvas from '../../shared/OffCanvas/OffCanvas'
import SingleCart from '../../shared/SingleCart/SingleCart'




type GeneralLayoutType = React.PropsWithChildren<{}>
const GeneralLayout = ({children}:GeneralLayoutType):React.ReactElement=>{
  
  
  const router = useRouter()
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });
  const dipatch = useAppDispatch();
  const {status,cartItem} = useAppSelector(selectCart)
  const handleFloatingBtnClick=()=>{
    //
    console.log(2*2)
  }
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
            btnClick={handleFloatingBtnClick}
            btnContrroller={ 
              <FloatingCartBtn/>
            } >
            <br /><br />
            {/* children */}
            <div style={{'position':'relative',
            // 'border':'1px solid red',
              'height':'80%','overflowY':'scroll'}}>
              {
                cartItem.length==0?
                  '':
                  cartItem.map((data,index)=>(
                    <SingleCart data={data} key={index}/>
                  ))
              }
            
              <Button style={{'padding':'.5rem 0','position':'absolute','bottom':'0'}} onClick={()=>router.push('/checkout')}>
              Checkout
                <p style={{'padding':'.6rem','backgroundColor':'white','color':'#f77305','borderRadius':'20px','margin':'0 .8rem'}}>
                  ${cartItem.map(d=>d.quantity*d.product.actual_price).reduce((partialSum,a)=>partialSum+a,0)}
                </p>
              </Button>
            </div>
          </OffCanvas>
          : <MobileNavBar/>
      }
     
    </div>
  )
}

export default GeneralLayout