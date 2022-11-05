import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import OrderDetailPane from '../../../../shared/OrderDetailPane';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { selectOrderHistory } from '../../../../redux/OrderHistory/OrderHistorySlice';
import { useEffect } from 'react';
import { getOrderHistoryDetail } from '../../../../redux/OrderHistory/OrderHistoryApi';
import { useRouter } from 'next/router';
import Preloader from '../../../../shared/Preloader/Preloder';




const MyordersDetail = ()=>{
  const {order_historys,status} = useAppSelector(selectOrderHistory)
  const route = useRouter()
  const   query_param = route.query
  const dispatch = useAppDispatch()
  useEffect(()=>{
    if(query_param.id){
      if (status!=='pending'){
        if(order_historys.length===0){
          dispatch(getOrderHistoryDetail({'is_for_shop':false,'shopID':'-0,','paystack':query_param.id.toString()}))
        }
      }else{
        console.log({status})
      }

      console.log(query_param)
    }

  },[route.isReady])

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
        {label:'Logout',route:'/logout'},
      ]}
    >
      {
        order_historys.length!=0?
          <OrderDetailPane data={order_historys} is_shop={false}/>
          :''
      }
      <Preloader loading={status==='pending'}/>
    </DashboardLayout>

  )
}

export default MyordersDetail