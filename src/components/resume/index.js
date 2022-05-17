import React, { useState } from "react";
import Education from "./education";
import Interests from "./interests";
import Projects from "./projects";
import Skills from "./skills";
import Work from "./work";

const Resume = () => {
  const [active, setActive] = useState("education");
  return (
    <React.Fragment>
      <section id="resume">
        <div className="container">
          <div className="row">
            <h2>resume</h2>
            <div className="underline mb-3"></div>
          </div>

          <div className="row resume-content">
            <div className="col-sm-12 col-lg-3 resume-nav">
              <ul>
                <li>
                  <a
              
                    onClick={() => setActive("education")}
                    className={active === "education" ? "active" : ""}
                  >
                    <i class="bx bxs-graduation"></i>{" "}
                    <span className="text-center">education</span>
                  </a>
                </li>
                <li>
                  <a
                 
                    onClick={() => setActive("work")}
                    className={active === "work" ? "active" : ""}
                  >
                    <i class="bx bxs-notepad"></i>{" "}
                    <span className="text-center">work history</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    
                    onClick={() => setActive("skills")}
                    className={active === "skills" ? "active" : ""}
                  >
                    <i class="bx bx-code-block"></i>{" "}
                    <span className="ml-2">skills</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    
                    onClick={() => setActive("projects")}
                    className={active === "projects" ? "active" : ""}
                  >
                    {" "}
                    <i class="bx bxs-folder-open"></i>{" "}
                    <span className="text-center">projects</span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    
                    onClick={() => setActive("interests")}
                    className={active === "interests" ? "active" : ""}
                  >
                    {" "}
                    <i class="bx bxs-palette"></i>{" "}
                    <span className="text-center">interests</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 resume-info">
              <div>
                {
                  active === 'education' ? <Education /> : active === 'work' ?  <Work /> : active === 'skills' ?   <Skills /> : active === 'projects' ? <Projects /> : active === 'interests' ? <Interests /> : <Education /> 
                }
                
               
              
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Resume;
