import React, { useContext } from 'react';

import { DoraContext } from '../Context';

const Experience = () => {
  const { userInfo } = useContext(DoraContext);

  return (
    <section className="experience-section" id="about">
      <div className="container">
      {/* Experience Title */}
     <div className="section_title wow fadeInUp center">
        <p>Why Choose Me</p>
        <h2>My Experience Area</h2>
     </div>
      <div className="experience-items wow fadeInUp">
       
             {userInfo && userInfo.skills.map((skill, i) => (
           <div className='experience-item'  key={i}> 
              
             <div className="experience-info">
              <p>{skill.name}</p>
              <p>{skill.percentage}</p>
             </div>
             <div className="progress-line" data-percent="90%">
              <span />
            
          </div>
          </div>
        ))}
        
       </div>
      </div>
    </section>
  );
};
export default Experience;
