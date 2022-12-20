import styled from 'styled-components';



export type DashboardLayoutContainerType ={
  showDetail?:boolean
}
export const DashboardLayoutContainer = styled.div<DashboardLayoutContainerType>`
/* border:1px solid red; */
background-color: #f3f4f6;
min-height: 90vh;
padding: 2rem .5rem;

@media screen  and (min-width: 700px){
  padding: 2rem;
  display: flex;
  /* border:1px solid green; */
  align-items: center;
  justify-content: space-between;

  ${({showDetail}):string=>{
    if(showDetail ===true){
      return (
        `& >div:nth-child(1){
    display: none;
  }
  & >div:nth-child(2){
    width: 90%;
    margin: 0 auto;
  }`
      )
    }
    return ''
  }}
  
}
`
export const DashboardNav = styled.div`

  background-color: white;
  border-radius: 20px;
  padding: 2rem 0;

  li{
  }
  a{
    padding: 1rem 2.5rem;
    color: #1f2937;
    display: block;
    position: relative;
    cursor: pointer;
  }
  a::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    padding: .12rem;
    background-color:transparent;
    height: 0;
    transition: .2s all ease-in-out;
  }
  a:hover::after{

    background-color: ${(props)=>props.theme.main_color};
    height: 70%;
  }

  @media screen  and (min-width: 700px){
  width: 20%;
  }
`
export const DashboardMain = styled.div`

@media screen  and (min-width: 700px){
  width: 70%;
  /* border: 1px solid red; */
}

`
export const DashboardNavFooter = styled.div``