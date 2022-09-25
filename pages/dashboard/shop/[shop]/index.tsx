import { NextPage } from 'next';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import Button from '../../../../shared/Button/Button';
import Pane from '../../../../shared/Pane/Pane';





const ShopDetail:NextPage =()=>{
  const route = useRouter()

  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:''},
        {label:'Orders ',route:''},
        // {label:'Danloads',route:''},
        {label:'Logout',route:''},
      ]}
    >

      <Pane>
        <Button style={{'width':'20%'}} onClick={(e)=>route.push(`/dashboard/shop/${2}/create-product`)}>Create Product</Button>
      </Pane>
    </DashboardLayout>
      
  )
}

export default ShopDetail