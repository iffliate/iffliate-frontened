import {CSSProperties } from 'react'
import HashLoader from 'react-spinners/HashLoader';

type PropType={
  loading:boolean;
  color?:string
}
const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex:'10000000',
  backgroundColor:'#ffffffc0',
  width:'100%',
  height:'100%',
  'display':'flex',
  justifyContent:'center',
  alignItems:'center'

};

const Preloader = ({loading=false,color='#f77305'}:PropType)=>{



  return (
    <div  style={{...override,'display':loading==false?'none':'flex'}}>
      <HashLoader
        color={color} loading={loading}  size={150}
        // cssOverride={override}
      />
    </div>
  )
}


export default Preloader