import ItemDetail from './itemDetail/itemDetail'
import ItemImagePreview from './ItemImagePreview/ItemImagePreview'
import {MainBodyContainer} from './mainBody.style'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Product } from '../../redux/Product/ProductApi'

type Prop = {
  data?:Product
}
const ItemDetailMainBody = ({data={} as Product}:Prop)=>{
  const  [modalIsOpen,setModalIsOpen] = useState(false)


  const AvoidCartPopOnMobile = useMediaQuery({
    query: '(min-width: 900px)'
  })
  const handleOpenModal = ()=>{
    if(AvoidCartPopOnMobile){
      //this means when it on mobile dont pop up use the arrow
      setModalIsOpen(false)
    }
  }
  return (
    <>        
      <br />
      
      <MainBodyContainer>
        <ItemImagePreview images={[
          data.image_one,data.image_two,data.image_three,data.image_four
        ]} openModalPic={handleOpenModal} />
        <ItemDetail data={data} />
        
      </MainBodyContainer>

    </>
  )
}




export default ItemDetailMainBody