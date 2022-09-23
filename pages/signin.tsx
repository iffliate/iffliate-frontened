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
import { useMediaQuery } from 'react-responsive'
import { sigininApi, sigininApiPropType } from '../redux/siginin/sigininApi'
import { selectSignIn } from '../redux/siginin/signinSlice'
import { useRouter } from 'next/router'


const schema =yup.object().shape({
  email:yup.string().email().required(),
  password:yup.string().required(),
})
const signin:NextPage= ()=>{
  const {notify} = useToast();
  const {status,errMessage}= useAppSelector(selectSignIn);
  const dispatch= useAppDispatch();
  const router = useRouter()

  // const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })

  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<sigininApiPropType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<sigininApiPropType>=data=>{
    console.log(data)
    dispatch(sigininApi(data))
  }

  useEffect(()=>{
    if(status==='success'){
      notify('Login Successfull','success')
      router.push('/')
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
      <LoginContentContainer 
        // style={{'height':'unset'}}
      >
        <br /><br />
        <br /><br />
        <br /><br />
        <LoginNav>
          <h2>Sign In</h2>
          <div>
            <a href="">Go Home</a>
            <a href="">Sign In</a>
          </div>
        </LoginNav>   
        <form 
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWithLabel label='Email' placeholder='Enter a valid email' 
            register={register('email')} 
            errorMessage={errors.email?.message}
          />
          <br />
          <InputWithLabel label='Password' placeholder='*****' 
            register={register('password')} 
            errorMessage={errors.password?.message}
        
          />
          <br /><br />
          <Button
            isLoading={status==='pending'}
          >SignIn</Button>
        </form>
      </LoginContentContainer>
      <br />
      <br />
    </LoginContainer>

  )
}

export default signin