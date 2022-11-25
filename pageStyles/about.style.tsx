import styled from 'styled-components';



export const AboutContainerImageFlunt = styled.div`
display: grid;
grid-template-areas:
"first_img first_img"
"sec_img third_img";
gap: 30px;

    img{
        width: 100%;
        border-radius:20px;
        display: block;
    }

    img.first_img{
        grid-area: first_img;
    }
    img.sec_img{
        grid-area: sec_img;

    }
    img.third_img{
        grid-area: third_img;

    }

    @media screen and (min-width:516px) {
        max-width: 1200px;
        margin: 0 auto;
        grid-template-areas:
"sec_img  first_img third_img"
"sec_img  first_img third_img"
".  first_img ."
    }
    img.first_img{
        height: 700px;
    }
    img.sec_img{
        height: 500px;
    }
    img.third_img{
        height: 500px;


    }

`



export const AboutContainer= styled.div`
 
    padding: 1rem;
    li{
        list-style-type: circle;
        padding: .3rem 0;
    }
    &>.center{
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
   .about_container_content{
        color:#4b5563;

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