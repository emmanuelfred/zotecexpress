import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';
import slides from '../Assets/hero_image';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className="hero_slider_container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="hero_swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero_slide">
            <img src={slide.image} alt="" style={{order:slide.image_position}}/>
            <div className="slide_info" style={{order:slide.text_position}}>
              <div className="slide_text">
                <h2>{slide.text}</h2>
                <p> dolor sit amet consectetur adipisicing elit. Saepe vitae commodi adipisci ipsa quod suscipit.</p>
                <Link to="/shop">Explore more</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
