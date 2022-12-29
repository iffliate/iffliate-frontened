import Modal from 'react-modal';
import {
  MdClose
} from 'react-icons/md';
import {CustomModalContainer} from './CustomModal.style'

export interface CustomModalType{
  modalIsOpen:boolean;
  setModalIsOpen:(value:boolean)=>void;
  element:React.ReactElement;
}


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'white',
    background:'transparent',
    border:'transparent',
    // border:'1px solid red',
    borderRadius:'10px',
    'outline':'none',
    // PointerEvent:''
    // "margin":"0 auto",
    
  },
  
  overlay:{
    backgroundColor:'#000000b5',
    'zIndex':500
  }
};



const CustomModal=({setModalIsOpen,modalIsOpen,element}:CustomModalType):React.ReactElement=>{

  function closeModal() {
    setModalIsOpen(false)
  }



  {/* <button onClick={openModal}>Open Modal</button> */}
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <CustomModalContainer 
        // style={{'position':'relative',
        // // "border":'1px solid yellow',
        //   'width':'60%','margin':'0 auto',
        //   'display':'flex','alignItems':'center','justifyContent':'center',
        // }} 
      >
        <MdClose onClick={closeModal} style={{
          'outline':'none','border':'transparent',color:'#ff7d1a','position':'absolute',
          'top':'-10px',
          'right':'0','fontSize':'1.5rem',cursor:'pointer'}}/>

        {
          element
        }
      </CustomModalContainer>
    </Modal>
  );
}



export default CustomModal