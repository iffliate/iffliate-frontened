import {BsFillBagCheckFill} from 'react-icons/bs'
import {FloatingCartBtnContainer} from './FloatingCartBtn..style'




const FloatingCartBtn = ():React.ReactElement=>{



  return (
    <FloatingCartBtnContainer >
      <div>
        <BsFillBagCheckFill/>
        <p>2 Items</p>
      </div>
      <div>
        $200.00
      </div>
    </FloatingCartBtnContainer>
  )
}

export default FloatingCartBtn