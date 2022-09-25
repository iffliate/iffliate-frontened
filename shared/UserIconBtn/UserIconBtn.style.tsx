import styled from 'styled-components';



export const UserIconBtnContainer = styled.div`
  
    border:1px solid #c5c9cc;
      display:flex;
      align-items:center;
      justify-content:center;
      margin:0 auto;
      height:35px;
      width:35px;
      align-self:center;
      border-radius:50%;
      color:#dddfe1;
      cursor:pointer;
      transition: all .3s ease-in-out;
      transform: translateY(5px) translateX(30px);
      &:hover{
        color: ${props=>props.theme.main_color};
        border: 1px solid ${props=>props.theme.main_color};
      }
`