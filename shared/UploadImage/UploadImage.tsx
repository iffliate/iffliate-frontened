import React, { useEffect, useState } from 'react'
import { resizeFile } from '../../utils/extraFunction';
import { UploadImageContainer } from './UploadImage.style'
import {IoIosCloseCircle} from 'react-icons/io'
import { Buffer } from 'buffer'; 
import { useRouter } from 'next/router';

const dataUrlToFile = (dataUrl: string, filename: string): File | undefined => {
  const arr = dataUrl.split(',');
  if (arr.length < 2) { return undefined; }
  const mimeArr = arr[0].match(/:(.*?);/);
  if (!mimeArr || mimeArr.length < 2) { return undefined; }
  const mime = mimeArr[1];
  const buff = Buffer.from(arr[1], 'base64');
  return new File([buff], filename, {type:mime});
}

type Prop = {
  height:number,
  width:number;
  setValue:any;
  name:string;
  image_defualt_url?:string|null
}
const UploadImage = ({height,width,setValue,name,image_defualt_url=null}:Prop):React.ReactElement=>{
  const route = useRouter();
  
  
  const [Image,setImage] = useState<any>(null);
  const CloseImg = ()=>{
    setValue(name,null)
    setImage(null)
  }
  const onChange = async(event:any)=>{
    try {
      const file = event.target.files[0];
      const image:any = await resizeFile(file, height,width);
      // const reader = new FileReader()
      const newImg  =dataUrlToFile(image.uri,`image.${image.type.split('/')[1]}`)
      setValue(name,newImg)
      setImage(image.uri)
    } catch (err) {
      //
    }
  }
  useEffect(()=>{
    setImage((value:any)=>image_defualt_url)
  },[route.isReady])
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



