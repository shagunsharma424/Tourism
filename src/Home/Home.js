import React, { useRef, useEffect } from 'react';
import "./Home.css"
export default function Home()
{
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Error attempting to play the video:", error);
        });
      }
    }, []);
    const northEastStates=[
      {
        stateName:"Meghalya",
        url:"https://images.pexels.com/photos/11622977/pexels-photo-11622977.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        stateName:"Nagaland",
        url:"https://www.tourmyindia.com/blog//wp-content/uploads/2016/10/Panoramic-Beauty-of-Nagaland.jpg"
      },
      {
        stateName:"Arunachal Pradesh",
        url:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/19190505/ARUNACHAL-PRADESH-FEATURE-compressed.jpg"
      },
      {
        stateName:"Assam",
        url:"https://www.ibef.org/assets/images/states/Assam-2.jpg"
      },
      {
        stateName:"Manipur",
        url:"https://www.thestatesman.com/wp-content/uploads/2021/07/QT-Manipur.jpg"
      },
      {
        stateName:"Nagaland",
        url:"https://www.tourmyindia.com/blog//wp-content/uploads/2016/10/Panoramic-Beauty-of-Nagaland.jpg"
      },
      
    ]
    const northIndiaStates=[
      {
        stateName:"Ladakh",
        url:"https://www.holidify.com/images/bgImages/LADAKH.jpg"
      },
      {
        stateName:"Himachal Pradesh",
        url:"https://t4.ftcdn.net/jpg/04/70/76/19/360_F_470761995_6ru1SxTV2KCienxwZ5H2U8gZrqJH0fiI.jpg"
      },
      {
        stateName:"Uttarakhand",
        url:"https://static.toiimg.com/thumb/msid-98447982,width-748,height-499,resizemode=4,imgsize-168488/.jpg"
      },
      {
        stateName:"Kashmir",
        url:"https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc="
      },
      
    ]
    return(
        <>
        
        <div className='divForVideoHomePage'>
            <video ref={videoRef} autoPlay loop muted  className='HomePageVideo'>
                <source 
                // src="https://videos.pexels.com/video-files/2894891/2894891-uhd_2560_1440_24fps.mp4"
                 src="https://videos.pexels.com/video-files/26182248/11937325_2560_1440_60fps.mp4"
                // src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4" type="video/mp4"
                 />
            </video>
            
        </div>
        <div className='cardsDiv'>
               
        <main class="page-content">
          <div class="card">
            <div class="content">
              <h2 class="title">Paragliding </h2>
              <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
              <button class="btn">View Trips</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">Biking</h2>
              <p class="copy">Plan your next beach trip with these fabulous destinations</p>
              <button class="btn">View Trips</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">Cruise </h2>
              <p class="copy">It's the desert you've always dreamed of</p>
              <button class="btn">Book Now</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">Safari</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn">Book Now</button>
            </div>
          </div>
        </main>

        </div>

        {/* <div className=''> */}
        <div className='indianTravelActivitiesDiv'>
          <div className='indianTravelActivitiesDivinnerText row'>
            <h3>Indian Travel Activities In One Place</h3>
            <p>Click the images of the Regions below of your choice and select actrivities....</p>
            <h2>North-East India</h2>
          </div>
              <div id="carouselExampleInterval"  class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                  <div className='d-flex justify-content-center'> 
                    {northEastStates.slice(0,3).map((data)=>
                         <figure class="snip1177">
                          <img src={data?.url}/>
                          <div>
                            <h3>{data?.stateName}</h3>
                          </div><a href="#"></a>
                        </figure>
                    )}

                  </div>
                </div>
                <div class="carousel-item " data-interval="10000">
                  <div className='d-flex justify-content-center'> 
                  {northEastStates.slice(3,6).map((data)=>
                         <figure class="snip1177">
                         <img src={data?.url}/>
                         <div>
                           <h3>{data?.stateName}</h3>
                         </div><a href="#"></a>
                     </figure>
                    )}
                  </div> 
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>
              </div>
          </div>
          
           
             
      
        <div className='northIndiaModal'>
            <h2>North India</h2>
            <div id="carouselExampleInterval2"  class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-interval="5000000">
                  <div className='d-flex justify-content-center'> 
                    {northIndiaStates.slice(0,3).map((data)=>
                         <figure class="snip1177">
                          <img src={data?.url}/>
                          <div>
                            <h3>{data?.stateName}</h3>
                          </div><a href="#"></a>
                        </figure>
                    )}

                  </div>
                </div>
                <div class="carousel-item " data-interval="5000000">
                  <div className='d-flex justify-content-center'> 
                  {northIndiaStates.slice(3,6).map((data)=>
                         <figure class="snip1177">
                         <img src={data?.url}/>
                         <div>
                           <h3>{data?.stateName}</h3>
                         </div><a href="#"></a>
                     </figure>
                    )}
                  </div> 
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval2" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval2" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>
              </div>       

          
           
        </div>
       

        
        </>
       
    )
}