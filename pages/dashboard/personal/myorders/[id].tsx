import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import Pane from '../../../../shared/Pane/Pane';
import ProgressBar from '../../../../shared/ProgressBar/ProgressBar';
import {OrderDetailCard,
  OrderdetailNavContainer,
  OrderdetailCardContainer,OrderDetailPaneContainer,
  OrderDetailTotalContainter
} from '../../../_[id]'



const cards = [
  {label:'Order Number',value:'CGG82oQZc4i8'},
  {label:'Date',value:'January 12, 2022'},
  {label:'Total',value:'$153.00'},
  {label:'Payment Method',value:'CASH_ON_DELIVERY'},
]

const myordersDetail:NextPage = ()=>{


  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[
        {label:'profile',route:''},
        {label:'Change Password',route:''},
        {label:'My Order',route:''},
        // {label:'Danloads',route:''},
        {label:'My WishLists',route:''},
        {label:'My Refunds',route:''},
        {label:'Logout',route:''},
      ]}
    >

      <Pane>
        <OrderdetailNavContainer>
          <div>
            <h3>Status:</h3>
            <p>Order Received</p>
          </div>
          <a href="">Back to Home</a>
        </OrderdetailNavContainer>
        <br /><br />
        <OrderdetailCardContainer>
          {
            cards.map((data,index)=>(
              <OrderDetailCard key={index}>
                <h3><strong>{data.label}</strong></h3>
                <p>{data.value}</p>
              </OrderDetailCard>
            ))
          }
          
        </OrderdetailCardContainer>

        <br />
        <br />
        <ProgressBar/>
        <br />

        <OrderDetailPaneContainer>

          <div>
            <h3>Total Amount</h3>
            <OrderDetailTotalContainter>
              <p>Sub Total</p>
              <p><span>:</span> $150.00</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Shipping Charge</p>
              <p><span>:</span> $0.00</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Tax </p>
              <p><span>:</span> $0.00</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Discount </p>
              <p><span>:</span> $0.00</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Total </p>
              <p><span>:</span> $0.00</p>
            </OrderDetailTotalContainter>
          </div>

          <br />
          <br />
          <div>
            <h3>Order Details</h3>
            <OrderDetailTotalContainter>
              <p>Total Item</p>
              <p><span>:</span> $150.00</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Delivery Time</p>
              <p><span>:</span>Express Delivery</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Shipping Address </p>
              <p><span>:</span>2148 Straford Park, KY, Winchester, 40391, United States</p>
            </OrderDetailTotalContainter>
            <OrderDetailTotalContainter>
              <p>Billing Address </p>
              <p><span>:</span> ss, aaaa, aaa, 122, aaa</p>
            </OrderDetailTotalContainter>

          </div>
        </OrderDetailPaneContainer>
      </Pane>
    </DashboardLayout>

  )
}

export default myordersDetail