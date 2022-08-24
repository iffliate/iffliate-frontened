import styled from 'styled-components';




export const FloatingCartBtnContainer = styled.div`
    position: fixed;
    top: 50%;
    right: 0;
    background-color: ${(props)=>props.theme.main_color};
    padding: .7rem ;
    border-radius: 5px;
    color: white;
    cursor: pointer;


    &> div:nth-child(1){
      display: flex;
      
      p{
        padding: 0 .4rem;
      }
    }

    &> div:nth-child(2){
      background-color: white;
      padding:.5rem .8rem;
      color: ${(props)=>props.theme.main_color};
      border-radius: 5px;
      margin-top: 20px;

    }
`