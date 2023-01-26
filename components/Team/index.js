/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button } from 'react-bootstrap'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./arrow";
import { homeimages } from "../../public/data/images.ts";
import Link from 'next/link'
import styles from './Team.module.scss';
import useDrag from './useDrag.ts';

export default function Team() {

    const { dragStart, dragStop, dragMove } = useDrag();

    const handleDrag = function (_a) {
        const {scrollContainer} = _a;
        return function (ev) {
            return dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff;
                }
            });
        };
    };

    return (
    <div className='container' id='about'>
        <div className={['allCenter', styles.maxContainer].join(" ")}>
            <div className='headerTitle'>
                About our team
            </div>
            <div className='headerText'>
                Our coffee-powered team who are eager to build the product you imagine it to be.
            </div>
        </div>
        
        <div onMouseLeave={dragStop}>
            <ScrollMenu  
                LeftArrow={LeftArrow} 
                RightArrow={RightArrow}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                // eslint-disable-next-line react/jsx-no-bind
                onMouseMove={handleDrag}
                id='slider' 
            >

                {homeimages.slice(0, 8).map((image, idx)=>(
                    // eslint-disable-next-line react/no-array-index-key
                    <img
                        key={idx}
                        className={ styles.imageScroll }
                        src={image.src}
                        alt={"aboutus" + idx}
                        draggable="false"
                    />
                ))}
            </ScrollMenu>
        </div>

        <div className={styles.subTitle}>
            <Link href="/about-us">
                <Button variant="primary-text" className={styles.buttonPadding}>Learn more about us<img className='rightIcon' src="/icon/arrowright.svg" alt="add item" width="30"/></Button>
            </Link>
        </div>
    </div>
  )
}
