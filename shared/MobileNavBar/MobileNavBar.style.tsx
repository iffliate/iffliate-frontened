import styled from 'styled-components';





export const MobileNavBarContainer = styled.div`

padding:1rem 2rem;
position: fixed;
color: ${(props)=>props.theme.text};
bottom: 0;
left: 0;
width: 100%;
box-shadow:${(props)=>props.theme.boxShadow} 0px 10px 10px 10px;
background-color: white;
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


export const MobileNavLinkContainer= styled.ul`

/* border: 1px solid red;
position: relative; */
z-index: 10;
font-size: 1.1rem;
list-style-type: none;
margin-top: 30px;
display: flex;
flex-direction:column;
li{
  padding: .6rem 1.5rem;
  text-align: left;
}
svg{
  margin-right: .3rem;
}
a{
  text-decoration: none;
  color: ${(props)=>props.theme.type==='light'?'#4b5563':'white'} !important;
  transition: .4s color ease-in-out;
  cursor: pointer;
}
a:hover{
  color: ${(props)=>props.theme.main_color} !important;
  
}
`