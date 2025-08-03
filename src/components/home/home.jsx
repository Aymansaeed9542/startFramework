import React from 'react';
import style from './home.module.css';
import img from "../../assets/avataaars.svg";
const Home = () => {
  return (
    <div className={`${style.home} text-center text-white d-flex flex-column justify-content-center align-items-center`}>
      <div className={`${style.avatar} w-100 d-flex justify-content-center`}>
        <img src={img} alt="Avatar" />
      </div>
      <h1>START FRAMEWORK</h1>
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <div className={`${style.line} me-3`}></div>
        <i className='fa-solid fa-star'></i>
        <div className={`${style.line} ms-3`}></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
};

export default Home;
