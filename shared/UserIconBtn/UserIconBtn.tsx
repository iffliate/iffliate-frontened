import {HiUser} from 'react-icons/hi'
import { UserIconBtnContainer } from './UserIconBtn.style'

const style ={
 
  // 'aligh'
}

const UserIconBtn = (props:any):React.ReactElement=>{


  return (
    <UserIconBtnContainer {...props} >
      <HiUser/>
    </UserIconBtnContainer>
  )
}

export default UserIconBtn