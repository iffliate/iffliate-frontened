import styled from 'styled-components';


export const ProgressBarMainContainer = styled.div`
  
  overflow-x: scroll;
  @media screen  and (min-width: 768px){
    display: flex;

    & > div:nth-child(1) > p:nth-child(1)::after {
      content: "1";
    }
    & > div:nth-child(2) > p:nth-child(1)::after {
      content: "2";
    }
    & > div:nth-child(3) > p:nth-child(1)::after {
      content: "3";
    }
    & > div:nth-child(4) > p:nth-child(1)::after {
      content: "4";
    }
    & > div:nth-child(5) > p:nth-child(1)::after {
      content: "5";
    }
    & > div:nth-child(6) > p:nth-child(1)::after {
      content: "6";
    }
    & > div:nth-child(7) > p:nth-child(1)::after {
      content: "7";
    }
    & > div:nth-child(8) > p:nth-child(1)::after {
      content: "8";
    }
  }
`

export const SingleProgressBar = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 20px;

  @media screen  and (min-width: 768px){
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid red; */
    position: relative;
    /* width: 3000px; */
    width: 100%;

    
  }



`
type ProgressCountTYpe ={
  isReady:boolean
  count:number;
}
export const ProgressCount = styled.p<ProgressCountTYpe>`
  ${(props)=>{
    if(props.isReady){
      return `
      color: whitesmoke; 
       background-color: ${props.theme.main_color}; 
      `
    }
    return `
    border: 2px dotted ${props.theme.main_color};
  color: ${props.theme.main_color};
    `
  }}
  /* */

  /* padding: .5rem; */
  height: 30px;
  text-align: center;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen  and (min-width: 768px){
  position: static;
  z-index: 10px;
    

  &::after{
    //the reason for this is to allow the content float above the line
    
    content: "2";
    width: 100%;
    height: 100%;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index:10;
    display:flex;
    justify-content: center;
    align-items: center;
    ${(props)=>{
    if(props.isReady){
      return `
      color: whitesmoke; 
       background-color: ${props.theme.main_color}; 
      `
    }
    return `
    background-color:white;
    border: 2px dotted ${props.theme.main_color};
  color: ${props.theme.main_color};
    `
  }}
  }

  
  }
  &::before{
    content: "";
    width: 100%;
    height: 100%;
    ${(props)=>{
    if(props.isReady){
      return `
       background-color: ${props.theme.main_color}; 
      `
    }
    return `
    background-color:#f3f4f6; 
    `
  }}
    position: absolute;
    width: 5px;
    bottom: -25px;

    @media screen  and (min-width: 768px){
      width:100%;
        height: 5px;
        bottom: 50px;
        /* left: 25px; */
        z-index: 1;
    }

    
  }



`
export const ProgressInfo = styled.p`
padding-left: 10px;
`