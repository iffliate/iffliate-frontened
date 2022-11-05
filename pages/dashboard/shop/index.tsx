import { NextPage } from 'next';
import Image from 'next/image';
import GeneralLayout from '../../../layout/GeneralLayout/GeneralLayout';
import {HiLocationMarker} from 'react-icons/hi'
import {AllShopsContainer,ShopContainer,
  ShopIntroCard,
  ShopIntroCardIconContainer}  from '../../../pageStyles/index/_index.style'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectShop } from '../../../redux/Shop/ShopSlice';
import { useEffect } from 'react';
import { getShop } from '../../../redux/Shop/ShopApi';
import { useRouter } from 'next/router';
import {AiFillEye,AiFillSetting} from 'react-icons/ai'
import { decodeToken } from '../../../utils/extraFunction';
import Preloader from '../../../shared/Preloader/Preloder';
// import DummyImage from '../../assets/shopimage.webp'

const DummyImage= 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F882%2FFurniture.png&w=1920&q=75'
const index:NextPage=()=>{
  const user =  decodeToken()
  const {status,data} = useAppSelector(selectShop)
  const dispatch = useAppDispatch()
  const route = useRouter()
  useEffect(()=>{
    dispatch(getShop())
  },[])
  console.log({status,data})
  return (
    <GeneralLayout>
      <Preloader loading={status==='pending'} />
      <br /><br /><br />
      <AllShopsContainer>
        <h2>All Your Shops</h2>
        <br />
        <ShopContainer >
          {
            data.map((item,index)=>(
              <ShopIntroCard key={index} >
                <div>
                  <img src={item.logo} className='shop_logo'/>
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    <HiLocationMarker/>
                    {item.address_city} ,{item.address_city}
                  </p>

                </div>
                <ShopIntroCardIconContainer>
                  {
                    user?.user_id == item.user  
                      ?
                      <AiFillSetting onClick={(e)=>route.push(`/dashboard/shop/${item.id}/`)}/>:
                      ''
                  }
                  <AiFillEye onClick={(e)=>route.push(`/shops/${item.slug}/`)}/>
                </ShopIntroCardIconContainer>
              </ShopIntroCard>
            ))
          }
        </ShopContainer>

      </AllShopsContainer>
    </GeneralLayout>
  )
}

export default index