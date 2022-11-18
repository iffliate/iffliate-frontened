
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
import { getWallet } from '../../../../redux/Wallet/WalletApi';
import useToast from '../../../../hooks/useToastify';
import Preloader from '../../../../shared/Preloader/Preloder';



const WalletPage:NextPage = ()=>{
  const route = useRouter();
  const { shop } = route.query
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const dispatch = useAppDispatch();
  const {notify}= useToast()
  const {wallet_status,list_of_wallet_transactionStatus,wallet,message} = useAppSelector(selectWallet)
  
  useEffect(()=>{

    if(shop){
      if(typeof shop === 'string'){
        dispatch(getWallet({'shop_id':parseInt(shop)}))
      }
    }
  },[route.isReady])
  useEffect(()=>{
    if(message){
      notify(message,'success')
      dispatch(clean_stateWallet({}))
    }
  },[message])
  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`/dashboard/shop/${shop}`},
        {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        {label:'Wallet',route:'#'},
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
          <Transaction>
            {/* icon */}
            <TransactionName>
              <h3>
                    Transfer To Shop2
              </h3>
              <small><p>processing</p></small>
            </TransactionName>

            <TransactionInfo>
              <p><strong>₦ 190,000</strong></p>
              <p><small>Oct 03, 2022</small></p>
            </TransactionInfo>
          </Transaction>
          <br />

          <Transaction>
            {/* icon */}
            <TransactionName>
              <h3>
                    Transfer To Shop2
              </h3>
              <small><p>processing</p></small>
            </TransactionName>

            <TransactionInfo>
              <p><strong>₦ 190,000</strong></p>
              <p><small>Oct 03, 2022</small></p>
            </TransactionInfo>
          </Transaction>
          <br />

          <Transaction>
            {/* icon */}
            <TransactionName>
              <h3>
                    Transfer To Shop2
              </h3>
              <small><p>processing</p></small>
            </TransactionName>

            <TransactionInfo>
              <p><strong>₦ 190,000</strong></p>
              <p><small>Oct 03, 2022</small></p>
            </TransactionInfo>
          </Transaction>
          
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