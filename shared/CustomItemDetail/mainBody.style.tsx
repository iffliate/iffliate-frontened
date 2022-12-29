import styled from 'styled-components'






export const MainBodyContainer = styled.div`
    /* border: 1px solid red; */
    max-height: 700px;
    overflow-y: scroll;
    @media screen  and (min-width:900px){
        display: flex;
        justify-content: space-between;
        /* justify-content: space-around; */
        padding: 0 2rem;
        align-items: center;

        max-width: 900px;
        margin: 0 auto;
    }

    @media screen  and (min-width:800px){
    max-height: unset;
            
    }
`