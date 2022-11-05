import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Button from '../shared/Button/Button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';





const Logout:NextPage = ()=>{
  const route= useRouter()
  useEffect(()=>{
    //
    window.localStorage.removeItem('iffilate_cred')
  },[])
  return (
    <GeneralLayout>
      <div style={{'display':'flex','alignItems':'center','justifyContent':'center','height':'100vh'}}>
        <div style={{'maxWidth':'700px',}}>
          <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>THanks For <span style={{'color':'#f77305'}}>Shopping</span> with us</h1>
          <br />
          <div style={{'display':'flex','justifyContent':'space-between','width':'80%','margin':'0 auto'}}>
            <Button style={{'width':'35%'}} onClick={(e)=>route.push('/signin')}>
                Login
            </Button>
            <Button style={{'width':'35%'}} styleType='sec' onClick={(e)=>route.push('/')}>
                Go Home
            </Button>
          </div>
        </div>
      </div>
    </GeneralLayout>
  )
}

export default Logout