import { NextPage } from 'next'
import DashboardLayout from '../../../layout/DashboardLayout/DashboardLayout'
import InputWithLabel from '../../../shared/InputWithLabel/InputWithLabel'
import Pane from '../../../shared/Pane/Pane'
import UploadImage from '../../../shared/UploadImage/UploadImage'
import { ContentWithFormInput } from '../../_create'



const Create:NextPage = ()=>{



  return (
    <DashboardLayout
      showDetail={true}
      listOFLinks={[]}
    >
      <h2>Create Shop</h2>

      <ContentWithFormInput>
        <div>
          <h3>Logo</h3>
          <p>Upload your shop logo from here</p>
        </div>
        <Pane>
          <UploadImage/>
        </Pane>
      </ContentWithFormInput>
      


      <ContentWithFormInput>
        <div>
          <h3>Cover Image</h3>
          <p>Upload your shop cover image from here
Dimension of the cover image should be <strong> 1170 x 435px</strong></p>
        </div>
        <Pane>
          <UploadImage/>
        </Pane>
      </ContentWithFormInput>
      
      <ContentWithFormInput>
        <div>
          <h3>Payment Info</h3>
          <p>Add your payment information from here</p>
        </div>
        <Pane>
          <InputWithLabel label='Account Holder Name'/>
          <br />
          <InputWithLabel label='Account Holder Email'/>
          <br />
          <InputWithLabel label='Bank Name'/>

          <br />
          <InputWithLabel label='Account Number'/>

        </Pane>
      </ContentWithFormInput>
      
      
      <ContentWithFormInput>
        <div>
          <h3>Shop Address</h3>
          <p>Add your physical shop address from here</p>
        </div>
        <Pane>
          <InputWithLabel label='Country'/>
          <br />
          <InputWithLabel label='City'/>
          <br />
          <InputWithLabel label='State'/>

          <br />
          <InputWithLabel label='ZIP'/>

          <br />
          <InputWithLabel label='Street Address' isTextArea={true}/>

        </Pane>
      </ContentWithFormInput>
      
      <ContentWithFormInput>
        <div>
          <h3>Shop Socails</h3>
          <p>Add your shop settings information from here</p>
        </div>
        <Pane>
          <InputWithLabel label='FaceBook'/>
          <br />
          <InputWithLabel label='Instagram'/>
          <br />
          <InputWithLabel label='Twitter'/>

          <br />
          <InputWithLabel label='Whatapp'/>


        </Pane>
      </ContentWithFormInput>
      

    </DashboardLayout>
  )
}

export default Create