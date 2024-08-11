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
      // {
      //   stateName:"Manipur",
      //   url:"https://www.thestatesman.com/wp-content/uploads/2021/07/QT-Manipur.jpg"
      // },
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

    const activitiesConst=[
      {
        name:"Paragliding",
        url:"https://images.pexels.com/photos/10762320/pexels-photo-10762320.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name:"Biking",
        url:"https://images.pexels.com/photos/3907152/pexels-photo-3907152.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },
      {
        name:"Cruise",
        url:"https://images.pexels.com/photos/25451592/pexels-photo-25451592/free-photo-of-passenger-ship-in-bay-among-mountains.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name:"Safari",
        url:"https://images.pexels.com/photos/5745374/pexels-photo-5745374.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <div class="row p-0 m-0">
            {/* <div class="card-holder"> */}
            {
              activitiesConst.map((item)=>
                <div class="col-lg-3 col-12 card border-0">
                <img class="card-img-top" src={item?.url} alt="Card image cap"/>
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
                         <img class="card-img-top" src={data?.url} alt="Card image cap"/>
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
                          <img class="card-img-top" src={data?.url} alt="Card image cap"/>
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