import { ShopDetailPaneImgContainer,Socials,
  ShopDetailExtraInfo,
  ShopDetailIntroContentContainer} from './ShopDetailPane.style'




const  ShopDetailPane = ():React.ReactElement=>{
  return (
    <div>
      <ShopDetailPaneImgContainer>
        <img src="" alt="" />
      </ShopDetailPaneImgContainer>
      <ShopDetailIntroContentContainer>
        <h2>Clothing Shop</h2>
        <p>The clothing shop is the best around the city. this  is being run...</p>
          
        <Socials>
          {/* facebook */}
          {/* instagram */}
          {/* twitter */}
          {/* whatapp */}
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
    </div>
  )
}

export default ShopDetailPane