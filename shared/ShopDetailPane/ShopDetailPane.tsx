import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { ShopDetailPaneImgContainer,Socials,
  ShopDetailExtraInfo,
  ShopDetailIntroContentContainer,ShopDetailPaneMainContainer} from './ShopDetailPane.style'




const  ShopDetailPane = ():React.ReactElement=>{
  return (
    <ShopDetailPaneMainContainer>
      <ShopDetailPaneImgContainer>
        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F894%2Ffashion.png&w=1920&q=75" alt="" />
      </ShopDetailPaneImgContainer>
      <ShopDetailIntroContentContainer>
        <h2>Clothing Shop</h2>
        <p>The clothing shop is the best around the city. this  is being run...</p>
        <p className='read_more'><strong>read more</strong></p>  
        <Socials>
          {/* facebook */}
          <BsFacebook/>
          {/* instagram */}
          <RiInstagramFill/>
          {/* twitter */}
          <AiFillTwitterCircle/>
          {/* whatapp */}
          <RiWhatsappFill/>
        </Socials>
        {/* gray line */}

        <ShopDetailExtraInfo>
          <div>
            <h3>Address</h3>
            <p>4885 Spring Street, Illinois, Lincoln, 62656, USA</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>08138444</p>
          </div>
        </ShopDetailExtraInfo>
      </ShopDetailIntroContentContainer>
    </ShopDetailPaneMainContainer>
  )
}

export default ShopDetailPane