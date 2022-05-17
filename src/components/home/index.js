import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/LESLEY_KAMAMO.pdf";
import ME from "../../assets/me.jpg";
import Header from "../../layouts/header";
import Typical from "react-typical";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <div className="container">
          <div className="down_arrow ">
            <a href="#contact" className="btn">
              <i class="bx bx-down-arrow-alt"></i>
            </a>
          </div>
          <div className="row p-2 ">
            <div className="col-sm-12 col-lg-6 p-4  home_info text-light">
              <div className=" p-2 mb-3">
                <h5>Hello, I'm</h5>
                <h2>Lesley Wanjiku</h2>
                <h5>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "FrontEnd Developer ",
                      1500,
                      "React Developer",
                      1500,
                      "Graphic Designer ",
                      1500,
                    ]}
                  />
                </h5>
              </div>
              <div className="home_downloads mb-3">
                <a href={CV} download className="btn">
                  Download CV
                </a>
                <a href="#contact" className="btn-outline">
                  Let's talk
                </a>
              </div>
              <div className="home_socials">
                <a href="https://github.com/Lesley-w19" target="_blank">
                  <i class="bx bxl-github "></i>
                </a>

                <a href="https://linkedin.com" target="_blank">
                  <i class="bx bxl-linkedin-square "></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 p-2 d-flex align-items-center justify-content-center">
              <div className="home_image ">
                <img src={ME} alt="my-image" className="mx-auto" />
              </div>
            </div>
          </div>

          <div className="row">
            <Header />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
