import styled from 'styled-components';





export const OrderdetailNavContainer= styled.div`
display: flex;
flex-direction: column-reverse;

  h3{
      color:#1f2937;
      font-size: 1rem;
  }
  &  > div:nth-child(1){
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    
  }

  & p{
    font-size: .8rem;
    color: whitesmoke;
    background-color: ${({theme})=>theme.main_color};
    padding:.2rem .5rem;
    border-radius: 10px;
  }
  & a{
    /* border: 1px solid red; */
    text-align: center;
    padding: .8rem;
    color: ${({theme})=>theme.main_color};
    text-decoration: underline;
  }

  @media screen and (min-width: 500px){
    display: flex;
    justify-content: space-between;
    align-items: center;
flex-direction: row;

    &  > div:nth-child(1){
      width: 200px;
    }



  }
`


export const OrderdetailCardContainer= styled.div`
@media screen and (min-width: 800px ){
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
}

`

export const OrderDetailCard= styled.div`
    border: 1px solid #e5e7eb;
    padding: 1rem;
    margin: 10px 0;
    border-radius: 10px;
    
    h3,p{
     color: #1f2937;
      font-size: .9rem;
      
   }
`


export const OrderDetailPaneContainer= styled.div`
  /* border: 1px solid red; */
  /* width: 50; */
  & > div h3{
    color: #1f2937;
    padding: 1rem 0;
  }
  @media screen and (min-width: 800px){
    display: flex;
    justify-content: space-between;
  }
`
export const OrderDetailTotalContainter= styled.div`
  display: flex;
  padding: .8rem 0;
  
  p:nth-child(1){
    color:#1f2937;
  }
  p:nth-child(2){
    margin-left: 30px;
    color:#656e7a;
  }
`
