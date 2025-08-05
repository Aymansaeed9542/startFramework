import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className='text-white'>
      <div className={`${style.footerContainer}`}>
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h2 className="h4 fw-bold mb-3">LOCATION</h2>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p className="mb-0">Clark, MO 65243</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h2 className="h4 fw-bold mb-3">AROUND THE WEB</h2>
            <div className="d-flex justify-content-center gap-2">
              <i className={`fab fa-facebook ${style.circleIcon}`}></i>
              <i className={`fab fa-twitter ${style.circleIcon}`}></i>
              <i className={`fab fa-linkedin ${style.circleIcon}`}></i>
              <i className={`fas fa-globe ${style.circleIcon}`}></i>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h2 className="h4 fw-bold mb-3">ABOUT FREELANCER</h2>
            <p className="mb-0">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className={`${style.footerBottom} p-3`}>
        <p className="mb-0 text-center">Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}

export default Footer;