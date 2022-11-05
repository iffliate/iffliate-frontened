import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useToast from '../../../../../hooks/useToastify';
import DashboardLayout from '../../../../../layout/DashboardLayout/DashboardLayout'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { getOrderHistoryDetail } from '../../../../../redux/OrderHistory/OrderHistoryApi';
import { selectOrderHistory } from '../../../../../redux/OrderHistory/OrderHistorySlice';
import OrderDetailPane from '../../../../../shared/OrderDetailPane';
import Preloader from '../../../../../shared/Preloader/Preloder';






const shopOrderDetails:NextPage = ()=>{
  const route = useRouter();
  const {notify} = useToast()
  const { shop } = route.query
  const { orderdetail } = route.query
  const  dispatch = useAppDispatch();
  const {order_history_paystacks,order_historys,status} = useAppSelector(selectOrderHistory)

  useEffect(()=>{
    if(typeof shop === 'string'&& typeof orderdetail==='string'){
      if(order_historys.length==0){
        dispatch(getOrderHistoryDetail({
          'shopID':shop,
          'paystack':orderdetail
        }))
      }

    }
    
    console.log({
      'shopID':shop,
      'paystack':orderdetail
    })
  },[route.isReady])
  return (
  
    <DashboardLayout
      listOFLinks={[]}
      showDetail={true}
    >
      <Preloader loading={status==='pending'||status==='updating'} />
      {status}
      {
        order_historys.length!==0?
          <OrderDetailPane data={order_historys} is_shop={true}/>:''
      }
    </DashboardLayout>

  )
}

export default shopOrderDetails