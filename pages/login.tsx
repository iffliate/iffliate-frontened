import { NextPage } from 'next'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel'
import {LoginNav, LoginContainer,LoginContainerImg,LoginContentContainer} from '../pageStyles/login.style'
import Button from '../shared/Button/Button'
import LoginImage from '../assets/login.jpg'





const login:NextPage= ()=>{


  return (
    <LoginContainer>
      <LoginContainerImg image={LoginImage.src}>
        {/* <img src="" alt="" /> */}
      </LoginContainerImg>
      <LoginContentContainer>
        <LoginNav>
          <h2>Sign Up</h2>
          <div>
            <a href="">Go Home</a>
            <a href="">Sign In</a>
          </div>
        </LoginNav>        
        <InputWithLabel label='Email' placeholder='Enter a valid email' />
        <br />
        <InputWithLabel label='First Name' placeholder='Enter a First Name' />
        <br />
        <InputWithLabel label='Last Name' placeholder='Enter a Last Name' />
        <br />
        <InputWithLabel label='Password' placeholder='*****' />
        <br />
        <InputWithLabel label='Confirm Password' placeholder='*****' />
       
        <p>By signing up, you agree to our <span>terms</span> {' & '} <span>policy</span></p>

        <Button isLoading={false}>Register</Button>
      </LoginContentContainer>
      <br />
      <br />
    </LoginContainer>

  )
}

export default login