import React from 'react'



function DisneyBody() {
  return (
    <div className='mainBodyClass'>

       <div className='bodyTextClass'>
        <a href ="https://www.disneyplus.com/brand/disney?cid=DTCI-Synergy-Disneycom-Site-Acquisition-USLaunch-US-DisneyPlus-NA-EN-NavPipe-StreamNowCTA">
            YOUR FAVORITE DISNEY MOVIES & SERIES STREAMING ANYTIME ON DISNEY+
        </a>
      </div> 

      <div className='bodyImageClass'>

              {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="800px"
        height="450px"
      /> */}

        <video width="1500" height="800" autoPlay muted loop>
             <source src="https://cdnvideo.dolimg.com/cdn_assets/45eb56a6c8e1430e10eb0e660d88530fc9898011.mp4" type="video/mp4"/>

             Your browser does not support the video tag.
        </video>
       
      {/* <img src='https://media.tenor.com/n3eZWmq4zmAAAAAC/elsa-frozen.gif'  
                alt='NoImg'
                width='1500'/>  */}
      </div>

      <div className='cyberMondayDiv'>
       <a href ='https://www.fandango.com/wish-2023-231123/movie-overview'>
            <img src ='https://lumiere-a.akamaihd.net/v1/images/hb_wish_logo_2783_b61b2ea8.png?region=0,0,900,347'
                alt = 'noWishImage'
                width='500'
                height={310}/>
                
        </a>
        <font color='white' size="3">Experience the movie event of the year! <i>Wish</i> is now playing, only in theaters.</font>
        {/* <a href="https://www.fandango.com/DisneyWish" class="button" target="_blank" rel="noopener noreferrer" role="button" data-title="Get Tickets Now"> <span class="btn-text"> Get Tickets Now </span></a> */}
      </div>
      <div className='salesButtonClass'>
        <a href ="https://www.fandango.com/DisneyWish">
             <button className='salesbutton'>Get Tickets Now</button>
        </a>
      
     
        <a href ="https://video.disney.com/watch/wish-official-trailer-6065a328360feebd6b4f2a72">
            <button className='trailerButton'><img src='https://media.istockphoto.com/id/1370538751/vector/play-button-in-circle-vector-icon-in-flat-style-design-for-website-design-app-ui-isolated-on.jpg?s=612x612&w=0&k=20&c=o7u_j3RQJxc20pxsYEu9keWZIlsmliX6taJhEzAlmLI='
            alt='playbuttonimage'
            width='20'></img>Watch Trailer</button>
        </a>
      </div>
      
    </div>
  )
}

export default DisneyBody