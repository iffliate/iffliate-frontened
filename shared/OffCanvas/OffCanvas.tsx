import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Logo from '../Logo/Logo'


type Prop =React.PropsWithChildren<
{
  btnContrroller:React.ReactElement;
  size?:number;
  direction?:'left'|'right';
  btnClick?:()=>void
}>

const OffCanvas = ({children,btnContrroller,size=80,direction='left',btnClick=()=>null}:Prop):React.ReactElement=>{

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    btnClick()
    setIsOpen((prevState) => !prevState)
  }


  return (
    <>
      <div onClick={toggleDrawer} 
      // style={{'border':'1px solid red'}}
      >
        
        {btnContrroller}
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='bla bla bla'
        size={`${size}%`}
        direction={direction}
        zIndex={4000}
        // style={{'zIndex':'1000'}}
      >
        <div style={{'padding':'.8rem .3rem','paddingTop':'.8rem','display':'flex','justifyContent':'space-between','alignItems':'center','borderBottom':'1px solid #e5e7eb'}}>
          <Logo width={120}/>
          <AiOutlineCloseCircle onClick={(e)=>setIsOpen(false)}/>
        </div>
        {
          children
        }
      </Drawer>
    </>
  )
}

export default OffCanvas