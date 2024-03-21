import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import Isotope from "isotope-layout";
import { DoraContext } from "../Context";

const PortfolioIsotope = () => {
  const { userInfo, projects } = useContext(DoraContext); 
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback((key) => () => {
    setFilterKey(key);
  }, []);

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (

    

    <div className="work-isotope-filter">
      <ul className="works-list-ul wow fadeInUp">
        
        <li className={`c-pointer ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")}>All</li>
        {projects && [...new Set(projects.map(project => project.category))].map((category, index) => (
          <li key={index} className={`c-pointer ${activeBtn(category)}`} onClick={handleFilterKeyChange(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>

      <div className="works-row wow fadeInUp">
        {userInfo && userInfo.projects.map((project, index) => (
          <div key={index} className={`works-col ${project.category}`}>
            <a href={project.link}>
              <img src={project.image.url} alt="project_img" />
            </a>
            <div className='tech'>
               {userInfo && project.techStack.map((tech, i) => (
                 <div className="tech-item" key={i}>
                     {tech}
                   </div>
                 ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioIsotope;
