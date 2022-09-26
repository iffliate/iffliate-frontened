import { useState } from 'react';
import {Container,CheckBox ,Checkmark} from './CheckBoxWithLabel.style'



type Prop ={
  label:string;
  register:any;
  value:number|string|boolean;
  defualIsChecked?:boolean;
}

const CheckBoxWithLabel = ({label,register,value,defualIsChecked = false}:Prop):React.ReactElement=>{
  const [checked,setChecked] = useState(defualIsChecked)
  const childrenVariant ={
    initial:{
      x:-10,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
    }
  }
  return (
    <Container 
      variants={childrenVariant}
    
      htmlFor={label}>{label}
      <CheckBox type="checkbox"  checked={checked} onClick={(e)=>setChecked(!checked)} id={label} value={value} {...register}/>
      <Checkmark />
    </Container>
  )
}

export default CheckBoxWithLabel