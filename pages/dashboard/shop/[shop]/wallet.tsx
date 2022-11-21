
import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import { useRouter } from 'next/router';
import Pane from '../../../../shared/Pane/Pane';
import { Transaction, TransactionInfo, TransactionName, TransactionsContainer,  } from '../../../../shared/TransactionStyle/transaction.style';
import Wallet from '../../../../shared/Wallet/wallet';
import Button from '../../../../shared/Button/Button';
import CustomModal from '../../../../shared/Modal/CustomModal';
import { useEffect, useState } from 'react';
import RequestWithdraw from '../../../../shared/RequestWithdraw/RequestWithdraw';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { clean_stateWallet, selectWallet } from '../../../../redux/Wallet/WalletSlice';
import { getWallet, listWalletWithdraw } from '../../../../redux/Wallet/WalletApi';
import useToast from '../../../../hooks/useToastify';
import Preloader from '../../../../shared/Preloader/Preloder';



const WalletPage:NextPage = ()=>{
  const route = useRouter();
  const { shop } = route.query
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const dispatch = useAppDispatch();
  const {notify}= useToast()
  const {wallet_status,list_of_wallet_transactionStatus,wallet,message,errMessage,list_of_wallet_transaction} = useAppSelector(selectWallet)
  
  useEffect(()=>{

    if(shop){
      if(typeof shop === 'string'){
        dispatch(getWallet({'shop_id':parseInt(shop)}))
        dispatch(listWalletWithdraw(parseInt(shop)))

      }
    }
  },[route.isReady])
  useEffect(()=>{
    if(message){
      notify(message,'success')
      dispatch(clean_stateWallet({}))
    }
    if(errMessage){
      notify(errMessage,'error')
      dispatch(clean_stateWallet({}))
    }
  },[message])

  const ifStyles = (variant:string)=>{
    if(variant == 'success'){
      return 'green'
    }

    if(variant == 'failed'){
      return 'red'
    }
    if(variant == 'reversed'){
      return 'gray'
    }
    if(variant == 'pending'){
      return '#f77305'
    }
  }
  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`/dashboard/shop/${shop}`},
        {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        {label:'Wallet',route:`/dashboard/shop/${shop}/wallet`},
        {label:'Logout',route:'/logout'},
      ]}
    >
      <Preloader loading={(wallet_status=='pending'||list_of_wallet_transactionStatus=='pending')}/>
      
      <Wallet amount={wallet?wallet:0.00}/>
      <br />
      <Button 
        onClick={e=>setModalIsOpen(true)}
        styleType={'pry'} style={{'width':'200px'}}>
        Withdraw
      </Button>
      <br />
      <br />
      <Pane>
        {/* <select name="" id="">
          <option value="">success</option>
          <option value="">failed</option>
          <option value="">reversed</option>
          <option value="">pending</option>
        </select> */}
        <TransactionsContainer>
          {
            list_of_wallet_transaction.map((data,index)=>(
              <div key={index}>
                <Transaction>
                  {/* icon */}
                  <TransactionName>
                    <h3>
                      {data.shop.name}
                    </h3>
                    <small ><p style={{'backgroundColor':ifStyles(data.transfer_state)}}>{data.transfer_state}</p></small>
                  </TransactionName>

                  <TransactionInfo>
                    <p><strong>₦ {data.amount}</strong></p>
                    <p><small>Oct 03, 2022</small></p>
                  </TransactionInfo>
                </Transaction>
                <br />

              </div>
            ))
          }

        </TransactionsContainer>
      </Pane>

      <CustomModal
        element={
          <RequestWithdraw/>
        }
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </DashboardLayout>
  )
}

export default WalletPage