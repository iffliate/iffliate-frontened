import { NextPage } from 'next';
import Image from 'next/image';
import GeneralLayout from '../../../layout/GeneralLayout/GeneralLayout';
import {HiLocationMarker} from 'react-icons/hi'
import {AllShopsContainer,ShopContainer,
  ShopIntroCard}  from '../../../pageStyles/index/_index.style'
// import DummyImage from '../../assets/shopimage.webp'

const DummyImage= 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F882%2FFurniture.png&w=1920&q=75'
const index:NextPage=()=>{


  return (
    <GeneralLayout>

      <br /><br /><br />
      <AllShopsContainer>
        <h2>All Your Shops</h2>
        <br />
        <ShopContainer >
          {
            [...new Array(5)].map((i,index)=>(
              <ShopIntroCard key={index}>
                <div>
                  <img src={DummyImage} className='shop_logo'/>
                </div>
                <div>
                  <h3>Furniture Shop</h3>
                  <p>
                    <HiLocationMarker/>
                    4885 Spring street, llinois, Lincoin,62657,USA
                  </p>
                </div>
              </ShopIntroCard>
            ))
          }
        </ShopContainer>

      </AllShopsContainer>
    </GeneralLayout>
  )
}

export default index