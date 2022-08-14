import styled from 'styled-components';







export const HeroSearchBarContainer= styled.div`
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 21px 36px 0px;
    /* border: 1px solid green; */
    /* background-color: white; */
    display: flex;
    width: 700px;
    margin: 0  auto;
    /* border-radius: 5px; */
  input {
    outline: none;
    border: transparent;
    background-color: white;
    padding: 1.3rem 1.5rem;
    display: block;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    width: 80%;
  }
  input:focus{
    border: 1px solid ${(props)=>props.theme.main_color};
  }

 & > button{
  width: 20%;
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;

  border-bottom-right-radius: 5px !important;
  border-top-right-radius: 5px !important;
 }
`