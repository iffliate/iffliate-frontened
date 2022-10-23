import { NextPage } from 'next';
import DashboardLayout from '../layout/DashboardLayout/DashboardLayout';
import Button from '../shared/Button/Button';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Pane from '../shared/Pane/Pane';
import {CheckoutContainer,CheckoutItemContainer,CheckoutItem,CheckoutMainContainer} from '../pageStyles/index/_checkout.style'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCartLocally, selectCart } from '../redux/Cart/CartSlice';
import { useEffect } from 'react';
import { isAuth } from '../utils/extraFunction';
import { useRouter } from 'next/router'
import { getOrderApi } from '../redux/Cart/CartApi';
import api from '../service/axios';
import useToast from '../hooks/useToastify';




const Checkout:NextPage = ()=>{
  const route = useRouter()
  const {cartItem,status} = useAppSelector(selectCart)
  const dispatch = useAppDispatch();
  const {notify} = useToast()
  const handleRoute = (path:string)=>{
    route.push(path)
  }


  const InitPayment = async()=>{
    

    try {
      const resp = await api.post(`/payment/process_order_payment/${cartItem[0].orderID}/`)

      if(resp.data.status_code ==201){
        notify('You Would Be Redirected To a payment page in a minute','success')
        window.location.href=resp.data.data.data.authorization_url
      } else{
        notify('Wrong Order please refresh the page','error')

      }
    } catch (err:any) {
      //
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
      <CheckoutMainContainer>
        {/* <p>{status}</p> */}
        {status=='pending'&&<p>Loading</p>}
        <Pane>
          <InputWithLabel label='Phone Number' placeholder='Enter your name'/>
          <br />
          <InputWithLabel label='Billing Address'  isTextArea={true}/>
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
                <Button onClick={e=>InitPayment()}> Place Order</Button>
            
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
    </DashboardLayout>
  )
}

export default Checkout