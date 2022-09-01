import styled from 'styled-components';


export const ShopDetailPaneMainContainer = styled.div`
  /* border: 1px solid yellow; */
  padding: 1rem 0;
  border-radius: 15px;
  background-color: white;
  text-align: center;
`
export const ShopDetailPaneImgContainer = styled.div`
  width: 160px;
  margin: 8px auto;
img{
  width: 100%;
  height: 100%;
  border-radius: 14px;

}

`
export const ShopDetailIntroContentContainer = styled.div`
/* padding: 1rem; */

.read_more{
  color:${(props)=>props.theme.main_color};
  cursor: pointer;
}
h2,h3{
  font-size: 1rem;
  color:#1f2937;
}
h2{
  padding:.7rem 0;
}
p{
  color: #9096a0;
  font-weight: 300;
  font-size: .9rem;
  padding: 0 1rem ;
}

`
export const Socials = styled.div`
/* display: flex; */
padding: .7rem 0;
border-bottom: 1px solid #e5e7eb;
svg{
  display: inline-block;
  margin: 1rem .4rem;
  font-size: 1.2rem;
  color:${(props)=>props.theme.main_color};
}

`
export const ShopDetailExtraInfo = styled.div`

text-align:left;
padding: 1rem 1.5rem;

p{

  padding: .4rem 0;
}

div{
  padding: .3rem 0;
}
`