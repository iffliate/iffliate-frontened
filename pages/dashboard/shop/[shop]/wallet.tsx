
import { NextPage } from 'next';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import { useRouter } from 'next/router';
import Pane from '../../../../shared/Pane/Pane';
import { Transaction, TransactionInfo, TransactionName, TransactionsContainer,  } from '../../../../shared/TransactionStyle/transaction.style';
import Wallet from '../../../../shared/Wallet/wallet';
import Button from '../../../../shared/Button/Button';
import CustomModal from '../../../../shared/Modal/CustomModal';
import { useState } from 'react';
import RequestWithdraw from '../../../../shared/RequestWithdraw/RequestWithdraw';



const WalletPage:NextPage = ()=>{
  const route = useRouter();
  const { shop } = route.query
  const [modalIsOpen,setModalIsOpen] = useState(false)
  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`/dashboard/shop/${shop}`},
        {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        {label:'Wallet',route:'#'},
        {label:'Logout',route:'/logout'},
      ]}
    >
      <Wallet amount={200}/>
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