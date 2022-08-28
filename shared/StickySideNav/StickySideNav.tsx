import { MobileNavLinkContainer } from '../MobileNavBar/MobileNavBar.style'
import { GiDiscGolfBag } from 'react-icons/gi'


const StickySideNav =():React.ReactElement=>{


  return (
    <div style={{'border':'1px solid #f3f4f6',}}>
      <MobileNavLinkContainer>
        <li><a href=""><GiDiscGolfBag/>Hand Bag</a></li>
        <li><a href=""><GiDiscGolfBag/>Laptop Bag</a></li>
        <li><a href=""><GiDiscGolfBag/>Shoulder Bags</a></li>
        <li><a href=""><GiDiscGolfBag/>Purse</a></li>
        <li><a href=""><GiDiscGolfBag/>Wallet</a></li>

      </MobileNavLinkContainer>
    </div>
  )
}

export default StickySideNav