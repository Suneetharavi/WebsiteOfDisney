import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';


// import Nav from './Nav'
function DisneyPlus() {
  return (
    <div>
    <div class='nav'>
        <b>Hulu's Black Friday Deal</b> <span>- Get Hulu (With Ads) for</span> <b>99¢/month </b> <span>for a year!</span><b> <a href='https://signup.hulu.com/account'>Get This Deal Now.</a></b>
        <p>Hulu (With Ads) plan only. Deal ends 11/28. Terms apply.</p>
        
    </div>
    <div class='main'>
    <a href='https://www.disneyplus.com/identity/login/enter-email'><button class='logIn'>LOG IN</button></a>
        <div class='mainbuttons'>
        <div class='hAndD'>
        <img src='https://cnbl-cdn.bamgrid.com/assets/e7a9b8372dff8e8386940e7e9dbc13d07c6312c4abc77cab5364adc0763f8cb7/original' alt='' class='huluAndDisneyImg'/>
        <a href='https://www.disneyplus.com/identity/sign-up/enter-email?pref=disney_bundle_duo_basic'><button class='huluAndDisney'>GET THEM BOTH</button></a>
        <p>Starting at $9.99/month</p>
        </div>
        <div class='dBundle'>        
        <img src='https://cnbl-cdn.bamgrid.com/assets/c9ea8a8e6fec8014955b5e2af850e88531f8b4dc82fb7c6384177444b3163cb0/original' alt='' class='bundleImg'/>
        <a href='https://www.disneyplus.com/identity/sign-up/enter-email?pref=disney_bundle_trio_basic'><button class='disneyBundle'> GET ALL THREE</button></a>
        <p>Starting at $14.99/month</p>
        </div>
        
        </div>
        <div className='TandCDiv'>
        <a href=''>Terms Apply.</a>
        <p>All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle. Indiana Jones and the Dial of Destiny streaming December 1 on Disney+.</p>
        <a href=''>View All Plan Options</a>
        </div>
    </div>
   <div class='section2'>        
       <Link to='/DisneyPlus/NewOnDisney' className='link'><div>NEW ON DISNEY</div> </Link>
       <Link to='/ComingSoon' className='link'><div>COMING SOON</div></Link>
       <Link to='/Trending' className='link'><div>TRENDING</div></Link>
    </div>
   <Footer/>
    </div>
  )
}

export default DisneyPlus