import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div
      className={`${style.contact} d-flex align-items-center flex-column py-5`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 className="display-4 fw-bold text-center mb-3">
              CONTACT SECTION
            </h1>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className={`${style.line} me-3`}></div>
              <i className="fa-solid fa-star fs-4"></i>
              <div className={`${style.line} ms-3`}></div>
            </div>
            <div className={`${style.form}`}>
              <form>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input
                      type="text"
                      className={`form-control ${style.inputField}`}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input
                      type="text"
                      className={`form-control ${style.inputField}`}
                      placeholder="User Age"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className={`form-control ${style.inputField}`}
                      placeholder="User Email"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <input
                      type="text"
                      className={`form-control ${style.inputField}`}
                      placeholder="User Message"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-success btn-lg px-4">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
