import { NextPage } from 'next';
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout';
import { useRouter } from 'next/router'
import SingleItem from '../../shared/SingleItem/SingleItem';
import { useState } from 'react';
import { GridForSingleItem } from '../../shared/SingleItem/SingleItem.style';

import {ShopDetailMobileNav,ShopBanner,MainShopArea} from '../../pageStyles/index/_shopName.style'
import { useMediaQuery } from 'react-responsive';
import CustomModal from '../../shared/Modal/CustomModal';
import ShopDetailPane from '../../shared/ShopDetailPane/ShopDetailPane';




const Shop_name:NextPage= ()=>{
  const router = useRouter()
  const { shopName } = router.query
  const  [modalIsOpen,setModalIsOpen] = useState(false);
  const [openShopDetailModal,OpenShopDetailModal] = useState(false);
  // 1023
  const isLaptop = useMediaQuery({ query: '(min-width: 1023px)' })

  // console.log({shopName})
  return (
    <GeneralLayout>
      
      {
        !isLaptop?
          <ShopDetailMobileNav>
            <div>
              <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Ffashion.png&w=640&q=75" alt="" />
            </div>
            <div>
              <p>Clothing Shop</p>
              <h3 onClick={(e)=>OpenShopDetailModal(true)}>more info</h3>
            </div>
          </ShopDetailMobileNav>:''
      }


      <MainShopArea>
        {
          isLaptop?
            <div>
              <ShopDetailPane/>
            </div>:<CustomModal
              modalIsOpen={openShopDetailModal}
              setModalIsOpen={OpenShopDetailModal}
              element={
                <ShopDetailPane/>
              }
            />
        }
        <div>
          <ShopBanner>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </ShopBanner>

          <GridForSingleItem repeat={isLaptop?4:null}>
            {
              [...new Array(10)].map((d,i)=>
                <SingleItem key={i} onClick={(e)=>setModalIsOpen(true)} />
              )
            }
          </GridForSingleItem>
        </div>
      </MainShopArea>
    </GeneralLayout>
  )
}

export default Shop_name