import {PaneConainer} from './Pane.style'


type Prop = React.PropsWithChildren<{}>
const Pane =({children}:Prop):React.ReactElement=>{


  return (
    <PaneConainer>
      {children}
    </PaneConainer>
  )
}

export default Pane