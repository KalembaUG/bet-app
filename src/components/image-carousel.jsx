import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/_Kingkong.PNG';
import img2 from '../assets/_welocomeoffer.PNG';
import img3 from '../assets/_accacopy.PNG';
import img4 from '../assets/_freebetcopycopy.PNG'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-advance to the next image after some time
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back to the first image
      }
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      <Carousel
        showIndicators={false}
        showStatus={false}
        selectedItem={currentIndex}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={80} // Adjust as needed
        showArrows={true} // Show navigation arrows
      >
        {images.map((image, index) => (
          <div className='carousal-image-div' key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export const Images = [img1,img2,img3,img4]

export default ImageCarousel;


