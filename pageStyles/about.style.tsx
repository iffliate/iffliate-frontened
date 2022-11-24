import styled from 'styled-components';






export const AboutContainer= styled.div`
 
    padding: 1rem;
    &>div:nth-child(1){
        max-width: 600px;
    margin: 0 auto;
    }
    small{
        font-size: 1rem;
        background-color: #f7720514;
        color: ${({theme})=>theme.main_color};
        padding: .4rem;
        border-radius: 10px;
    }

    h1{
        color: ${({theme})=>theme.main_color};
        font-size: 1.5rem;
        padding: 1rem 0;
        @media screen and (min-width: 500px) {
            font-size: 2.5rem;
        }
    }
   &> p{
        color:#4b5563;
        padding: 1rem;
    }
`
export const AboutTeamList= styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    justify-content: space-between;
    margin: 0 auto;

    @media screen  and (min-width:900px){
        display: grid;
    grid-template-columns: repeat(4,1fr);
    }
`


export const Team= styled.div`
    text-align:center; 
    margin: 10px auto;

    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 auto;
        border: 2px solid  ${({theme})=>theme.main_color};
    }
    h3{
        color:  ${({theme})=>theme.main_color};
    }
    p{
        color:#4b5563;

    }
`