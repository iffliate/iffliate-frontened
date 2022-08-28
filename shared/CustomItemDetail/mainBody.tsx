import ItemDetail from './itemDetail/itemDetail'
import ItemImagePreview from './ItemImagePreview/ItemImagePreview'
import {MainBodyContainer} from './mainBody.style'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const ItemDetailMainBody = ()=>{
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
        <ItemImagePreview  openModalPic={handleOpenModal} />
        <ItemDetail />

      </MainBodyContainer>

    </>
  )
}




export default ItemDetailMainBody