import styled from 'styled-components';



export const InputWithLableContainer = styled.div`

label{
  color: #4b5563;
  font-weight:500;
  font-size: 1rem;
  padding-bottom: .6rem ;
display: inline-block;
}

input,textarea{
  padding: .8rem 1rem;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #4b55636f;
  border-radius: 5px;

  &:focus{
    border: 1px solid ${(props)=>props.theme.main_color};
  }
}
`


export const InputContainer = styled.div`

border: 1px solid ;
`