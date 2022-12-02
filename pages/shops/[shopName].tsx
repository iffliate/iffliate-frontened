import { NextPage } from 'next';
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout';
import { useRouter } from 'next/router'
import SingleItem from '../../shared/SingleItem/SingleItem';
import { useEffect, useState } from 'react';
import { GridForSingleItem } from '../../shared/SingleItem/SingleItem.style';

import {ShopDetailMobileNav,ShopBanner,MainShopArea} from '../../pageStyles/index/_shopName.style'
import { useMediaQuery } from 'react-responsive';
import CustomModal from '../../shared/Modal/CustomModal';
import ShopDetailPane from '../../shared/ShopDetailPane/ShopDetailPane';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectShop } from '../../redux/Shop/ShopSlice';
import Preloader from '../../shared/Preloader/Preloder';
import { getShopDetail } from '../../redux/Shop/ShopApi';
import useToast from '../../hooks/useToastify';




const Shop_name:NextPage= ()=>{
  const router = useRouter()
  const { shopName } = router.query
  const  [modalIsOpen,setModalIsOpen] = useState(false);
  const [openShopDetailModal,OpenShopDetailModal] = useState(false);
  const { shopDetail,status ,errMessage} = useAppSelector(selectShop);
  const dispatch = useAppDispatch()
  // 1023
  const isLaptop = useMediaQuery({ query: '(min-width: 1023px)' })
  const {notify} = useToast() 

  useEffect(()=>{
    if(typeof shopName === 'string' ){
      //get shop info
      dispatch(getShopDetail({shopName}))
      
    }
  },[shopName])

  useEffect(()=>{
    if(status ==='error'){
      notify(errMessage,'error')
    }
  },[status])

  return (
    <GeneralLayout>
      <Preloader loading={status==='pending'} />
      {
        !isLaptop?
          shopDetail?
            <ShopDetailMobileNav>
              <div>
                <img src={shopDetail.logo} alt="" />
              </div>
              <div>
                <p>{shopDetail.name}</p>
                <h3 onClick={(e)=>OpenShopDetailModal(true)}>more info</h3>
              </div>
            </ShopDetailMobileNav>:''
          :''
      }

      {
        shopDetail?
          <MainShopArea>
            {
              isLaptop?
                <div>
                  <ShopDetailPane shopDetail={shopDetail}/>
                </div>:<CustomModal
                  modalIsOpen={openShopDetailModal}
                  setModalIsOpen={OpenShopDetailModal}
                  element={
                    <ShopDetailPane  shopDetail={shopDetail}/>
                  }
                />
            }
            {
              shopDetail?
                <div>
                  <ShopBanner>
                    <img src={shopDetail.banner} alt="" />
                  </ShopBanner>

                  <GridForSingleItem repeat={isLaptop?4:null}>
                    {
                      shopDetail.products.map((d,i)=>
                        <SingleItem data={d} key={i} onClick={(e)=>setModalIsOpen(true)} />
                      )
                    }
                  </GridForSingleItem>
                </div>:''
            }
          </MainShopArea>:''
      }
    </GeneralLayout>
  )
}

export default Shop_name