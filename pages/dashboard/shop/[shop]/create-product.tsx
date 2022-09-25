import { NextPage } from 'next';
import { BiBookReader } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { GiAmpleDress, GiAppleSeeds, GiOfficeChair, GiSlicedBread } from 'react-icons/gi';
import { RiShoppingBagFill } from 'react-icons/ri';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import { ContentWithFormInput } from '../../../../pageStyles/index/_create';
import Button from '../../../../shared/Button/Button';
import { ButtonStyle } from '../../../../shared/Button/Button.style';
import InputWithLabel from '../../../../shared/InputWithLabel/InputWithLabel';
import Pane from '../../../../shared/Pane/Pane';
import SelectBar from '../../../../shared/SelectBar/SelectBar';
import UploadImage from '../../../../shared/UploadImage/UploadImage';





const CreateProduct:NextPage =()=>{


  return (
    <DashboardLayout
      listOFLinks={[]}
      showDetail={true}
    >

      <h1>Create Product</h1>

      <ContentWithFormInput>
        <div>
          <h3>Product Name</h3>
          <p>Add your product display name</p>
        </div>

        <Pane>
          <InputWithLabel label='Name'/>
          <br />
          <InputWithLabel label='Description' isTextArea={true} />

        </Pane>
      </ContentWithFormInput>

      <ContentWithFormInput>
        <div>
          <h3>Product Pricing</h3>
          <p>Add your actual price and your slashed price</p>
        </div>
        <Pane>
          <InputWithLabel label='Slash Price'/>
          <br />
          <InputWithLabel label='Actual Price' isTextArea={true} />
        </Pane>
      </ContentWithFormInput>

      <ContentWithFormInput>
        <div>
          <h3>Product State</h3>
          <p>is it out of stock for now and what categorie</p>
        </div>
        <Pane>
          <div style={{}} >
            <SelectBar data={[
              {value:'Grocery',label:'Grocery',icon:<GiAppleSeeds color='#ff4f01'/>},
              {value:'Bakery',label:'Bakery',icon:<GiSlicedBread color='#ff4f01'/>},
              {value:'MakeUP',label:'Makeup',icon:<FaPaintBrush color='#ff4f01'/>},
              {value:'Bags',label:'Bags',icon:<RiShoppingBagFill color='#ff4f01'/>},
              {value:'Clothing',label:'Clothing',icon:<GiAmpleDress color='#ff4f01'/>},
              {value:'Funiture',label:'Funiture',icon:<GiOfficeChair color='#ff4f01'/>},
              {value:'Book',label:'Book',icon:<BiBookReader color='#ff4f01'/>},
            ]}
            />
          </div>
          <br />
          <InputWithLabel label='Out Of Stock' isTextArea={true} />

        </Pane>
      </ContentWithFormInput>

      <ContentWithFormInput>
        <div>
          <h3>Product Images</h3>
          <p>Upload your product Image from here</p>
        </div>
        <Pane>
          <UploadImage
            setValue={null}
            height={76}
            width={76}
            name='logo'
          />
          
        </Pane>
      </ContentWithFormInput>
      <br />
      <Button style={{'width':'30%','margin':'0 auto'}} 
        // isLoading={status==='pending'}
        // onClick={handleSubmit(onSubmit)}
      >Publish</Button>
      <br /><br /><br /><br />
    </DashboardLayout>
      
  )
}

export default CreateProduct