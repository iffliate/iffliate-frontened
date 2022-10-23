import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import Pane from '../../../../shared/Pane/Pane';
import ProgressBar from '../../../../shared/ProgressBar/ProgressBar';
import {OrderDetailCard,
  OrderdetailNavContainer,
  OrderdetailCardContainer,OrderDetailPaneContainer,
  OrderDetailTotalContainter
} from '../../../../pageStyles/index/_[id]'
import OrderDetailPane from '../../../../shared/OrderDetailPane';
import { useAppSelector } from '../../../../redux/hooks';
import { selectOrderHistory } from '../../../../redux/OrderHistory/OrderHistorySlice';




const MyordersDetail:NextPage = ()=>{
  const {order_history_paystacks,order_historys,status} = useAppSelector(selectOrderHistory)


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

      <OrderDetailPane data={order_historys} is_shop={false}/>
    </DashboardLayout>

  )
}

export default MyordersDetail