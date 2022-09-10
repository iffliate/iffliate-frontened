import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import Pane from '../../../../shared/Pane/Pane';
import Table from '../../../../shared/Table/Table';






const myorders:NextPage = ()=>{




  return(
    <DashboardLayout
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
        <Table/>
      </Pane>

    </DashboardLayout>
  )
}

export default myorders