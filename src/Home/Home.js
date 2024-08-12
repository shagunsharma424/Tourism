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
        url:"/meghalya.jpg"
      },
      {
        stateName:"Nagaland",
        url:"/Himachal.jpg"
      },
      {
        stateName:"Arunachal Pradesh",
         url:"/arunachal.jpg"
      },
      {
        stateName:"Assam",
        url:"/assam.jpg"
      },
      // {
      //   stateName:"Manipur",
      //   url:"https://www.thestatesman.com/wp-content/uploads/2021/07/QT-Manipur.jpg"
      // },
      // {
      //   stateName:"Nagaland",
      //   url:"/Himachal.jpg"
      // },
      
    ]
    const northIndiaStates=[
      {
        stateName:"Ladakh",
        url:"/Ladakh.jpg"
      },
      {
        stateName:"Himachal Pradesh",
        url:"/Himachal.jpg"
      },
      {
        stateName:"Uttarakhand",
       url:"/Himachal.jpg"
      },
      {
        stateName:"Kashmir",
       url:"/Kashmir.jpg"
      },
      
    ]

    const activitiesConst=[
      {
        name:"Paragliding",
        url:"/Paraglidingbooking.jpg"
      },
      {
        name:"Biking",
        url:"/bike.jpg"
      },
      {
        name:"River Boating",
         url:"/Boating.jpeg"
      },
      {
        name:"Safari",
        url:"/safaribooking.png"
      },
      {
        name:"Rafting",
         url:"/Rafting.jpg"
      },
      {
        name:"Scooba diving",
         url:"/scuba.png"
      },
      {
        name:"Fishing",
         url:"/fishing.jpeg"
      },
      {
        name:"Zip Lining",
         url:"/Ziplining.jpg"
      },
      
    ]

    return(
        <>
        
        {/* <div className='divForVideoHomePage'>
            <video ref={videoRef} autoPlay loop muted  className='HomePageVideo'>
                <source 
                // src="https://videos.pexels.com/video-files/2894891/2894891-uhd_2560_1440_24fps.mp4"
                 src="https://videos.pexels.com/video-files/26182248/11937325_2560_1440_60fps.mp4"
                // src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4" type="video/mp4"
                 />
            </video>
            
        </div> */}
        <div className='backgrounImageFirst'>
            <img src="./HomePage/timerLineImage.jpg"/>
        </div>
        <div className='cardsDiv'>          
          <div class="row p-0 m-0">
            {/* <div class="card-holder"> */}
            {
              activitiesConst.map((item)=>
                <div class="col-lg-3 col-12 card border-0">
                <img class="card-img-top m-auto" src={`./HomePage${item?.url}`} alt="Card image cap"/>
                <div class="card-body pt-3">
                  <h4 class="card-title"><b>{item?.name}</b></h4>
                </div>
                </div>
              )
            }
         </div>
        </div>

        {/* <div className=''> */}
        <div className='indianTravelActivitiesDiv'>
          <div className='indianTravelActivitiesDivinnerText row'>
            <h3>Indian Travel Activities In One Place</h3>
            {/* <p>Click the images of the Regions below of your choice and select actrivities....</p> */}
            
          </div>
          </div>
          <h2 className='w-100'>North-East India</h2>
          {/* <hr className='ml-4 mr-4'></hr> */}
          <div className='row p-0 m-5 cardsDiv2 justify-content-start'> 
                    {northEastStates.map((data)=>
                        //  <figure class="snip1177">
                        //   <img src={data?.url}/>
                        //   <div>
                        //     <h3>{data?.stateName}</h3>
                        //   </div><a href="#"></a>
                        // </figure>
                         <div class="col-lg-4 card border-0">
                         <img class="card-img-top m-auto" src={`./HomePage${data?.url}`}  alt="Card image cap"/>
                         <div class="card-body pt-3">
                           <h4 class="card-title"><b>{data?.stateName}</b></h4>
                         </div>
                         </div>
                    )}

          </div>
          
           
             
      
        <div className='northIndiaModal ml-0 mr-0'>
            <h2>North India</h2>
            {/* <hr className='ml-4 mr-4'></hr> */}
            <div className='row p-0 m-5 cardsDiv2 justify-content-around'> 
                    {northIndiaStates.slice(0,3).map((data)=>
                         <div class="col-lg-4 card border-0">
                          <img class="card-img-top m-auto" src={`./HomePage${data?.url}`} alt="Card image cap"/>
                          <div class="card-body pt-3">
                           <h4 class="card-title"><b>{data?.stateName}</b></h4>
                         </div>
                        </div>
                    )}

            </div> 
        </div>
       

        
        </>
       
    )
}