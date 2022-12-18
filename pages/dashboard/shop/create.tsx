import { NextPage } from 'next'
import DashboardLayout from '../../../layout/DashboardLayout/DashboardLayout'
import InputWithLabel from '../../../shared/InputWithLabel/InputWithLabel'
import Pane from '../../../shared/Pane/Pane'
import UploadImage from '../../../shared/UploadImage/UploadImage'
import { ContentWithFormInput } from '../../../pageStyles/index/_create'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createShop, shopType } from '../../../redux/Shop/ShopApi'
import Button from '../../../shared/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectShop, setShopIdle } from '../../../redux/Shop/ShopSlice'
import { useEffect, useState } from 'react'
import useToast from '../../../hooks/useToastify'
import { useRouter } from 'next/router'
import axios from 'axios'
import Preloader from '../../../shared/Preloader/Preloder'



const schema = yup.object().shape({
  name:yup.string().required(),
  facebook:yup.string(),
  twitter:yup.string(),
  whatsapp:yup.string(),
  instagram:yup.string(),
  about:yup.string().required(),
  info:yup.string().required(),

  // account
  bank_name:yup.string().required(),
  account_holder_email:yup.string().email('invalid email').required(),
  account_number:yup.number().required(),
  account_holder_name:yup.string().required(),

  address_country:yup.string().required(),
  address_city:yup.string().required(),
  address_zip:yup.number().required(),
  street_address:yup.string().required(),
  phone_number:yup.string().required(),

  //


  // images
  banner:yup.mixed().required(),
  logo:yup.mixed().required(),


})
const Create:NextPage = ()=>{
  const route = useRouter()
  const dispatch  = useAppDispatch();
  const {status,errMessage} = useAppSelector(selectShop);
  const {notify} = useToast()
  const [banks,setBanks] = useState<any>()
  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<shopType>({ resolver: yupResolver(schema) });
  
 
  const onSubmit: SubmitHandler<shopType>=data=>{
    dispatch(createShop(data))
  }

  const getBanks = async()=>{
    const resp:any =await axios.get('https://api.paystack.co/bank');

    setBanks(resp.data.data.map((data:any)=>data.name))
  }
  

  useEffect(()=>{
    if(status==='created'){
      dispatch(setShopIdle({}))
      notify('Created Succesfully','success')
      route.push('/dashboard/shop')

      
    }
    if(status=='error'){
      dispatch(setShopIdle({}))

      notify(errMessage,'error')
    }
  },[status])

  useEffect(()=>{

    //we dont need this value that why we prefill it with bull shit
    setValue('account_holder_email','dumb@gmail.com')
    setValue('account_holder_name','dumb@gmail.com')
    setValue('bank_name','dumb@gmail.com')
    setValue('account_number',243546)
  },[])
  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[]}
    >
      <Preloader loading={status==='creating' || status==='pending'}/>
      <h2>Create Shop</h2>
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
      </ContentWithFormInput>
      
    
      
      
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
          <InputWithLabel label='Street Address' 
            register={register('street_address')}
            errorMessage={errors.street_address?.message}
            isTextArea={true}/>
          <br />
          <InputWithLabel label='Phone Number' 
            register={register('phone_number')}
            errorMessage={errors.address_zip?.message}
            
          />
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
        isLoading={status==='pending'}
        onClick={handleSubmit(onSubmit)}>Create</Button>
      <br /><br /><br /><br />
    </DashboardLayout>
  )
}

export default Create