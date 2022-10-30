import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProgressBar from '..//shared/ProgressBar/ProgressBar';
import { prop_columnsType } from '../pages/dashboard/shop/[shop]';
import {OrderDetailCard,
  OrderdetailNavContainer,
  OrderdetailCardContainer,OrderDetailPaneContainer,
  OrderDetailTotalContainter
} from '../pageStyles/index/_[id]'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getOrderHistoryDetail, OrderHistoryType, updateOrderHistoryStatus } from '../redux/OrderHistory/OrderHistoryApi';
import { selectOrderHistory } from '../redux/OrderHistory/OrderHistorySlice';
import Pane from './Pane/Pane';
import SelectBar from './SelectBar/SelectBar';
import Table from './Table/Table';


const prop_columns:prop_columnsType[]=[
  {
    id:1,
    Header:'Product Name',
    accessor:'product_name'
  },
  {
    Header:'Quantity',
    accessor:'quantity'
  },
  {
    Header:'Total',
    accessor:'amount'
  },{
    Header:'Buyer Phone',
    accessor:'buyer_phone'
  }

]


type Prop ={
    data: OrderHistoryType[]
    is_shop?:boolean
}
const status =[
  {value:'delivered',label:'Delivered',icon:''},
  {value:'order_processing',label:'Order Processing',icon:''},
  {value:'ready_to_dispatch',label:'ready To Dispatch',icon:''},
  {value:'order_dispatched',label:'Order Dispatch',icon:''},
]
const OrderDetailPane = ({data,is_shop=false}:Prop):React.ReactElement=>{
  const route = useRouter()
  const dispatch = useAppDispatch()
  const cards = [
    {label:'Order Number',value:data[0].paystack?data[0].paystack:''},
    {label:'Date',value:data[0].created_at},
    {label:'Total',value:'nil'},
    {label:'Payment Method',value:'Payment_Gate_Way'},
  ]
  const handleStatusChange = ({value}:any)=>{
    if(window.confirm('Are Sure You want to change the status')){
      console.log(value)
      if(data[0].paystack){
        dispatch(updateOrderHistoryStatus({'paystack':data[0].paystack,status:value}))
      }
    }
  }
  return (
    <Pane>
      <OrderdetailNavContainer>
        <div>
          <h3>Status:  </h3>
          <p>{data[0].status}</p>
        </div>
        {
          is_shop?
            <SelectBar data={status} runAfterChange={handleStatusChange} />:''
      
        }
        <a href="" onClick={(e)=>{
          e.preventDefault()
          route.back()
        }}>Back to Home</a>
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
      <ProgressBar status={data[0].status}/>
      <br />

      <Table
        prop_columns={prop_columns}
        custom_data={data}
      />

      <br />
        
      <OrderDetailPaneContainer>

        <div>
          <h3>Total Amount</h3>
          <OrderDetailTotalContainter>
            <p>Item Total</p>
            <p><span>:</ span> ${data.reduce((prev:any,current:any)=>{
              return parseInt(current.amount)+prev
            },0)}</p>
          </OrderDetailTotalContainter>
          <OrderDetailTotalContainter>
            <p>Shipping Charge</p>
            <p><span>:</span> $0.00</p>
          </OrderDetailTotalContainter>
          <OrderDetailTotalContainter>
            <p>Iffiliate Charge </p>
            <p><span>:</span> ${data.reduce((prev:any,current:any)=>{
              return parseInt(current.iffiliate_earning)+prev
            },0)}</p>
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
            <p>Item(n)</p>
            <p><span>:</span> {data.length} item</p>
          </OrderDetailTotalContainter>

          <OrderDetailTotalContainter>
            <p>Shipping Address </p>
            <p><span>:</span>{data[0].buyer_shipping_address}</p>
          </OrderDetailTotalContainter>
          <OrderDetailTotalContainter>
            <p>Buy Phone  </p>
            <p><span>:</span>{data[0].buyer_phone}</p>
          </OrderDetailTotalContainter>

        </div>
      </OrderDetailPaneContainer>
    </Pane>
  )
}

export default OrderDetailPane