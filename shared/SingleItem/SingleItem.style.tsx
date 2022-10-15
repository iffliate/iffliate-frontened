import styled from 'styled-components'



export const SingleItemContainer = styled.div`
  padding: 1rem;
  background-color: white;
  width: 90%;
  /* width: 80%; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: relative;
  cursor: pointer;
  margin: 1.3rem auto;

  img{
    width: 100%;
  }
  & > span img{
    /* border: 1px solid red !important; */
    width: 200px !important;
    /* margin:  ;6 auto !important; */
    /* display: block; */
    object-fit: cover;
  }
  & > span{
    margin-left: 20px !important;
    margin-right: 20px !important;
    /* border: 1px solid blue !important; */
  }
  @media screen and (min-width: 400px) {
  width: 80%;    
  }
  @media screen  and (min-width: 700px){
  margin: 0 auto;
  }
`

export const PercentageBar = styled.div`
  z-index: 10;
  padding:.3rem;
  color: white;
  font-size: .9rem;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props)=>props.theme.main_color};
  display: inline-block;
`

type SingleItemBtnContainerProp ={
  variant:'empty'|'fill'
}
export const SingleItemBtnContainer = styled.div<SingleItemBtnContainerProp>`

display: flex;
background-color: #f3f4f6;
display: flex;
justify-content: space-between;
align-items: center;
padding: .5rem 1rem;
border-radius: 6px;
transition: .5s all ease-in-out;
&:hover{
  color: white;
  background-color: ${(props)=>props.theme.main_color};
}
${(props):string=>{
    if(props.variant==='empty'){
      return `
      svg:nth-child(1){
        color:transparent;
      }
      
      `
    }
    else{
      return `
      color: white;
      background-color: ${props.theme.main_color};
      
      `
    }
  }}

`


export const ItemName = styled.div`
color:#6b7280;
font-weight:lighter;
font-size: .9rem;
`
export const PriceContainer = styled.div`
padding:.8rem  0;
border-radius: 1px solid red;
display: flex;
justify-content: space-between;
/* align-items: center; */
width: 90px;
p:nth-child(1){
  color: #1f2937;
  font-weight: bold;
  font-size: .9rem;
}

p:nth-child(2){
  color:gray;
  font-weight:lighter;
  font-size: .9rem;
}
`
type GridForSingleItemProp = {
repeat?:number|null;
}
export const GridForSingleItem = styled.div<GridForSingleItemProp>`
  background-color:#f3f4f6;
  padding:1rem;

  @media screen and (min-width:544px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap:  20px 0; 
  }

  @media screen and (min-width:800px){
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap:  20px 0; 
  }

  @media screen and (min-width:1000px){
      display: grid;
      grid-template-columns: repeat(5,1fr);
      gap:  20px 0; 
  }

  ${(props)=>props.repeat?'grid-template-columns: repeat('+props.repeat+',1fr) !important;':''}
  

`