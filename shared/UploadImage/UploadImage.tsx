import React, { useState } from 'react'
import { resizeFile } from '../../utils/extraFunction';
import { UploadImageContainer } from './UploadImage.style'
import {IoIosCloseCircle} from 'react-icons/io'




type Prop = {
  height:number,
  width:number;
  setValue:(value:any)=>void;
}
const UploadImage = ({height,width,setValue}:Prop):React.ReactElement=>{
  
  
  const [Image,setImage] = useState<any>(null);

  const CloseImg = ()=>{
    setValue(null)
    setImage(null)
  }
  const onChange = async(event:any)=>{
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file, height,width);
      setValue(image)
      setImage(image)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <UploadImageContainer>
      {
        Image?
          <>
            <img src={Image} alt=""  />
            <IoIosCloseCircle onClick={CloseImg}/>
          </>
        // 'hello'
          :
          <input type="file" onChange={onChange} />
      }
    </UploadImageContainer>
  )
}
export default UploadImage