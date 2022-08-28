import styled from 'styled-components';


export const IndexPageMainArea = styled.div`
  /* display: flex; */
  & > div:nth-child(1){
   
  }
`

export const IndexIntroInfo= styled.div`
  
  padding: 1.2rem;
  position: relative;
  border-bottom: 1px solid #e5e7eb;

  .offer1 > span  img{
    border-radius: 5px;
 }
 .offer2 > span img{
  display: none !important;
  border-radius: 5px;

 }
 .offer3 > span img{
  display: none !important;
  border-radius: 5px;
}
.offer3{
  display: none;
}
.offer3{
  display: none;
}

@media screen and (min-width:600px){
  &> div:nth-child(1){
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
  
  .offer1 {
    width: 40% !important;
  }
  .offer2{
    width: 40% !important;
    align-self: left;
  }
  .offer2 > span img{
    
    display: block !important;
 }

}

@media screen and (min-width:800px){
  .offer1,.offer2,.offer3{
    display: block !important;
    width: 30% !important;

  }
  .offer2 > span img{
  display: block !important;
 }
 .offer3 > span img{
  display: block !important;
}
}
`

export const ImageControllerContainer= styled.div`


width: 100%;
display: flex;
justify-content: space-between;
font-size: 1.5rem;
/* background-color:; */
/* border: 1px solid red; */
transform: translateY(-120px);
svg{
  background-color:  ${(props)=>props.theme.body};
  display: block;
  padding:.4rem;
  font-size: 2rem;
  color: ${(props)=>props.theme.type==='dark'?'white':'black'};
  border-radius: 50%;
  cursor: pointer;
  /* border: 1px solid red; */

  &:nth-child(1){
    transform: translateX(-16px);
  }
  &:nth-child(2){
    transform: translateX(16px);
  }
  }

  @media screen and (min-width:600px){
transform: translateY(-70px);
  }
  @media screen and (min-width:800px){
    display: none;

  }
`


export const FilterBtnContainer = styled.div`
position: sticky;
background-color: white;
top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;


  & span{
    color:${(props)=>props.theme.text};
  }
  & .css-1s2u09g-control,.css-1pahdxg-control{
    background-color:  ${(props)=>props.theme.body};

  }
  & #react-select-5-listbox{
    background-color:  ${(props)=>props.theme.body} !important;

  }

`


export const HeroSection= styled.div`
height: 100vh;
width: 100%;
/* border: 1px solid red; */
position: relative;

& span img{
  width: 100% !important;
  height: 100% !important;
}

`
export const HeroSectionContentBox= styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 30%;
  /* border: 1px solid red; */
  width: 100%;
  text-align: center;
  color: ${(props)=>{
    if(props.theme.type==='light'){
      
      return '#1f2937'
    }
    return 'whitesmoke'
  }};

  h1{
  font-size: 2.5rem;

  }
`