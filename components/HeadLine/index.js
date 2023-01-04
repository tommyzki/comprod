import { Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './HeadLine.module.scss';

export default function HeadLine() {

  return (
    <div id="headline" className={styles.container} >
      <div className={styles.bodyContainer}>
        <Image
          src="/image/HeadlineText.svg"
          alt="HeadlineText"
          width={840}
          height={240}
        />
        <div className={styles.headerSubTitle}>
          Your idea, your product, your business,<br/> We design, build, and improve it.
        </div>
        <div>
            <a href="#contact"><Button variant="primary" className={styles.buttonPadding}><img className='leftIcon' src="/icon/chatbubble.svg" alt="add item" width="30"/>Let&apos;s Talk</Button></a>
            <a href="#review"><Button variant="primary-text" className={styles.buttonPadding}>Explore<img className='rightIcon' src="/icon/arrowdown.svg" alt="add item" width="30"/></Button></a>
        </div>
      </div>
    </div>
  );
}
