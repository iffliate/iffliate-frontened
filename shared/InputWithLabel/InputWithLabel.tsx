import {InputWithLableContainer,InputContainer} from './InputWithLabel.style'




type Prop ={
  label:string;
  placeholder?:string;
  isTextArea?:boolean;
  register?:any;
  errorMessage?:string;
}
const InputWithLabel = ({ errorMessage,label,placeholder='',isTextArea=false,register}:Prop):React.ReactElement=>{


  return (
    <InputWithLableContainer>
      <label htmlFor={label}>{label}</label> 
      {
        isTextArea?
          <textarea name="label" id={label} placeholder={label}  cols={30} rows={5} {...register}></textarea>
          :

          <input type="text"  id={label} placeholder={placeholder} {...register}/>
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