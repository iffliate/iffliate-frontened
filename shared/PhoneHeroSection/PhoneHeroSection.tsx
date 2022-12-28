import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { getProductApi } from '../../redux/Product/ProductApi'
import Button from '../Button/Button'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { PhoneHeroSectionStyledContainer } from './PhoneHeroSection.style'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


type IFormInputs ={
  search_value:string
}
const schema = yup.object({
  search_value:yup.string().required(),
})
export const PhoneHeroSection = ():React.ReactElement => {

  const dispatch  = useAppDispatch();
  const onSubmit = (data: IFormInputs) => {

    dispatch(getProductApi({'shopId':'',look_up:`&name=${data.search_value}`}))
  }

  const { register, handleSubmit, formState:{ errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })
  return (
    <PhoneHeroSectionStyledContainer>
      <div className='content_container'>
        <h1>
        Shop the Best Deals on Quality Products at Our Online Store    </h1>
        <form className="search_parameter_phone_hero_section"  onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel type="text" label=''
            register={register('search_value')}
          />
          <Button style={{'padding':'.8rem','width':'40%','margin':'20px auto'}}>Search</Button>
        </form>
      </div>
    </PhoneHeroSectionStyledContainer>
  )
}


export default PhoneHeroSection