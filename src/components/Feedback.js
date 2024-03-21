import React, { useContext } from 'react';
import { DoraContext } from '../Context';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; // Import Swiper styles

const Feedback = () => {
  const { userInfo } = useContext(DoraContext);



return (
  <div className="feedback-section">
    <div className="feedback-section-title-cont">
      <h1 className="section_title">Testimonials</h1>
      
    </div>
    <div className="feedback-center">
      {userInfo && userInfo.testimonials.map((testi, i) => (
        <Swiper key={i} navigation pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className="feedback-item">
              <div className="feedback-info-cont">
              <div className='feedback-active-img'> 
                  <img  src={testi.image.url}/>
                </div>
               <div>
               <h2>{testi.name}</h2>
                <h4 className="feedback-txt">{testi.position}</h4>
                <div className="feedback-txt">{testi.review}</div>
               </div>
              </div>  
             
            </div>
          </SwiperSlide>
        </Swiper>
      ))}
    </div>
  </div>
);
};

export default Feedback;
