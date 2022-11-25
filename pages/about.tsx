import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import { AboutContainer, AboutContainerImageFlunt, AboutTeamList, Team } from '../pageStyles/about.style';
import markothedev from '../assets/markothedev.png'
import cropped_lekan from '../assets/croped_lekan.png'
import femi_cropped from '../assets/femi_cropped.png'
import brown_cropped from '../assets/brownPics.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

import raph  from '../assets/raph.jpeg'
const About:NextPage = ()=>{


  return (
    <GeneralLayout >
      <div style={{'height':'100vh'}}>
        <br />
        <AboutContainer>
          <div className='center'>
            <small>About</small>

            <h1>…It{'’'}s just more than sales</h1>

   

          </div>
          <AboutContainerImageFlunt>
            <img className='first_img' src={img1.src} alt="" />
            <img  className='sec_img' src={img2.src} alt="" />
            <img   className='third_img' src={img3.src} alt="" />
          </AboutContainerImageFlunt>
          <br />
          <br />
          <div className='center'>
            <small>Briefing</small>
            <br />
            <h1>Welcome to Iffiliate. Our goal is to bring you closer to your customers.</h1>
            <ul className={'about_container_content'}>
              <li>Create your shops and add your products to get started</li>
              {/* <li>After purchasing a product, your customers can request a refund after 2 days</li> */}
              <li>Iffiliate will charge your customers 3,000 naira for all items except food items which </li>
              <li>will be 500-1,000 naira commission on your products, and we will handle the deliveries to the customers</li>
              <li>For any enquiries or issues, please e-mail us at cezelimited505@gmail.com</li>
              <li>We are on Instagram as iffiliate.ng and Youtube as Iffiliate</li>
              <li>Please read our terms and condition for more info</li>
            </ul>

          </div>
          <br />
          <br />
          <div className='center'>
            <small>Team</small>
            <br />
            <h1>Service is our superpower.</h1>
            <p className={'about_container_content'}>
        Service isn{'\''}t one person{'\''}s responsibility. We are all involved: investing on behalf of others and finding joy in their success.
            </p>

          </div>
          <br />
          <br />
          <AboutTeamList>
            <Team>
              <img src={brown_cropped.src} alt="" />
              <h3>Brown </h3>
              <p>Ceo</p>
            </Team>
            <Team>
              <img src={markothedev.src} alt="" />
              <h3>Nwokolo Matthew</h3>
              <p>CTO / FullStack Developer</p>
            </Team>
            <Team >
              <img src={cropped_lekan.src} alt="" />
              <h3>Lasabi Olalekan </h3>
              <p>Backend Developer</p>
            </Team>

            <Team >
              <img src={raph.src} alt="" />
              <h3>Dawodu Rapheal </h3>
              <p>Social media manager</p>
            </Team>

            <Team >
              <img src={femi_cropped.src} alt="" />
              <h3>Okedeyi Oluwafemi</h3>
              <p>Android Developer </p>
            </Team>

          </AboutTeamList>
        </AboutContainer>
      </div>
    </GeneralLayout>
  )
}

export default About