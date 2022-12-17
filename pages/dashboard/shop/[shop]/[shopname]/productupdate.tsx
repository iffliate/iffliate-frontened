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
import { getCategory, getProductDetail, Product, updateProductDetail } from '../../../../../redux/Product/ProductApi';
import { selectProduct } from '../../../../../redux/Product/ProductSlice';
import SelectBar from '../../../../../shared/SelectBar/SelectBar';
import CheckBoxWithLabel from '../../../../../shared/CheckBoxWithLabel/CheckBoxWithLabel';




const schema = yup.object().shape({
  name:yup.string().required('product name is required'),
  description:yup.string().required('product description is required'),
  actual_price:yup.number().required('product actual price is required'),
  slashed_price:yup.number().required('product description is required'),
  category:yup.number().required(),
  out_of_stock:yup.boolean().default(false).required(),
  image_one:yup.mixed(),
  image_two:yup.mixed(),
  image_three:yup.mixed(),
  image_four:yup.mixed(),
  shop:yup.number()
})


  
const Productupdate:NextPage = ()=>{
  const route = useRouter();
  const dispatch = useAppDispatch();
  const { shopname } = route.query//here we get the product slug it shopname the it variable here but the value is a product slug
  const {notify}= useToast();
  const { status,productDetail,category_list} = useAppSelector(selectProduct);
 
  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },watch
  } = useForm<Product>({ resolver: yupResolver(schema) });
 
  const watchFields = watch(['out_of_stock'])
  const onSubmit: SubmitHandler<Product>=data=>{
    //
    console.log(
      {'updated':data}
    )
    if(typeof shopname == 'string'){
      dispatch(updateProductDetail({
        'data':data,
        'product_slug':shopname,
      }))
    }
  }

  useEffect(()=>{
    if(typeof shopname =='string'){
      //
      dispatch(getProductDetail(shopname))
      if(category_list.length == 0 ){
        dispatch(getCategory(''))
      }
    }

  },[route.isReady])

  useEffect(()=>{
    if(status=='success'||status === 'updated'){
      if(productDetail){
        setValue('name',productDetail.name)
        setValue('description',productDetail.description)
        setValue('slashed_price',productDetail.slashed_price)
        setValue('actual_price',productDetail.actual_price)
        setValue('shop',productDetail.shop)
        setValue('category',productDetail.category)
        setValue('out_of_stock',productDetail.out_of_stock)
      }
    }
    if(status=='updated'){
      notify('Product Updated','success')
    }
  },[status])
  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[]}
    >
      <Preloader loading={status=='pending'}/>
      <Preloader loading={status=='updating'}/>
      <h2>Edit Product</h2>

      <ContentWithFormInput>
        <div>
          <h3>Product Name</h3>
          <p>Edit or change the product name</p>
        </div>

        <Pane>
          <InputWithLabel label='Name'
            register={register('name')}
            errorMessage={errors.name?.message}
          />
          <br />
          <InputWithLabel label='Description' 
            register={register('description')}
            errorMessage={errors.description?.message}
            isTextArea={true} />
        </Pane>
      </ContentWithFormInput>
            
      <ContentWithFormInput>
        <div>
          <h3>Product Pricing</h3>
          <p>Add your actual price and your slashed price</p>
        </div>      

        <Pane>
          <InputWithLabel label='Slash Price'
            register={register('slashed_price')}
            errorMessage={errors.slashed_price?.message}
          />
          <br />
          <InputWithLabel label='Actual Price'
            register={register('actual_price')}
            errorMessage={errors.actual_price?.message}
            isTextArea={true} />
        </Pane>
      </ContentWithFormInput>


      <ContentWithFormInput>
        <div>
          <h3>Product State</h3>
          <p>is it out of stock for now and what categorie</p>
        </div>
        <Pane>
          <div style={{}} >
           
            <SelectBar data={category_list.map(data=>(
              {value:data.id,label:data.name,icon:''}
            )) }

          
            runAfterChange={e=>{

              setValue('category',e.value)
            }}
            />
          </div>
          <br />
         
          <CheckBoxWithLabel
            value={watchFields[0]}
            defualIsChecked={watchFields[0]}
            label='Out Of Stock' 
            register={register('out_of_stock',{
              onChange:(e)=>{
                setValue('out_of_stock',!watchFields[0])
              }
            })}/>


          <ContentWithFormInput>
            <div>
              <h3>Image One</h3>
              <p>Upload your product Image from here</p>
            </div>
            <Pane>
              <UploadImage
              
                setValue={setValue}
                height={1080}
                width={1080}
                name='image_one'
                image_defualt_url={productDetail.image_one}
            
              />
          
            </Pane>
          </ContentWithFormInput>
          <br />
          <ContentWithFormInput>
            <div>
              <h3>Image Two</h3>
              <p>Upload your product Image from here</p>
            </div>
            <Pane>
              <UploadImage
                setValue={setValue}
                height={1080}
                width={1080}
                name='image_two'
                image_defualt_url={productDetail.image_two}

              />
          
            </Pane>
          </ContentWithFormInput>
          <br />
          <ContentWithFormInput>
            <div>
              <h3>Image Three</h3>
              <p>Upload your product Image from here</p>
            </div>
            <Pane>
              <UploadImage
                setValue={setValue}
                height={1080}
                width={1080}
                name='image_three'
                image_defualt_url={productDetail.image_three}

              />
          
            </Pane>
          </ContentWithFormInput>
          <br />
          <ContentWithFormInput>
            <div>
              <h3>Image Four</h3>
              <p>Upload your product Image from here</p>
            </div>
            <Pane>
              <UploadImage
                setValue={setValue}
                height={1080}
                width={1080}
                name='image_four'
                image_defualt_url={productDetail.image_four}

              />
            </Pane>
          </ContentWithFormInput>
          <br />

        </Pane>
      </ContentWithFormInput>
 
      <Button style={{'width':'30%','margin':'0 auto'}} 
        // isLoading={status==='pending'}
        onClick={handleSubmit(onSubmit)}>Update</Button>
      <br /><br /><br /><br />
    </DashboardLayout>
  )
}


export default Productupdate