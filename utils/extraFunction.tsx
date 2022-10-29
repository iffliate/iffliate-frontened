import Resizer from 'react-image-file-resizer';
import jwt_decode from 'jwt-decode';
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

type TokenType={
  refresh:string;
  access:string;
}
type getUserTokenOr404Type = null |TokenType
export const getUserTokenOr404 = ():getUserTokenOr404Type=>{
  let user
  if(typeof  window  != 'undefined'){
    user = window.localStorage.getItem('iffilate_cred');
  }
  if(!user) return null

  const currentUser:TokenType= JSON.parse(user)

  

  return currentUser
}

type DecodedTokenType = {
  'token_type': string,
  'exp': number,
  'jti':string,
  'user_id': number
}
type decode_tokenResponse = null|DecodedTokenType
export const decodeToken = ():decode_tokenResponse=>{
  const user = getUserTokenOr404()
  if(user){
    const  token:DecodedTokenType = jwt_decode(user.access)

    return token

  }

  return null
}



export const resizeFile = (file:any,height:number,width:number) =>{
  console.log({})
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve({uri,type:file.type});
      },
      'base64'
    );
  });
}
  