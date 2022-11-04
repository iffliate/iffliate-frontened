import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { prop_columnsType } from '..';
import useToast from '../../../../../hooks/useToastify';
import DashboardLayout from '../../../../../layout/DashboardLayout/DashboardLayout';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import Pane from '../../../../../shared/Pane/Pane';
import {AiTwotoneEye} from 'react-icons/ai'
import Table from '../../../../../shared/Table/Table';
import { selectOrderHistory } from '../../../../../redux/OrderHistory/OrderHistorySlice';
import { useEffect } from 'react';
import { getOrderHistoryDetail, getorderHistoryList } from '../../../../../redux/OrderHistory/OrderHistoryApi';






const ShopOrder:NextPage = ()=>{
  const route = useRouter();
  const {notify} = useToast()
  const { shop } = route.query
  const dispatch = useAppDispatch();
  const {order_history_paystacks,order_historys,status} = useAppSelector(selectOrderHistory)
  const prop_columns:prop_columnsType[]=[
    {
      Header:'Tracking Number',
      accessor:'paystack',
      id:13
    },
    {
      Header:'View Detail',
      accessor:'paystack',
      id:1,
      Cell:(tableProps:any)=>(
        // this is were we do onClick to call the orderHistory Detail
        <AiTwotoneEye style={{'color':'#f77305'}} onClick={e=>{
          console.log(`/dashboard/shop/${shop}/order/${tableProps.row.original.paystack}`)
          if(typeof shop == 'string'){
            dispatch(getOrderHistoryDetail({
              'shopID':shop,
              paystack:tableProps.row.original.paystack
            }))
            route.push(`/dashboard/shop/${shop}/order/${tableProps.row.original.paystack}`)
          }

        }} />
      )
    }
  ] 

  useEffect(()=>{
    if(typeof shop == 'string'){
      console.log({shop})
      dispatch(getorderHistoryList({'shopID':parseInt(shop)}))
    }
  },[route.isReady])

  console.log({order_historys})
  return  (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`/dashboard/shop/${shop}`},
        {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        // {label:'Danloads',route:''},
        {label:'Logout',route:''},
      ]}
    >
      {status=='pending'&&<p>Loading Stuff</p>}
      {status=='pending'&&route.isReady===false}
      <Pane>
        <h1>Shop Orders</h1>
        <br /><br />
        <Table prop_columns={prop_columns} custom_data={order_history_paystacks}/>
      </Pane>
    </DashboardLayout>
  )
}

export default ShopOrder