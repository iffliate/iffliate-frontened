import { NextPage } from 'next';

import DashboardLayout from '../../../../../layout/DashboardLayout/DashboardLayout';
import { useRouter } from 'next/router';
import Pane from '../../../../../shared/Pane/Pane';
import Button from '../../../../../shared/Button/Button';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import {selectShop} from '../../../../../redux/Shop/ShopSlice'
import { getShopDetail, updateShopDetail } from '../../../../../redux/Shop/ShopApi';
import useToast from '../../../../../hooks/useToastify';
import Preloader from '../../../../../shared/Preloader/Preloder';
import { ContentWithFormInput } from '../../../../../pageStyles/index/_create';
import InputWithLabel from '../../../../../shared/InputWithLabel/InputWithLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UploadImage from '../../../../../shared/UploadImage/UploadImage';
import { shopType } from '../../../../../redux/Shop/ShopApi';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios'




const schema = yup.object().shape({
  name:yup.string().required(),
  facebook:yup.string(),
  twitter:yup.string(),
  whatsapp:yup.string(),
  instagram:yup.string(),
  about:yup.string().required(),
  info:yup.string().required(),


  address_country:yup.string().required(),
  address_city:yup.string().required(),
  address_zip:yup.number().required(),
  street_address:yup.string().required(),
  phone_number:yup.string().required(),

  //


  // images
  banner:yup.mixed(),
  logo:yup.mixed(),


})



const EditShopProfile:NextPage = ()=>{

  const route = useRouter();
  const { shopname } = route.query
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const dispatch = useAppDispatch();
  const {notify}= useToast();
  const {status,shopDetail} = useAppSelector(selectShop)
  // getShopDetail

  useEffect(()=>{
    if(typeof shopname =='string'){
      dispatch(getShopDetail({'shopName':shopname}))
    }
  },[route.isReady])

  useEffect(()=>{
    if(shopDetail){
      setValue('name',shopDetail.name)
      setValue('about',shopDetail.about)
      setValue('info',shopDetail.info)
      setValue('address_country',shopDetail.address_country)
      setValue('address_zip',shopDetail.address_zip)
      setValue('address_city',shopDetail.address_city)
      setValue('street_address',shopDetail.street_address)
      setValue('phone_number',shopDetail.phone_number)

      setValue('facebook',shopDetail.facebook)
      setValue('twitter',shopDetail.twitter)
      setValue('whatsapp',shopDetail.whatsapp)
      setValue('instagram',shopDetail.instagram)

    }

    if(status=='updated'){
      notify('Update','success')
    }
  },[status])

  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<shopType>({ resolver: yupResolver(schema) });
  
  const onSubmit: SubmitHandler<shopType>=data=>{

    const new_data:any = {...data}
    new_data.products=[]
    if(typeof shopname =='string'){
      dispatch(updateShopDetail({
        'shopName':shopname,
        'data':new_data
      }))
    }
  }


  console.log(
    {status,shopDetail} 
  )
  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[
        // {label:'Product',route:`/dashboard/shop/${shop}`},
        // {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        // {label:'Wallet',route:`/dashboard/shop/${shop}/wallet`},
        // {label:'Logout',route:'/logout'},
      ]}
    >
      <Preloader loading={status=='pending'}/>
      <h2>Edit Shop</h2>
      <ContentWithFormInput>
        <div>
          <h3>Shop Name</h3>
          <p>Add your shop display name</p>
        </div>
        <Pane>
          <InputWithLabel label='Name'
            register={register('name')}
            errorMessage={errors.name?.message}
          />
          <br />
          <InputWithLabel label='About Your Store'
            register={register('about')}
            errorMessage={errors.about?.message}

          />
          <br />

          <InputWithLabel label='More Info'
            isTextArea={true}
            register={register('info')}
            errorMessage={errors.info?.message}

          />

        </Pane>
      </ContentWithFormInput>


      <ContentWithFormInput>
        <div>
          <h3>Logo</h3>
          <p>Upload your shop logo from here</p>
        </div>
        <Pane>
          <UploadImage
            setValue={setValue}
            height={76}
            width={76}
            name='logo'
          />
          
        </Pane>
      </ContentWithFormInput>
      

      {/* 
      <ContentWithFormInput>
        <div>
          <h3>Cover Image</h3>
          <p>Upload your shop cover image from here
Dimension of the cover image should be <strong> 1170 x 435px</strong></p>
        </div>
        <Pane>
          <UploadImage
            setValue={setValue}
            height={435}
            width={1170 }
            name='banner'
          />
        </Pane>
      </ContentWithFormInput> */}


      
      
      
      <ContentWithFormInput>
        <div>
          <h3>Shop Address</h3>
          <p>Add your physical shop address from here</p>
        </div>
        <Pane>
          <InputWithLabel label='Country'
            register={register('address_country')}
            errorMessage={errors.address_country?.message}

          />
          <br />
          <InputWithLabel label='City'
            register={register('address_city')}
            errorMessage={errors.address_city?.message}

          />
          {/* <br />
          <InputWithLabel label='State'
          register={register('street_address')}
          /> */}

          <br />
          <InputWithLabel label='ZIP' 
            register={register('address_zip')}
            errorMessage={errors.address_zip?.message}
            
          />

          <br />
          <InputWithLabel label='Phone' 
            register={register('phone_number')}
            errorMessage={errors.phone_number?.message}
            
          />

          <br />
          <InputWithLabel label='Street Address' 
            register={register('street_address')}
            errorMessage={errors.street_address?.message}

            isTextArea={true}/>

        </Pane>
      </ContentWithFormInput>
      
      <ContentWithFormInput>
        <div>
          <h3>Shop Socials</h3>
          <p>Add your shop settings information from here</p>
        </div>
        <Pane>
          <InputWithLabel label='FaceBook(optional)'
            register={register('facebook')}
            errorMessage={errors.facebook?.message}

          />
          <br />
          <InputWithLabel label='Instagram(optional)'
            register={register('instagram')}
            errorMessage={errors.instagram?.message}

          />
          <br />
          <InputWithLabel label='Twitter(optional)'
            register={register('twitter')}
            errorMessage={errors.twitter?.message}

          />

          <br />
          <InputWithLabel label='Whatapp(optional)'
            register={register('whatsapp')}
            errorMessage={errors.whatsapp?.message}
          />


        </Pane>
      </ContentWithFormInput>
      
      <Button style={{'width':'30%','margin':'0 auto'}} 
        // isLoading={status==='pending'}
        onClick={handleSubmit(onSubmit)}>Update</Button>
      <br /><br /><br /><br />

    </DashboardLayout>
  )
}



export default EditShopProfile