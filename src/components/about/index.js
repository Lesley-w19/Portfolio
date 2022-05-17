import React from "react";
import ME from "../../assets/mee.jpg"

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="about">
          <div className="container">
          <div className="row mb-3">
          <h6 className="text-center">Get to know</h6>
          <h2>about me</h2>
          <div className="underline"></div>
        </div>
        <div className="row p-4 about-content">
          <div className=" col-lg-6 about-image mb-3">
              <img src={ME} alt="my image" />
          </div>
          <div className="row about-cards mb-3 mx-auto">
            <div className="col-lg-5 card">
            <i class='bx bxs-award mb-3'></i>
              <h5>Experience</h5>
              <small>1+ year </small>
            </div>
            <div className="col-lg-5 card">
            <i class='bx bxs-folder-open mb-3'></i>
              <h5>Projects</h5>
              <small>10+ projects </small>
            </div>
           <div className="col-lg-12 mt-4 mb-3">
              <p className="about-info">
            My name is Lesley Wanjiku Kamamo. I am currently a 4<sup>th</sup> year student at Jomo Kenyatta University of Agriculture and Technology, pursuing a Bachelor of Science degree in <em>Mathematics and Computer Science.</em> I am passionate in what I do and always aim to do my best. <br/> I'm a Christian. <br/> I love reading, swimming and volunteering. In addition, I love the concept of visual design, in terms of websites, posters...
            <br/>I am a team player and enjoy working with others.
          </p>  
           </div>
         
       
          <div className="col-lg-4">
            <a href="#contact" className="btn">
              Contact me
            </a>
        
        </div>
          </div>
        </div>    
          </div>
        
       
        
      </section>
    </React.Fragment>
  );
};
export default About;
