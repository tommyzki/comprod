/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button } from 'react-bootstrap'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
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
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                // eslint-disable-next-line react/jsx-no-bind
                onMouseMove={handleDrag}
                id='slider' 
            >
                <img
                    className={ styles.imageScroll }
                    src="/image/image-placeholder1.png"
                    alt="First slide"
                    draggable="false"
                />
                <img
                    className={ styles.imageScroll }
                    src="/image/image-placeholder2.png"
                    alt="First slide"
                    draggable="false"
                />
                <img
                    className={ styles.imageScroll }
                    src="/image/image-placeholder3.png"
                    alt="First slide"
                    draggable="false"
                />
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
