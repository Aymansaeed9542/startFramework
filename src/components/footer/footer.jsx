import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className='text-white'>
      <div className={style.footerContainer}>
        <div>
          <h2>LOCATION</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div>
          <h2>AROUND THE WEB</h2>
          <i className={`fab fa-facebook ${style.circleIcon}`}></i>
          <i className={`fab fa-twitter ${style.circleIcon}`}></i>
          <i className={`fab fa-linkedin ${style.circleIcon}`}></i>
          <i className={`fas fa-globe ${style.circleIcon}`}></i>
        </div>
        <div><h2>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div className={`${style.footerBottom} p-3`}><p>Copyright © Your Website 2021</p></div>
    </footer>
  )
}

export default Footer;