import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Button from '../shared/Button/Button';
import Pane from '../shared/Pane/Pane';





const ExpiredTokenPage:NextPage = ()=>{
  const route = useRouter()


  const handleRoute = (e:any)=>{
    //
    route.push('/signin/')
  }
  return (
    <GeneralLayout>
      <div style={{'display':'flex','alignItems':'center','justifyContent':'center','height':'100vh','textAlign':'center'}}>
        <div style={{'maxWidth':'700px',}}>
          <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>Hey!! Your Token has<span style={{'color':'#f77305'}}> Expired</span></h1>
          <br />
          <p>Dont worry just sign back in</p> 
          <br />
          <Button style={{'padding':'1rem','width':'150px','borderRadius':'10px','margin':'0 auto'}}
            onClick={handleRoute}
          >Sign In</Button>
        </div>
      </div>
    </GeneralLayout>
  )
}

export default ExpiredTokenPage