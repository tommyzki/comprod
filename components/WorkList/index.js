/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useEffect, useState } from "react";
import Lightbox from "react-18-image-lightbox";
import styles from "./WorkList.module.scss";
import { worklists } from "../../public/data/worklists.ts";
import AppContext from '../../components/AppContext/AppContext';
import Slide from 'react-reveal';

export default function WeAreSpectacle() {
  const context = useContext(AppContext);

  useEffect(()=>{
    context.setThemeContext("white");
  },[])


  const [index1, setIndex1] = useState(-1);
  const [index2, setIndex2] = useState(-1);

  const currentWork = worklists[index1];
  
  // eslint-disable-next-line no-shadow
  const handleClick = (index1, index2) => {setIndex1(index1);setIndex2(index2);}
  const handleClose = () => {setIndex1(-1); setIndex2(-1);}

  return (
    <div className='container'>
      <div className={styles.headerTitle}>
        The collaboration we do <br/>and the product we build.
      </div>
      <div className={styles.headerSubTitle}>
        We approach every project with professionalism and dedication, but we also enjoy building relationships with our clients and approach our work with a friendly, collaborative attitude. Take a look around and don&rsquo;t hesitate to get in touch if you have any questions or would like to work with us.
      </div>

        {worklists.map((work, idx1)=>(
            // eslint-disable-next-line react/no-array-index-key
            <div id={work.id} key={idx1} className={styles.workContainer}>
              <Slide bottom>
                <div className={styles.gallery}>
                    {work.images.map((image, idx2)=>(

                        // eslint-disable-next-line react/no-array-index-key
                        <figure key={idx2} style={image.styles} className={styles.figureFix} >
                        <img
                            className={ styles.gallery__img }
                            src={image.src}
                            alt="First slide"
                            draggable="false"
                            onClick={() => handleClick(idx1,idx2)}
                            onKeyDown={() => handleClick(idx1,idx2)}
                            loading="lazy"
                        />
                        </figure>
                    ))}
                </div>
                <div className={styles.workTitle}>
                    {work.project_name}
                </div>
                <div className={styles.workSubTitle}>
                    {work.project_detail}
                </div>
              </Slide>
            </div>
        ))}

        {!!currentWork && (
          <Lightbox
            mainSrc={currentWork.images[index2].src}
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
            mainSrcThumbnail={currentWork.images[index2].src}
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
