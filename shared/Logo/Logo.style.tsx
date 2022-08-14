import styled from 'styled-components';






export const LogoContainer = styled.div<{width:number}>`
  
  width: ${(props)=>props.width}px;
  display: inline-block;

  & span img{
    height: 100% !important;
    width: 100% !important;
  }
`