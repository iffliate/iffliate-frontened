import styled from 'styled-components';




export const IndexIntroInfo= styled.div`
  
  padding: 1.2rem;
  position: relative;
  border-bottom: 1px solid #e5e7eb;

`

export const ImageControllerContainer= styled.div`


width: 100%;
display: flex;
justify-content: space-between;
font-size: 1.5rem;
/* background-color:; */
/* border: 1px solid red; */
transform: translateY(-100px);
svg{
  background-color:  ${(props)=>props.theme.body};
  display: block;
  padding:.4rem;
  font-size: 2rem;
  color: ${(props)=>props.theme.type==='dark'?'white':'black'};
  border-radius: 50%;
  cursor: pointer;
  /* border: 1px solid red; */

  &:nth-child(1){
    transform: translateX(-16px);
  }
  &:nth-child(2){
    transform: translateX(16px);
  }
  }
`


export const FilterBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;


  & span{
    color:${(props)=>props.theme.text};
  }
  & .css-1s2u09g-control,.css-1pahdxg-control{
    background-color:  ${(props)=>props.theme.body};

  }
  & #react-select-5-listbox{
    background-color:  ${(props)=>props.theme.body} !important;

  }

`