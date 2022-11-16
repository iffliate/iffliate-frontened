import styled from 'styled-components';


export const TransactionsContainer = styled.div``
export const Transaction = styled.div`
    border-bottom: 1px solid #4b556349;
    margin: 0px auto;

    @media screen and (min-width: 400px){ 
display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 500px;
    }
`
export const TransactionName = styled.div`
 color: #4b5563;

p{
    background-color: ${(props)=>props.theme.main_color};
    /* background-color: green; */
    /* background-color: red; */
    color: white;
    display: inline-block;
    padding: .3rem;
    border-radius: 5px;
    margin: .2rem 0;
}
`
export const TransactionInfo = styled.div`


strong{
 color: #4b5563;

}
`

