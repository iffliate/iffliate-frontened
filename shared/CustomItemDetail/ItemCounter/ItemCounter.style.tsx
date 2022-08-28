import styled from 'styled-components';
import {ItemCounterContainerType} from './ItemCounter'


export const ItemCounterContainer = styled.div<ItemCounterContainerType>`

width: 100%;
background-color:rgb(247, 248, 253);
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 1rem;
border-radius: 10px;
${(props)=>props.width?'width:'+props.width+';':''}

svg{
color: ${({theme})=>theme.main_color};
font-weight: 700;
font-size: 1.5rem;
 &:hover{
     cursor: pointer;
 }
}
`
export const Number = styled.div``
