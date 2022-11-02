import { NextPage } from 'next'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel'
import {LoginNav, LoginContainer,LoginContainerImg,LoginContentContainer} from '../pageStyles/login.style'
import Button from '../shared/Button/Button'
import LoginImage from '../assets/login.jpg'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpApi, signUpApiResponse } from '../redux/signup/signupApi'
import useToast from '../hooks/useToastify'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectSignUp } from '../redux/signup/signupSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const schema =yup.object().shape({
  first_name:yup.string().required(),
  last_name:yup.string().required(),
  email:yup.string().email().required(),
  password:yup.string().required(),
  confirm_password:yup.string().oneOf([yup.ref('password'),null],'Passwords must match'),
  phone:yup.number().min(11).required(),
})
const signup:NextPage= ()=>{
  
  const {notify} = useToast();
  const {status,errMessage}= useAppSelector(selectSignUp);
  const dispatch= useAppDispatch();
  const route = useRouter()
  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<signUpApiResponse>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<signUpApiResponse>=data=>{
    console.log(data)
    dispatch(signUpApi(data))
  }

  useEffect(()=>{
    if(status==='created'){
      notify('Account Created Please Login','success')
      route.push('/signin')
    }
    if(status==='error'){
      notify(errMessage,'error')
    }
  },[status])
  return (
    <LoginContainer>
      <LoginContainerImg image={LoginImage.src}>
        {/* <img src="" alt="" /> */}
      </LoginContainerImg>
      <LoginContentContainer>
        <LoginNav>
          <h2>Sign Up</h2>
          <div>
            <a href="" onClick={(e)=>route.push('/')}>Go Home</a>
            <a href="" onClick={(e)=>route.push('/signin')}>Sign in</a>
          </div>
        </LoginNav>        
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel label='Email' placeholder='Enter a valid email' 
            register={register('email')} 
            errorMessage={errors.email?.message}
          />
          <br />
          <InputWithLabel label='First Name' placeholder='Enter a First Name' 
            register={register('first_name')}
            errorMessage={errors.first_name?.message}
          />
          <br />
          <InputWithLabel label='Last Name' placeholder='Enter a Last Name' 
            register={register('last_name')}
            errorMessage={errors.last_name?.message}
          />
          <br />
          <InputWithLabel label='Phone Number' placeholder='080237832' 
            register={register('phone')}
            errorMessage={errors.phone?.message}
          />
          <br />
          <InputWithLabel label='Password' placeholder='*****' 
            register={register('password')} 
            errorMessage={errors.password?.message}
        
          />
          <br />
          <InputWithLabel label='Confirm Password' placeholder='*****'
            register={register('confirm_password')} 
            errorMessage={errors.confirm_password?.message}
          />
       
          <p>By signing up, you agree to our <span>terms</span> {' & '} <span>policy</span></p>

          <Button isLoading={status==='pending'}>Register</Button>
        </form>
      </LoginContentContainer>
      <br />
      <br />
    </LoginContainer>

  )
}

export default signup