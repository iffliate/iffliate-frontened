import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Pane from '../shared/Pane/Pane';






const thank_you_page:NextPage = ()=>{
  return (
    <GeneralLayout>
      <div style={{'display':'flex','alignItems':'center','justifyContent':'center','height':'100vh'}}>
        <div style={{'maxWidth':'700px',}}>
          <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>THanks For <span style={{'color':'#f77305'}}>Shopping</span> with us</h1>
          <br />
          <p>Please Check Your my Order page in your dashboard to confirm or track your order</p> 
        </div>
      </div>
    </GeneralLayout>
  )
}

export default thank_you_page