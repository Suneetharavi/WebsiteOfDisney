import React from 'react';
import { Link } from 'react-router-dom';

function Disneylogo() {
  return (

<div className='mainlinksClass'>
        <div className='NavBarClass'>
        
          <a href="https://www.disney.com/">
             <img src='https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png'
             alt='Disneylogo'
             width='100'/>
          </a >

                {/* <a href="https://ondisneyplus.disney.com/">
                    Disney+
                </a >
                 */}

                <Link to='/DisneyPlus'> Disney+ </Link>


                <div className='dropDown'>
                    <a href="https://www.wholefoodsmarket.com/sales-flyer">
                        PARKS & TRAVEL
                    </a >
                    <div className='menuItems'>
                        <a href="https://disneyworld.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_wdw">Walt Disney World Resort</a>
                        <a href="https://disneyland.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_dlr">Disneyland Resort</a>
                        <a href="https://disneycruise.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_dcl">Disney Cruise Line</a>
                        <a href="https://www.disneyaulani.com/?DISCID=DI_mtt_chrome_dropdown_aulani">Aulani -A Disney Resort and Spa</a>
                        <a href="https://www.adventuresbydisney.com/?DISCID=DI_mtt_chrome_dropdown_abd">Adventures by Disney</a>
                        <a href="https://disneyvacationclub.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_dvc">Disney vacation Club</a>
                    </div>
                </div>
                
                
                
               
                <a href="https://www.wholefoodsmarket.com/shop/choose">
                    MOVIES
                </a >
                <a href="https://www.wholefoodsmarket.com/shipped-to-you">
                    SHOP
                </a >
                <a href="https://www.wholefoodsmarket.com/app/lunch-dinner-to-go?_branch_match_id=1154850883733696460&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8%2FIz0lNy89PKdZLLCjQy8nMy9aP9DRMz89KM%2FN1TAIAAYnv3ycAAAA%3D">
                    MORE
                </a >

                <div className='signInclassDiv'>
                    <a href="https://www.wholefoodsmarket.com/recipes">
                        Recipes
                    </a > 
                </div>

          
            </div>

    </div>
  )
}

export default Disneylogo