import styled  from 'styled-components';



export const AllShopsContainer =styled.div`

max-width: 1000px;
margin: 10px  auto;
`
export const ShopContainer =styled.div`


@media screen and (min-width: 500px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* border: 1px solid red; */
    gap: 20px;
}

@media screen and (min-width: 800px){
  grid-template-columns: repeat(3,1fr);

}

`




export const ShopIntroCard =styled.div`

border:1px solid #0000001a;
padding: 1rem;
border-radius: 10px;
width: 90%;
margin: 10px auto;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 400px;

& >div:nth-child(1){
  /* width: 70px; */
width: 80px;
height: 80px;

  /* border: 1px solid yellow; */

img{
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
}
& >div:nth-child(2){
width: 70%;
/* border: 1px solid red; */
p{
  padding: .4rem 0;
  color: #00000094;
}
h3{
  font-weight: lighter;
}
}



@media screen and (min-width:500px){
    margin: unset;
    width: 100%;
    max-width: unset;
}

`