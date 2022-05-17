import React from "react";

const Education = () => {
  return (
    <React.Fragment>
      <div id=" education" className="resume-section">
        <h3 className="mb-3">Education</h3>

        <div className="row content">
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Africa Leadership Program (ALX)</h4>
              <div className="dates">Feb 2022 - To Date</div>
            </div>
            <p>Software Engineering</p>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Jomo Kenyatta University of Agriculture and Technology</h4>
              <div className="dates">Sept 2018 - To Date</div>
            </div>
            <p>
              Bachelor of Science in Mathematics and Computer Science
            </p>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Kenya Institute of Software Engineering </h4>
              <div className="dates">August 2019 - June 2021</div>
            </div>
            <p>Certificate in Graphic Design</p>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Emobilis Mobile Technology Training Institute </h4>
              <div className="dates">Jan 2021 - May 2021</div>
            </div>
            <p>Certificate in Web Development</p>
          </div>

          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Pan-African Christian University </h4>
              <div className="dates">Jan 2018 - May 2018</div>
            </div>
            <p>Certificate in Youth Development</p>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Mary Mount Secondary School </h4>
              <div className="dates">Jan 2014 - Nov 2017</div>
            </div>
            <p>Kenya Certificate of Secondary Education – <em>Grade B+ </em></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Education;
