import React from 'react'
import style from './about.module.css';

const About = () => {
  return (
    <div className={`${style.about} d-flex justify-content-center align-items-center flex-column text-white`}>
      <h1>ABOUT COMPONENT</h1>
            <div className='d-flex justify-content-center align-items-center mb-3'>
              <div className={`${style.line} me-3`}></div>
              <i className='fa-solid fa-star'></i>
              <div className={`${style.line} ms-3`}></div>
            </div>
            <div className={`d-flex flex-row justify-content-center align-items-center ${style.content} `}>
              <div><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p></div>
              <div><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p></div>
            </div>
    </div>
  )
}

export default About;