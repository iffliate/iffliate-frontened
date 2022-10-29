import { NextPage } from 'next';
import { BiBookReader } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { GiAmpleDress, GiAppleSeeds, GiOfficeChair, GiSlicedBread } from 'react-icons/gi';
import { RiShoppingBagFill } from 'react-icons/ri';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import { ContentWithFormInput } from '../../../../pageStyles/index/_create';
import Button from '../../../../shared/Button/Button';
import { ButtonStyle } from '../../../../shared/Button/Button.style';
import InputWithLabel from '../../../../shared/InputWithLabel/InputWithLabel';
import Pane from '../../../../shared/Pane/Pane';
import SelectBar from '../../../../shared/SelectBar/SelectBar';
import UploadImage from '../../../../shared/UploadImage/UploadImage';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { selectProduct } from '../../../../redux/Product/ProductSlice';
import useToast from '../../../../hooks/useToastify';
import { getCategory, Product, productCreateApi } from '../../../../redux/Product/ProductApi';
import { useEffect } from 'react';
import CheckBoxWithLabel from '../../../../shared/CheckBoxWithLabel/CheckBoxWithLabel';
import { useRouter } from 'next/router'
import Preloader from '../../../../shared/Preloader/Preloder';

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

const CreateProduct:NextPage =()=>{
  const dispatch  = useAppDispatch();
  const {status,errMessage,category_list} = useAppSelector(selectProduct);
  const {notify} = useToast();
  const router = useRouter()
  const { shop } = router.query

  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },watch
  } = useForm<Product>({ resolver: yupResolver(schema) });
  
  
  const watchFields = watch(['out_of_stock'])
  const onSubmit: SubmitHandler<Product>=data=>{
    //
    console.log({'submited':data})
    dispatch(productCreateApi(data))
  }

  useEffect(()=>{
    // setValue('category',15)
    console.log(typeof shop === 'string',shop)
    if(typeof shop === 'string'){
      setValue('shop',parseInt(shop))
    }

    dispatch(getCategory(''))
  },[])
  useEffect(()=>{
    if(status==='created'){
      notify('Created Succefully','success')
      router.push(`/dashboard/shop/${shop}/`)
    }
  },[status])
  return (
    <DashboardLayout
      listOFLinks={[]}
      showDetail={true}
    >
      <Preloader loading={status=='pending'}/>
      <h1>Create Product</h1>

      <ContentWithFormInput>
        <div>
          <h3>Product Name</h3>
          <p>Add your product display name</p>
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
            {/* [
              {value:'Grocery',label:'Grocery',icon:<GiAppleSeeds color='#ff4f01'/>},
              {value:'Bakery',label:'Bakery',icon:<GiSlicedBread color='#ff4f01'/>},
              {value:'MakeUP',label:'Makeup',icon:<FaPaintBrush color='#ff4f01'/>},
              {value:'Bags',label:'Bags',icon:<RiShoppingBagFill color='#ff4f01'/>},
              {value:'Clothing',label:'Clothing',icon:<GiAmpleDress color='#ff4f01'/>},
              {value:'Funiture',label:'Funiture',icon:<GiOfficeChair color='#ff4f01'/>},
              {value:'Book',label:'Book',icon:<BiBookReader color='#ff4f01'/>},
            ] */}
            <SelectBar data={category_list.map(data=>(
              {value:data.id,label:data.name,icon:''}
            )) }

          
            runAfterChange={e=>{
              console.log({e})

              setValue('category',e.value)
            }}
            />
          </div>
          <br />
         
          <CheckBoxWithLabel
            value={watchFields[0]}
            label='Out Of Stock' 
            register={register('out_of_stock',{
              onChange:(e)=>{
                setValue('out_of_stock',!watchFields[0])
              }
            })}/>

        </Pane>
      </ContentWithFormInput>

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
          />
          
        </Pane>
      </ContentWithFormInput>
      <br />
      <Button style={{'width':'30%','margin':'0 auto'}} 
        isLoading={status==='pending'}
        onClick={handleSubmit(onSubmit)}
      >Publish</Button>
      <br /><br /><br /><br />
    </DashboardLayout>
      
  )
}

export default CreateProduct