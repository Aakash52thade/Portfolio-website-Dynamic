import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import React, { useContext } from 'react';

import { DoraContext } from '../Context';

const Service = () => {

  const { userInfo } = useContext(DoraContext);
 

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
              {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
          
            {userInfo && userInfo.services.map((service, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="service-item">
                <h1>{service.name}</h1>
                <div className="service-item-content">
                <span className={`service-item-logo service-item-logo-cont-${service.id}`}>
                 <img className="ser-img" src={service.image.url} alt="service" />
                </span>
               <div className="services-price">
                <div className="services">{service.charge}</div>
               </div>
               <div className="service-item-info">
                 <h4>{service.desc}</h4>
               </div>
               </div>
           </div>
         </SwiperSlide>
         ))}
              
          </Swiper>
         
        </div>
      </div>
    </section>
  );
};
export default Service;



