/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import styles from "./WeAreSpectacle.module.scss";
import { images } from "../../public/data/images.ts";

export default function WeAreSpectacle() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  // const nextIndex = (index + 1) % images.length;
  // const nextImage = images[nextIndex] || currentImage;
  // const prevIndex = (index + images.length - 1) % images.length;
  // const prevImage = images[prevIndex] || currentImage;

  // eslint-disable-next-line no-shadow
  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  // const handleMovePrev = () => setIndex(prevIndex);
  // const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className='container'>
      <div className={styles.headerTitle}>
        A little bit about <br/> our coffee-powered team.
      </div>
      <div className={styles.headerSubTitle}>
        We fuel our creativity and productivity with a steady stream of caffeine, and it shows in the quality of our work. Our dedicated and skilled team are always ready to tackle any project. From crafting beautiful designs to developing innovative applications, we have the expertise and drive to bring your imagination to life.
      </div>
      <div className={styles.gallery}>
        {images.map((image, idx)=>(
        // eslint-disable-next-line react/no-array-index-key
        <figure key={idx} style={image.styles} className={styles.figureFix}>
          <img
            className={ styles.gallery__img }
            src={image.src}
            alt="First slide"
            onClick={() => handleClick(idx)}
            onKeyDown={() => handleClick(idx)}
            loading="lazy"
          />
        </figure>

        ))}
        
      </div>
      {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.src}
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
            mainSrcThumbnail={currentImage.src}
            onCloseRequest={handleClose}
            // nextSrc={nextImage.src}
            // nextSrcThumbnail={nextImage.src}
            // prevSrc={prevImage.src}
            // prevSrcThumbnail={prevImage.src}
            // onMovePrevRequest={handleMovePrev}
            // onMoveNextRequest={handleMoveNext}
          />
        )}
    </div>
  );
}
