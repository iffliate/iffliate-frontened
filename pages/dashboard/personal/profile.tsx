import { NextPage } from 'next';
import DashboardLayout from '../../../layout/DashboardLayout/DashboardLayout';
import Button from '../../../shared/Button/Button';
import InputWithLabel from '../../../shared/InputWithLabel/InputWithLabel';
import Pane from '../../../shared/Pane/Pane';




const Profile:NextPage = ()=>{



  return (
    <DashboardLayout
      listOFLinks={[
        {label:'profile',route:''},
        {label:'Change Password',route:''},
        {label:'My Order',route:''},
        {label:'Danloads',route:''},
        {label:'My WishLists',route:''},
        {label:'My Refunds',route:''},
        {label:'Logout',route:''},
      ]}
    >

      <Pane>
        <InputWithLabel label='Name' placeholder='Enter your name'/>
        <br />
        <InputWithLabel label='Contact Number' placeholder='Enter your phone number that reachable'/>

        <br />
        <InputWithLabel label='Bio' placeholder='let us know About you ' isTextArea={true}/>
        <br />
        <Button style={{'width':'90px','margin-left':'auto'}}>
          Save
        </Button>
      </Pane>
    </DashboardLayout>
  )
}

export default Profile