import Resizer from 'react-image-file-resizer';

export type StyleTpe =  {
  'style'?:{
    [Key:string]:string,
  }
}

export const createExternalStyle = (props:StyleTpe)=>{
  let styles =''
  if(props.style){
    const all_keys = Object.keys(props.style)
    all_keys.map((key=>{
      if(props.style){
        styles = styles+` ${key}:${props.style[key]}`
      }
      return key
    }))
  } 
  return styles
}


export const isAuth = ():boolean=>{

  if(typeof  window  != 'undefined'){
    return localStorage.getItem('iffilate_cred')?true:false
  }

  return false
}



export const resizeFile = (file:any,height:number,width:number) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });