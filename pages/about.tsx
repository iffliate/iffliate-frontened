import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import { AboutContainer, AboutTeamList, Team } from '../pageStyles/about.style';
import markothedev from '../assets/markothedev.png'



const About:NextPage = ()=>{


  return (
    <GeneralLayout >
      <div style={{'height':'100vh'}}>
        <br />
        <AboutContainer>
          <div>
            <small>Team</small>
            <br />
            <h1>Service is our superpower.</h1>
            <p>
        Service isn{'\''}t one person{'\''}s responsibility. We are all involved: investing on behalf of others and finding joy in their success.
            </p>

          </div>
          <br />
          <br />
          <AboutTeamList>
            {
              [...new Array(5)].map((d,index:number)=>(
                <Team key={index}>
                  <img src={markothedev.src} alt="" />
                  <h3>Nwokolo Matthew</h3>
                  <p>CTO / FullStack developer</p>
                </Team>
              ))
            }
            
          </AboutTeamList>
        </AboutContainer>
      </div>
    </GeneralLayout>
  )
}

export default About