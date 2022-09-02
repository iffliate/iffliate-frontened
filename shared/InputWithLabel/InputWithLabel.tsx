import {InputWithLableContainer,InputContainer} from './InputWithLabel.style'




type Prop ={
  label:string;
  placeholder?:string;
  isTextArea?:boolean;
}
const InputWithLabel = ({ label,placeholder='',isTextArea=false}:Prop):React.ReactElement=>{


  return (
    <InputWithLableContainer>
      <label htmlFor={label}>{label}</label> 
      {
        isTextArea?
          <textarea name="label" id={label} placeholder={label}  cols={30} rows={5}></textarea>
          :

          <input type="text"  id={label} placeholder={placeholder}/>
      }
      
    </InputWithLableContainer>
  )
}


export default InputWithLabel