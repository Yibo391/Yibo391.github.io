// src/components/PhotoCarousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PhotoCarousel = () => {
  const photos = [
    { id: 1, src: '/1.jpg', alt: 'A serene beach scene' },
    { id: 2, src: '/2.jpg', alt: 'A bustling cityscape at night' },
    { id: 3, src: '/3.jpg', alt: 'A quiet mountain landscape' },
    // Add more photos as needed
  ];

  return (
    <div className="photo-carousel-container">
      <h2 className="text-center mt-4 mb-3">Featured Photos</h2>
      <p className="text-center mb-4">Explore a variety of beautiful and inspiring locations through our curated photo gallery.</p>
      <Carousel id="photoCarousel">
        {photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img
              className="d-block w-100"
              src={photo.src}
              alt={photo.alt}
            />
            <Carousel.Caption>
              <p>{photo.alt}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
