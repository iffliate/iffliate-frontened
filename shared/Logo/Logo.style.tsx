import styled from 'styled-components';





export const StyledLogo = styled.h1`
  font-size: 2rem;
  color:${(props)=>props.theme.main_color};
  font-weight:700;
  position: relative;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 150px;
  
  &::after{
    content: '';
    position: absolute;
    width:90%;
    border-radius: 20px;
    top: 20px;
    right: 0;
    padding: 1.2px;
    background-color:${(props)=>props.theme.main_color};
  }
`
