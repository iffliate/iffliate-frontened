import styled from 'styled-components';


export const LoginNav = styled.div`
  display:flex;
  justify-content: space-between;

  a{
    color: ${prop=>prop.theme.main_color};
    display:inline-block;
    padding:1rem;
  }

`
export const LoginContainer= styled.div`


@media screen and (min-width: 900px){
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  height: 100vh;

  &>div:nth-child(1){
    width: 45%;
  }
  &>div:nth-child(2){
    width: 45%;
  }
}
`
export const LoginContainerImg= styled.div<{image:string}>`
display: none;


@media screen and (min-width: 700px){
  background-image:
    linear-gradient(to bottom, #f7720557,black),
    url(${(props)=>props.image});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    
    display: block;
    width: 100%;
    height: 100%;
    
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`


export const LoginContentContainer= styled.div`
  padding: 1.7rem;
  max-width: 500px;
  margin: 0 auto;

  h2{
    color: #191a1b;
    padding: 1rem 0;
  }
  p{
    padding: 1rem 0;
    color:#4b5563;
    text-align: center;
  }
  span{
    color:${props=>props.theme.main_color}
  }

  @media screen and (min-width: 900px) {
    /* border: 1px solid red; */
    max-width: unset;
    button {
      width: 70%;
      margin: 0 auto;
    }
  }
`