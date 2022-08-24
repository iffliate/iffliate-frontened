import styled from 'styled-components';



export const SingleCartContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  & >div:nth-child(1){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 59%;
    /* border: 1px solid red; */
    
  }

  & >div:nth-child(2){
    width: 28%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid yellow; */
    svg{
      color: #2c2d2e;
      display: block;
      transition: .3s color ease-in-out;
    }
    svg:hover{
      color: ${(props)=>props.theme.main_color};
    }
    
  }
`

export const SingleCartBtnContainer = styled.div`
  padding: .6rem 10px;
  background-color: #f3f4f6;
  display: inline-block;
  border-radius: 20px;
  font-size: 1rem;
  text-align: center;
  svg{
    padding: .1rem 0;
    display: block;
    font-size: 1rem;
    font-weight: 600;
  }
  p{
    padding: 1rem 0;
  }
`

export const SingleCartImageContainer = styled.div`

/* border: 1px solid red; */
  img{
    width: 50px !important;
    /* height: 200px !important; */
  }
`


export const SingleCartContentContainer = styled.div`
/* text-align: center; */


h2{
  font-size: .8rem;
  width: 100px;
  /* border: 1px solid purple; */

}
p{
  font-size: 1rem;
  padding: .7rem 0;
  font-weight: 600;
  color: ${(props)=>props.theme.main_color};
}

small{
  color: #7e8490;
  font-size: .9rem;
  font-weight: 400;
}
`
