import React from 'react';
import '../App.css';
import Disneylogo from './Disneylogo';
import DisneyBody from './DisneyBody';
import SecondBody from './SecondBody';
import ThirdBody from './ThirdBody';
import FourthBody from './FourthBody';
import Commingsoon from './Commingsoon';
import Vacation from './Vacation';
import Footers from './Footers';


function Home() {
  return (
    <div className='App'>

     <Disneylogo/>
      <DisneyBody/>
      <SecondBody/>
      <ThirdBody/>
      <FourthBody/>
      <Commingsoon/>
      <Vacation/>
      <Footers/>
      
    </div>
  )
}

export default Home