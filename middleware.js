// import { Cookies } from 'next/dist/server/web/spec-extension/cookies'
import {NextResponse }  from 'next/server'
import {JwtVerify} from './utils/extraFunction'

export default function middleware (req){
  const url = req.url
  if(typeof  window  != 'undefined'){
    if(url.includes('/dashboard') || url.includes('/shops')){
      if(JwtVerify()){

        return  NextResponse.next()
      }else{
        return  NextResponse.redirect('/sigin')
      }
    }else{
      return NextResponse.redirect('/sigin')
    }
    // return  NextResponse.redirect('/sigin')
  }
 
  
}