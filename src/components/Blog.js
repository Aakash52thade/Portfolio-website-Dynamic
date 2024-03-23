
import React, { useContext } from 'react';

import { DoraContext } from '../Context';

const Blog = () => {
  const { userInfo } = useContext(DoraContext);
  return (
    <section className="timeline-section" id="blog">
      <div className="timeline-container">
        {/* Blog Titel */}
        <div className="timeline-title">
          <h2>Work Experience</h2>
         
        </div>
        
        <div className='timeline-experience'>
          {userInfo && userInfo.timeline.map((data, i) => (
            <div  key={i} className='timeline-space'>
              <div>
              <div >
               <div className='timeline-company'>
                   <h3>{data.company_name}</h3>
               </div>
               <div className='timeline-job'> 
                 <h3>{data.jobTitle}</h3>
                 <div>
                  <p><strong>StartDate</strong> : {data.startDate}</p>
                  <p><strong>EndDate</strong> : {data.endDate}</p>
                 </div>
              </div>
               </div>

              <div className='timeline-summary'>{data.summary}</div>
              <div className='timeline-location'>{data.jobLocation}</div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Blog;
