/*
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import './HeroSlider.css';

import slide1 from '../Assets/resturant_3.jpg';
import slide2 from '../Assets/vegi.jpeg';
import slide3 from '../Assets/direct.jpg';
import slide4 from '../Assets/factury.jpg';

const slides = [
  { image: slide1, text: "Experience the Future of Shopping" },
  { image: slide2, text: "Shop Smart, Live Better" },
  { image: slide3, text: "Seamless Shopping, Just for You" },
  { image: slide4, text: "Seamless Shopping, Just for You" }
];
const slides = [
  { image: pic1 , image_position: 1 },
  { image: pic2 , image_position: 2 },
  { image: pic3 , image_position: 1 },
  { image: pic4 , image_position: 2 }
];
const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="hero_swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="hero_slide">
          <div className="slide_content">
            <img src={slide.image} alt="Hero Slide" className="slide_image" />
            <div className="overlay"></div>
            <div className="slide_text">{slide.text}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
*/