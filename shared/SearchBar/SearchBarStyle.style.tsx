import styled from 'styled-components';




export const SearchBarStyle = styled.input`
  border: transparent;
  background-color: whitesmoke;
  padding: 1rem .8rem;
  display: block;
  width:100%;
  outline: none;
`


export const SearchBarStyleContainer = styled.div`
  padding: 0 1.3rem;
  border-radius: 7px;
  margin: 0 10px;
  position: relative;
  background-color: whitesmoke;
  svg{
    font-size: 1.3rem;
  }
  svg:hover{
    color: ${(props)=>props.theme.main_color  };
  }
  .searchIcon{
    position: absolute;
    top: 30%;
    left: 5px;
    cursor: pointer;
  }
  .closeIcon{
    position: absolute;
    top: 30%;
    right: 5px;
    cursor: pointer;
  }
  
`