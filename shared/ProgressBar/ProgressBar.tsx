import { OrderHistoryType } from '../../redux/OrderHistory/OrderHistoryApi'
import {ProgressBarMainContainer,SingleProgressBar,ProgressCount,ProgressInfo} from './ProgressBar.style'


type Prop = {
  status:OrderHistoryType['status']
}

const ProgressBar = ({status}:Prop):React.ReactElement=>{
  const data  = {
    'order_processing':2,
    'ready_to_dispatch':3,
    'order_dispatched':4,
    'delivered':8

  }

  return (
    <ProgressBarMainContainer>

      <SingleProgressBar>
        <ProgressCount isReady={true} count={1}>
              1
        </ProgressCount>
        <ProgressInfo>
            Order Received
        </ProgressInfo>
      </SingleProgressBar>

      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=2 } count={2}>
              2
        </ProgressCount>
        <ProgressInfo>
        Order Processing
        </ProgressInfo>
      </SingleProgressBar>
          

      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=3} count={3}>
              3
        </ProgressCount>
        <ProgressInfo>
        Ready To Dispatch
        </ProgressInfo>
      </SingleProgressBar>
          
      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=4} count={4}>
              4
        </ProgressCount>
        <ProgressInfo>
        Order Dispatched
        </ProgressInfo>
      </SingleProgressBar>

      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=5} count={5}>
              5
        </ProgressCount>
        <ProgressInfo>
        At Local Facility
        </ProgressInfo>
      </SingleProgressBar>

      <SingleProgressBar >
        <ProgressCount isReady={ data[status] >=6} count={6} data-text='hello'>
              6
        </ProgressCount>
        <ProgressInfo>
        Out For Delivery
        </ProgressInfo>
      </SingleProgressBar> 

      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=7} count={7}>
              7
        </ProgressCount>
        <ProgressInfo>
        Out For Delivery
        </ProgressInfo>
      </SingleProgressBar>    

      
      <SingleProgressBar>
        <ProgressCount isReady={ data[status] >=8} count={8}>
              8
        </ProgressCount>
        <ProgressInfo>
        Delivered
        </ProgressInfo>
      </SingleProgressBar>          
    </ProgressBarMainContainer>
  )
}

export default ProgressBar