import { NextPage } from 'next';
import DashboardLayout from '../layout/DashboardLayout/DashboardLayout';
import Button from '../shared/Button/Button';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Pane from '../shared/Pane/Pane';
import {CheckoutContainer,CheckoutItemContainer,CheckoutItem,CheckoutMainContainer} from '../pageStyles/index/_checkout.style'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCartLocally, selectCart } from '../redux/Cart/CartSlice';
import { useEffect, useState } from 'react';
import { getUserTokenOr404, isAuth } from '../utils/extraFunction';
import { useRouter } from 'next/router'
import { getOrderApi } from '../redux/Cart/CartApi';
import api from '../service/axios';
import useToast from '../hooks/useToastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema =yup.object({
  phone:yup.string().required(),
  shipping_addresse:yup.string().required('please enter the right shipping address'),
})
type CheckoutType ={
  phone:string;
  shipping_addresse:string;
}
const Checkout:NextPage = ()=>{
  const route = useRouter()
  const {cartItem,status} = useAppSelector(selectCart)
  const dispatch = useAppDispatch();
  const {notify} = useToast()
  const handleRoute = (path:string)=>{
    route.push(path)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutType>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:CheckoutType) =>{ 
    InitPayment(data)
  }
  const InitPayment = async(data:CheckoutType)=>{
   
    try {
      const resp = await api.post(`/payment/process_order_payment/${cartItem[0].orderID}/`,{
        'phone':data.phone,
        'shipping_addresse':data.shipping_addresse
      })

      if(resp.data.status_code ==201){
        notify('You Would Be Redirected To a payment page in a minute','success')
        window.location.href=resp.data.data.data.authorization_url
      } else{
        notify('Wrong Order please refresh the page','error')

      }
    } catch (err:any) {
      //
      console.log(getUserTokenOr404())
      console.log({err})
      notify('please check your internet','error')

    }
  }



  useEffect(()=>{
    if(isAuth()){
      //
      dispatch(getOrderApi())
    }else{
      dispatch(getCartLocally({}))
    }
  },[])
  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutMainContainer>
          {/* <p>{status}</p> */}
          {status=='pending'&&<p>Loading</p>}
          <Pane>
            <InputWithLabel label='Phone Number'
              register={register('phone')}
              errorMessage={errors.phone?.message}
              placeholder='Enter your name' />
            <br />
            <InputWithLabel label='Shipping Address'
              register={register('shipping_addresse')}
              errorMessage={errors.shipping_addresse?.message}
              isTextArea={true}/>
          </Pane>
          <br />

          <CheckoutContainer>
            <h3>Your Order</h3>

            <CheckoutItemContainer>
              {
                cartItem.map((data,index)=>(
                  <CheckoutItem key={index}>
                    <p><strong>{data.quantity}</strong>{'  X  '}{data.product.name}{' '}</p>
                    <p>${ data.product.actual_price * data.quantity}</p>
                  </CheckoutItem>
                ))
              }

            </CheckoutItemContainer>

        

            <CheckoutItem>
              <p>Estimated Shipping</p>
              <p>00.00</p>
            </CheckoutItem>
        
            <CheckoutItem>
              <p>Sub Total</p>
              <p>{cartItem.map(d=>d.quantity*d.product.actual_price).reduce((partialSum,a)=>partialSum+a,0)}</p>
            </CheckoutItem>
            {
              isAuth()?
              // InitPayment
          
                cartItem.length ==0?
                  <Button styleType='sec' > No Order yey</Button>
                  :
                  <Button > Place Order</Button>
            
                :
                <>
                  <Button onClick={(e)=>handleRoute('/signin')}>Login</Button>
                  <br />
                  <Button styleType='sec' onClick={(e)=>handleRoute('/signup')}>Create Account</Button>
              
                </>

            }
          </CheckoutContainer>
          <br />
          <br />
        </CheckoutMainContainer>
      </form>
    </DashboardLayout>
  )
}

export default Checkout