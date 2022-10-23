import { useMediaQuery } from 'react-responsive'
import {
  DashboardLayoutContainer,
  DashboardNav,DashboardNavFooter,
  DashboardMain

}  from './DashboardLayoutStyle'
import GeneralLayoutType from '../GeneralLayout/GeneralLayout'
import { useRouter } from 'next/router';


type Prop = React.PropsWithChildren<{
listOFLinks:{
  label:string;
  route:string;
  extraFunc?:(value:any)=>void
}[],
showDetail?:boolean

}>

const DashboardLayout = ({children ,listOFLinks,showDetail=false}:Prop):React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const route = useRouter()

  return (
    <GeneralLayoutType>

      <DashboardLayoutContainer showDetail={showDetail}>
        {
          isLaptop?
            <DashboardNav>
              <ul>
                {
                  listOFLinks.map((data,index:number)=>(
                    <li key={index}><a onClick={()=>{
                      if(data.extraFunc){
                        data.extraFunc(data)
                      }
                      route.push(data.route)
                    }}>{data.label}</a></li>
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