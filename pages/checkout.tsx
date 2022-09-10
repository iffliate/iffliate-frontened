import { NextPage } from 'next';
import DashboardLayout from '../layout/DashboardLayout/DashboardLayout';
import Button from '../shared/Button/Button';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Pane from '../shared/Pane/Pane';
import {CheckoutContainer,CheckoutItemContainer,CheckoutItem,CheckoutMainContainer} from './_checkout.style'




const Checkout:NextPage = ()=>{



  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[]}
    >
      <CheckoutMainContainer>


        <Pane>
          <InputWithLabel label='Phone Number' placeholder='Enter your name'/>
          <br />
          <InputWithLabel label='Billing Address'  isTextArea={true}/>
        </Pane>
        <br />

        <CheckoutContainer>
          <h3>Your Order</h3>

          <CheckoutItemContainer>
            <CheckoutItem>
              <p><strong>1</strong>{'  X  '}Celery Stick | 1lb</p>
              <p>$5.00</p>
            </CheckoutItem>

            <CheckoutItem>
              <p><strong>1</strong>{'  X  '}Celery Stick | 1lb</p>
              <p>$5.00</p>
            </CheckoutItem>

            <CheckoutItem>
              <p><strong>1</strong>{'  X  '}Celery Stick | 1lb</p>
              <p>$5.00</p>
            </CheckoutItem>
          </CheckoutItemContainer>

        

          <CheckoutItem>
            <p>Estimated Shipping</p>
            <p>$11.50</p>
          </CheckoutItem>
        
          <CheckoutItem>
            <p>Sub Total</p>
            <p>$11.50</p>
          </CheckoutItem>
          <Button>Place Order</Button>
        </CheckoutContainer>
        <br />
        <br />
      </CheckoutMainContainer>
    </DashboardLayout>
  )
}

export default Checkout