import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { ShopDetailType } from '../../redux/Shop/ShopApi'
import { ShopDetailPaneImgContainer,Socials,
  ShopDetailExtraInfo,
  ShopDetailIntroContentContainer,ShopDetailPaneMainContainer} from './ShopDetailPane.style'



type Prop = {
  shopDetail:ShopDetailType
}
const  ShopDetailPane = ({shopDetail}:Prop):React.ReactElement=>{
  return (
    <ShopDetailPaneMainContainer>
      <ShopDetailPaneImgContainer>
        {/* <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Ffashion.png&w=1920&q=75" alt="" /> */}
        <img src={shopDetail.logo} alt="" />
      </ShopDetailPaneImgContainer>
      <ShopDetailIntroContentContainer>
        <h2>{shopDetail.name}</h2>
        <p>{shopDetail.about}...</p>
        <p className='read_more'><strong>read more</strong></p>  
        <Socials>
          {/* facebook */}
          {
            shopDetail.facebook?
              <a  href={shopDetail.facebook} target={'_blank'} rel="noreferrer">
                <BsFacebook/>
              </a>:''
          }
          {/* instagram */}
          {
            shopDetail.instagram?
              <a href={shopDetail.instagram} target={'_blank'} rel="noreferrer" >
                <RiInstagramFill/>
              </a>:''
          }
          {/* twitter */}
          {
            shopDetail.twitter?
              <a href={shopDetail.twitter} target={'_blank'} rel="noreferrer">
                <AiFillTwitterCircle/>
              </a>:''
          }
          {/* whatapp */}
          {
            shopDetail.whatsapp?
              <a  href={shopDetail.whatsapp} target={'_blank'} rel="noreferrer">
                <RiWhatsappFill/>
              </a>:''
          }
        </Socials>
        {/* gray line */}

        <ShopDetailExtraInfo>
          <div>
            <h3>Address</h3>
            <p>{shopDetail.street_address} , {shopDetail.address_city}, {shopDetail.address_country}</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>{shopDetail.phone}</p>
          </div>
        </ShopDetailExtraInfo>
      </ShopDetailIntroContentContainer>
    </ShopDetailPaneMainContainer>
  )
}

export default ShopDetailPane