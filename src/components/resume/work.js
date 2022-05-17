import React from "react";

const Work = () => {
  return (
    <React.Fragment>
      <div id="work" className="resume-section">
        <h3 className="mb-3">Work</h3>

        <div className="row content">
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Junior React Developer </h4>

              <div className="dates">October 2021 – Jan 2022 </div>
            </div>
            <div>
              <h5 className="mb-3">ByteCity Inc, Software Company.</h5>
              <h6>Duties and Responsibilities</h6>
              <p>Front-end Developer with ReactJs</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="head">
              <h4>Census Enumerator </h4>

              <div className="dates">August 2019 </div>
            </div>
            <div>
              <h5 className="mb-3">Kenya National Bureau of Statistics (KNBS) </h5>
              <h6 >Duties and Responsibilities</h6>
              <p>Inquiring and obtaining data for the census survey sheets</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Work;
