import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderClient() {

    const [logo, setLogo] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 6500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    useEffect(() => {
        Promise.all([    
            axios.get('https://symfony.pandacom.be/api/marques'),
            ])
            .then(([logoResponse]) => {       
                setLogo(logoResponse.data['hydra:member']);   
                })
            .catch(error => {
                console.error('Error:', error);
                });
        }, []);
        

    return (
      <div className="sliderMarque"> 
      <Slider {...settings}>
        {logo.map(logoimg =>(
            <div key={logoimg.id} className="marque" >
                 <img src={"https://symfony.pandacom.be/images/" + logoimg.images} alt="" />
            </div>
        ))}
        </Slider>
      </div>
    );
  }

  export default SliderClient;