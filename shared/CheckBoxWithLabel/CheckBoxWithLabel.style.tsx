import styled from 'styled-components';
import {motion} from 'framer-motion'



export const Container = styled(motion.label)`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & span::after{
    left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  }
`

export const Checkmark = styled.span`
 position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;


  &::after{
    content: "";
  position: absolute;
  display: none;
  }
`

export const CheckBox = styled.input`
 position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color:  ${props=>props.theme.main_color};
  }

  &:checked ~ span:after{
    display: block;
  }
`