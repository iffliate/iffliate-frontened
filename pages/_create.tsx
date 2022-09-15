import styled from 'styled-components';


export const ContentWithFormInput = styled.div`
  color: #4b5563;
  border-top: 1px dotted #8989892d;
  border-bottom: 1px dotted #8989892d;  
  margin:1rem 0;

  p{
    font-size: .9rem;
    padding: 1rem 0;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:nth-child(1){
      width: 30%;
    }
    & > div:nth-child(2){
      width: 60%;
    }
  }
`