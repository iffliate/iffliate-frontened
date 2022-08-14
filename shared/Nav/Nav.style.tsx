import styled from 'styled-components';



export const  NavContainer =styled.div`
    padding-top:.8rem;
    padding-bottom:.3rem;
    box-shadow:${(props)=>props.theme.boxShadow} 0px 10px 10px -10px;
    /* border: 1px solid red; */

 & .ddg{
    display: flex;
    justify-content: space-between;
    width: 100%;
    

    @media screen and (min-width: 700px){
     
    }
  }
`



export const NavLinkContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 70%;
  justify-content: space-between;

  @media screen and (min-width:800px) {
  width: 55%;
    
  }
  @media screen and (min-width:900px) {
  width: 40%;
    
  }
  
  li{ 
    list-style-type: none;
  }
  a{
    color: ${props=>props.theme.text};
    text-decoration: none;
    transition: .2s all ease-in-out;
    
  }
  a:hover{
    color: ${props=>props.theme.main_color};
  }

  ul{
    display: flex;
    font-size: 1.2rem;
    font-weight: lighter;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid blue; */
    width: 50%;
  }

`

export const NavBtnContainer =styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 200px !important; */
  /* background-color: red; */
  padding: .4rem;
  width: 50%;


  button{
    width: 45%;
  }
  

  @media screen and (min-width:800px) {
  width: 45%;
  button:nth-child(1){
    width: 50%;
  }
  button:nth-child(2){
    width: 35%;
  }
    
  }
  
`