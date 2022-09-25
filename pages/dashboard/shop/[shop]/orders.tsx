import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';





const ShopOrder:NextPage =()=>{


  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:''},
        {label:'Orders ',route:''},
        // {label:'Danloads',route:''},
        {label:'Logout',route:''},
      ]}
    >

      <h1>Orders</h1>
    </DashboardLayout>
      
  )
}

export default ShopOrder