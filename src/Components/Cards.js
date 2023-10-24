
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";





export default function Cards(trailData) {
    
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      //lat + lon are lat and longitude of traisl
    
  return (

    <div className = "nature-bg w-full h-[450px] mb-20 mt-20" >
     
      <div className = "w-9/10">
        <Slider {...settings}>
        {trailData.trailData.map((trail, index) => 
                    <div className = "bg-white h-[350px] text-black  mt-10 bordered" key ={index} > 
                    <div className = "dk-green flex justify-center items-center h-[50px]">
                    <h2 className = "centered signature text-white ">{trail.name}</h2>
                    </div> 
                    <div className = "flex flex-col justify-center items-center gap-4 p-4">
                      <p className="font-bold">{trail.city}, {trail.state}</p>
                      <p className="small-text" >{trail.description}</p>
                      <p className="small-text" >{trail.directions}</p>

                    </div>
                </div>
                )}
        </Slider>
      </div>
    </div>)
}
