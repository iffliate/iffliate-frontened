import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Button from '../shared/Button/Button';
import Pane from '../shared/Pane/Pane';





const Thank_you_page:NextPage = ()=>{
  const route = useRouter()


  const handleRoute = (e:any)=>{
    //
    route.push('/dashboard/personal/myorders/')
  }
  return (
    <GeneralLayout>
      <div style={{'display':'flex','alignItems':'center','justifyContent':'center','height':'100vh','textAlign':'center'}}>
        <div style={{'maxWidth':'700px',}}>
          <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>THanks For <span style={{'color':'#f77305'}}>Shopping</span> with us</h1>
          <br />
          <p>Please Check Your my Order page in your dashboard to confirm or track your order</p> 
          <br />
          <Button style={{'padding':'1rem','width':'150px','borderRadius':'10px','margin':'0 auto'}}
            onClick={handleRoute}
          >View Order</Button>
        </div>
      </div>
    </GeneralLayout>
  )
}

export default Thank_you_page