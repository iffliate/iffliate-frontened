import {ProgressBarMainContainer,SingleProgressBar,ProgressCount,ProgressInfo} from './ProgressBar.style'


const ProgressBar = ():React.ReactElement=>{


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
        <ProgressCount isReady={true} count={2}>
              2
        </ProgressCount>
        <ProgressInfo>
        Order Processing
        </ProgressInfo>
      </SingleProgressBar>
          

      <SingleProgressBar>
        <ProgressCount isReady={false} count={3}>
              3
        </ProgressCount>
        <ProgressInfo>
        Ready To Dispatch
        </ProgressInfo>
      </SingleProgressBar>
          
      <SingleProgressBar>
        <ProgressCount isReady={false} count={4}>
              4
        </ProgressCount>
        <ProgressInfo>
        Order Dispatched
        </ProgressInfo>
      </SingleProgressBar>

      <SingleProgressBar>
        <ProgressCount isReady={false} count={5}>
              5
        </ProgressCount>
        <ProgressInfo>
        At Local Facility
        </ProgressInfo>
      </SingleProgressBar>

      <SingleProgressBar >
        <ProgressCount isReady={false} count={6} data-text='hello'>
              6
        </ProgressCount>
        <ProgressInfo>
        Out For Delivery
        </ProgressInfo>
      </SingleProgressBar> 

      <SingleProgressBar>
        <ProgressCount isReady={false} count={7}>
              7
        </ProgressCount>
        <ProgressInfo>
        Out For Delivery
        </ProgressInfo>
      </SingleProgressBar>    

      
      <SingleProgressBar>
        <ProgressCount isReady={false} count={8}>
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