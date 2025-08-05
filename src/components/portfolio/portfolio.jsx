import React, { useState } from 'react'
import style from './portfolio.module.css';
import img from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';  
import img3 from '../../assets/port3.png';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const portfolioImages = [
    { src: img, alt: "Portfolio 1" },
    { src: img2, alt: "Portfolio 2" },
    { src: img3, alt: "Portfolio 3" },
    { src: img, alt: "Portfolio 4" },
    { src: img2, alt: "Portfolio 5" },
    { src: img3, alt: "Portfolio 6" }
  ];

  return (
    <div className={`${style.portfolio} d-flex align-items-center flex-column py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="display-4 fw-bold text-center mb-3">PORTFOLIO COMPONENT</h1>
            <div className='d-flex justify-content-center align-items-center mb-5'>
              <div className={`${style.line} me-3`}></div>
              <i className='fa-solid fa-star fs-4'></i>
              <div className={`${style.line} ms-3`}></div>
            </div>
            <div className="row g-4">
              {portfolioImages.map((image, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div 
                    className={`${style.portfolioItem} position-relative cursor-pointer`}
                    onClick={() => handleImageClick(image.src)}
                  >
                    <img 
                      src={image.src} 
                      className="w-100 rounded-3" 
                      alt={image.alt} 
                    />
                    <div className={`${style.overlay} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
                      <i className="fa-solid fa-plus text-white fs-1"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={`${style.modal} position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
          <div className={`${style.modalOverlay} position-absolute top-0 start-0 w-100 h-100`} onClick={closeModal}></div>
          <div className={`${style.modalContent} position-relative bg-white rounded-3 p-3`}>
            <button 
              className={`${style.closeButton} position-absolute top-0 end-0 btn btn-close m-2`}
              onClick={closeModal}
            ></button>
            <img 
              src={selectedImage} 
              className="w-100 h-100 object-fit-contain" 
              alt="Portfolio Modal" 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio;