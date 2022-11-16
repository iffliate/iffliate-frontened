import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import InputWithLabel from '../InputWithLabel/InputWithLabel'







const RequestWithdraw= () =>{
  const [banks,setBanks] = useState<any>()
  const getBanks = async()=>{
    const resp:any =await axios.get('https://api.paystack.co/bank');
    
    setBanks(resp.data.data.map((data:any)=>data.name))
  }
  useEffect(()=>{
    if(!banks){
      getBanks()
    }
  },[])
  return (
    <form>
      <h3 style={{'color':'#4b5563'}}>Withdraw Balance</h3>
      <br />
      <p><label htmlFor="">Please select Bank</label></p>
      <select
        //    {...register('bank_name')}
      >
        {
          banks?
            banks.map((d:string,index:number)=> <option
              onChange={(e:any)=>{
                // setValue('bank_name',e.target.value)
              }}
              key={index} value={d}>{d}</option>)
            :''
        }
      </select>
      <br />
      <br />
      <InputWithLabel
        label="Account Number"
      />
      <br />
      <InputWithLabel
        label="Amount"
      />
      <br />
      <Button>
        Submit
      </Button>
    </form>
  )
}

export default RequestWithdraw