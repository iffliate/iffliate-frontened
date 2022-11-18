import { useState } from 'react'
import { WalletContainer } from './wallet.style'
import {AiFillEye} from 'react-icons/ai';
import {BsEyeSlashFill} from 'react-icons/bs'



const Wallet = ({amount}:{amount:number})=>{
  const [show,setShow] = useState(true)
  return (
    <WalletContainer>
      <h4>Balance</h4>
      <div>
        {
          show?
            <>
              <p></p>
              <p></p>
              <p></p>
              <p></p></>
            :
            '₦ '+amount
        }
        {
          show?
            <BsEyeSlashFill onClick={(e)=> setShow(false)}/>
            :
            <AiFillEye onClick={(e)=> setShow(true)}/>
        }
      </div>
    </WalletContainer>
  )
}

export default Wallet