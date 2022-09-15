import styled from 'styled-components';



export const CheckoutMainContainer= styled.div`
  @media screen  and (min-width: 900px){
      display: flex;
      align-items: center;
      justify-content: space-between;

      &>div:nth-child(1){
        width: 50%;
        /* border: 1px solid red; */

      }
      
  }
`
export const CheckoutContainer= styled.div`
h3{
  font-size:1rem;
  color: #1f2937;
  text-align: center;
  padding: .8rem 0;
}
@media screen  and (min-width: 900px){
  /* border: 1px solid red; */
  width: 30%;

}

`
export const CheckoutItemContainer= styled.div`
padding:1rem 0;
  border-bottom: 1px solid #e5e7eb;
`
export const CheckoutItem= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #767677;
  padding: .9rem 0;

strong{
  color: #1f2937;
}
`