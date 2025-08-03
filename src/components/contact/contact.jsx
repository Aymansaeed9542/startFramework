import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div
      className={`${style.contact} d-flex r align-items-center flex-column `}
    >
      <h1>CONTACT SECTION</h1>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className={`${style.line} me-3 `}></div>
        <i className="fa-solid fa-star"></i>
        <div className={`${style.line} ms-3`}></div>
      </div>
      <div className={`${style.form}`}>
        <form className="container">
          <div className="inputFields d-flex flex-column">
            <input type="text" className="w-100" placeholder="userName" />
            <input type="text" className="w-100" placeholder="userAge" />
            <input type="text" className="w-100" placeholder="userEmail" />
            <input type="text" className="w-100" placeholder="userMessage" />
          </div>
          <div className="button">
            <button className="btn btn-success mt-3">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
