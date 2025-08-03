import React from 'react'
import style from './portfolio.module.css';
import img from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';  
import img3 from '../../assets/port3.png';

const Portfolio = () => {
  return (
    <div className={`${style.portfolio} d-flex r align-items-center flex-column `}>
            <h1>PORTFOLIO COMPONENT</h1>
                  <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className={`${style.line} me-3 `}></div>
                    <i className='fa-solid fa-star'></i>
                    <div className={`${style.line} ms-3`}></div>
                  </div>
                  <div className="container">
                  <div className="row g-5 mb-5">
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img2} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img3} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img2} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="">
                      <img src={img3} className="w-100 rounded-3 " alt="Portfolio " />
                    </div>
                    </div>
                  </div>
    </div>
    </div>
  )
}

export default Portfolio;