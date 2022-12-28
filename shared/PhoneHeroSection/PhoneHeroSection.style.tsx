import styled from 'styled-components';
import LoginImage from '../../assets/login.jpg'





export const PhoneHeroSectionStyledContainer =styled.div`
 background-image:
    linear-gradient(to bottom,black, #f7720557),
    url(${LoginImage.src});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    color: whitesmoke;  
    display: block;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1{
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
  .content_container{
    padding: 1rem;
    /* max-width: 320px; */
    /* border: 1px solid red; */
    text-align: center;
    transform: translateY(-50px);
  }
`