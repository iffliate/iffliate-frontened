import ItemDetail from './itemDetail/itemDetail'
import ItemImagePreview from './ItemImagePreview/ItemImagePreview'
import {MainBodyContainer} from './mainBody.style'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Product } from '../../redux/Product/ProductApi'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCart } from '../../redux/Cart/CartSlice'
import { isAuth } from '../../utils/extraFunction'
import { useRouter } from 'next/router'
import useToast from '../../hooks/useToastify'

type Prop = {
  data?:Product
}
const ItemDetailMainBody = ({data={} as Product}:Prop)=>{
  const route = useRouter();
  const {notify } = useToast()
  const  [modalIsOpen,setModalIsOpen] = useState(false)
  const dispatch = useAppDispatch();
  const {status,cartItem,total,} = useAppSelector(selectCart)

  const AvoidCartPopOnMobile = useMediaQuery({
    query: '(min-width: 900px)'
  })
  const handleOpenModal = ()=>{
    if(AvoidCartPopOnMobile){
      //this means when it on mobile dont pop up use the arrow
      setModalIsOpen(false)
    }
  }

  useEffect(()=>{
    if(!isAuth()){
      notify('Please you need to sign in','error')
      route.push('/signin')
    }
  },[])
  return (
    <>        
      <br />
      
      <MainBodyContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <ItemImagePreview images={[
          data.image_one,data.image_two,data.image_three,data.image_four
        ]} openModalPic={handleOpenModal} />
        <ItemDetail data={data} />
        
      </MainBodyContainer>

    </>
  )
}




export default ItemDetailMainBody