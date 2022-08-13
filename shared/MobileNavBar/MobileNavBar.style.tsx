import styled from 'styled-components';





export const MobileNavBarContainer = styled.div`

padding:1rem 2rem;
position: fixed;
color: ${(props)=>props.theme.text};
bottom: 0;
left: 0;
width: 100%;
box-shadow:${(props)=>props.theme.boxShadow} 0px 10px 10px 10px;

font-size: 1.3rem;
display: flex;
justify-content: space-between;
/* border: 1px solid red; */

svg{
  cursor: pointer;
 
}




`


export const CartBagStyleInMobileNav = styled.div`
  position: relative;

  p{
background-color:${(props)=>props.theme.main_color};
position:absolute;
top:-6px;
right:-10px;
font-size:.7rem;
padding:3px;
border-radius:50%;
color:white;
}
`