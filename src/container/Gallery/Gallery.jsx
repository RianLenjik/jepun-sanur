import { React, useRef, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import ImagePopup from './ImagePopup';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05,
images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10, images.gallery11,
images.gallery12, images.gallery13, images.gallery14, images.gallery15, images.gallery16, images.gallery17, images.gallery18];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300
    }else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery app__bg flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Memories" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Quis Fugit Atque Explicabo, At Temporibus, Rem Officiis Perspiciatis Dolore Iusto Numquam Repudiandae Eligendi Dolorem Aliquid Expedita Illum Assumenda Neque Debitis Mollitia.</p>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image_${index + 1}`}>
              <img src={image} alt="gallery" onClick={() => setExpandedImage(image)}/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
        {/* Render the image popup when an image is clicked */}
        {expandedImage && <ImagePopup imageUrl={expandedImage} onClose={() => setExpandedImage(null)} />}
      </div>
    </div>
  );
}

export default Gallery;
