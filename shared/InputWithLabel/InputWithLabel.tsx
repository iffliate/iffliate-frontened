import {InputWithLableContainer,InputContainer} from './InputWithLabel.style'
import {AiFillEye} from 'react-icons/ai';
import {BsEyeSlashFill} from 'react-icons/bs'
import { useState } from 'react';



type Prop ={
  label:string;
  placeholder?:string;
  isTextArea?:boolean;
  register?:any;
  errorMessage?:string;
  type?:'password'|'text';
}
const InputWithLabel = ({ type='text',errorMessage,label,placeholder='',isTextArea=false,register}:Prop):React.ReactElement=>{

  const [show,setShow] = useState(true)
  const RenderIcon = ()=>{
    return (
      <>
        {
          show?
            <BsEyeSlashFill onClick={(e)=> setShow(false)}/>
            :
            <AiFillEye onClick={(e)=> setShow(true)}/>
        }
      </>
    )
  }
  return (
    <InputWithLableContainer>
      <label htmlFor={label}>{label}</label> 
      {type==='password'&&<RenderIcon/>}
      {
        isTextArea?
          <textarea name="label" id={label} placeholder={label}  cols={30} rows={5} {...register}></textarea>
          :

          <input type={show?'password':'text'}  id={label} placeholder={placeholder} {...register}/>
      }
      {
        errorMessage?
          <small style={{'color':'crimson'}}>{errorMessage}</small>
          :''
      }
    </InputWithLableContainer>
  )
}


export default InputWithLabel