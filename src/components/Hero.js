import React, { useContext } from 'react';

import { DoraContext } from '../Context';

const Hero = () => {
  const { userInfo } = useContext(DoraContext);
  
   

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi I am  <br/> <h1>{userInfo ? userInfo.about.name: ""}</h1></span>
            <span>{userInfo ? userInfo.about.title: ""}</span>
            <p>I am  {userInfo ? userInfo.about.description : ""}</p>
            
            <p className='subTitle'>{userInfo ? userInfo.about.subTitle : ""}</p>
            
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
