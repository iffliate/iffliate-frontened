import { useMediaQuery } from 'react-responsive'
import {
  DashboardLayoutContainer,
  DashboardNav,DashboardNavFooter,
  DashboardMain

}  from './DashboardLayoutStyle'
import GeneralLayoutType from '../GeneralLayout/GeneralLayout'


type Prop = React.PropsWithChildren<{
listOFLinks:{
  label:string;
  route:string;
}[]

}>

const DashboardLayout = ({children ,listOFLinks}:Prop):React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })


  return (
    <GeneralLayoutType>

      <DashboardLayoutContainer>
        {
          isLaptop?
            <DashboardNav>
              <ul>
                {
                  listOFLinks.map((data,index:number)=>(
                    <li key={index}><a href="">{data.label}</a></li>
                  ))
                }
              </ul>
            </DashboardNav>
            :
            ''
        }

        <DashboardMain>
          {
            children
          }
        </DashboardMain>
      </DashboardLayoutContainer>
    </GeneralLayoutType>

  )
}

export default DashboardLayout