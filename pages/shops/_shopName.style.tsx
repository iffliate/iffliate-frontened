import styled from 'styled-components';




export const ShopDetailMobileNav= styled.div`
  position: sticky;
  border-radius: 1px solid red;
  background-color: white;
  z-index: 100;
  top: 0;
  left: 0;
  padding:  .8rem 1rem;
  box-shadow:${(props)=>props.theme.boxShadow} 0px 10px 10px -10px;

    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  p{
    font-size: 1.2rem;
    /* font-weight: 600; */
  }
  h3{
    cursor: pointer;
    font-size:.9rem;
    padding: .2rem 0;
    color: ${(props)=>props.theme.main_color};
  }

  & > div:nth-child(1){
    width: 70px;
    img{
      width: 100%;
      border-radius: 10px;
      height: 100%;
    }
  }
  & > div:nth-child(2){
    margin-left: 15px;
  }

`

export const ShopBanner= styled.div`
  padding: 1rem;
  /* border:1px solid red ; */
 
  img{
    width: 100%;
    border-radius: 10px;
    height: 300px;
    object-fit: cover;
  }

  @media screen and (min-width: 1023px){
    width: 800px;
  padding: unset;
  margin: 0 auto;
  }

`

export const MainShopArea = styled.div`
  padding: 1rem;
@media screen and (min-width: 1023px){
  display:flex ;
  width: 100%;
  border: 1px solid red;
  background-color: #f3f4f6;
/* padding: 0 3rem; */
  justify-content: space-between;
  &>div:nth-child(1){
    position: sticky;
    top: 40px;
    left: 0;
    height: 90vh;
    background-color: red;
    width: 25%;
    transform: translateX(20px);
  }
  &>div:nth-child(2){
    width:70%;
  }
}
  
`