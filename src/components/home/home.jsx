import React from 'react';
import style from './home.module.css';
import img from "../../assets/avataaars.svg";

const Home = () => {
  return (
    <div className={`${style.home} text-center text-white d-flex flex-column justify-content-center align-items-center min-vh-100`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className={`${style.avatar} mx-auto mb-4 d-flex justify-content-center`}>
              <img src={img} alt="Avatar" className="img-fluid" />
            </div>
            <h1 className="display-4 fw-bold mb-3">START FRAMEWORK</h1>
            <div className='d-flex justify-content-center align-items-center mb-4'>
              <div className={`${style.line} me-3`}></div>
              <i className='fa-solid fa-star fs-4'></i>
              <div className={`${style.line} ms-3`}></div>
            </div>
            <p className="fs-5 mb-0">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
