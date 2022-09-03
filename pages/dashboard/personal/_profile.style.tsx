import styled from 'styled-components';




export const ShippingAddresses = styled.div`

  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 10px;
  margin: 10px 0;
  p{
    color: #444649;
    padding: .5rem 0;
    font-size: .8rem;
  }
  h3{
    font-size: 1rem;

  }

  @media screen and (min-width: 500px) {
    width: 30%;
  }
`

export const ShippingAddressContainer = styled.div`
  

    @media screen and (min-width: 500px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      
    }
`