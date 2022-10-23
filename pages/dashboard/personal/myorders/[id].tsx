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

      <OrderDetailPane/>
    </DashboardLayout>

  )
}

export default myordersDetail