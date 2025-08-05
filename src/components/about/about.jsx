import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <div
      className={`${style.about} d-flex justify-content-center align-items-center flex-column text-white py-5`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 className="display-4 fw-bold text-center mb-3">
              ABOUT COMPONENT
            </h1>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className={`${style.line} me-3`}></div>
              <i className="fa-solid fa-star fs-4"></i>
              <div className={`${style.line} ms-3`}></div>
            </div>
            <div className={`row justify-content-center ${style.content}`}>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <p className="mb-0">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-0">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
