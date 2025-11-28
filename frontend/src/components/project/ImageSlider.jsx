import React, { useContext } from 'react'
import Slider from "react-slick";
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//slick end

import { StoreContext } from '../../context/StoreContext';


const ImageSlider = ({images}) => {
    const {backend_url} = useContext(StoreContext);
    // console.log(images)
    const {cover_image,screenshots} = images;
    console.log(cover_image);
    console.log(screenshots);
    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
             {screenshots.map((image)=>{
                return <div>
                <img src={`${backend_url}${image}`} alt={`${backend_url}${image}`} className='w-full h-[180px]  rounded-2xl' />
              </div>
            })} 
          
         
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div> */}
        </Slider>
      );
    }

export default ImageSlider;