import { Row, Col, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './HeadLine.module.scss';

export default function HeadLine() {

  return (
    <div id="headline" className={styles.container} >
      <Container className={styles.bodyContainer}>
        <Row>
          <Col className={styles.headerTitle64}>
            <Image
              src="/image/HeadlineText.svg"
              alt="HeadlineText"
              viewBox="0 0 1500 1538"
              width={708}
              height={200}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.headerSubTitle}>
              Your idea, your product, your business, We design, build, and improve it.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#contact"><Button variant="primary" className={styles.buttonPadding}><img className='leftIcon' src="/icon/chatbubble.svg" alt="add item" width="30"/>Let&apos;s Talk</Button></a>
            <a href="#review"><Button variant="primary-text" className={styles.buttonPadding}>Explore<img className='rightIcon' src="/icon/arrowdown.svg" alt="add item" width="30"/></Button></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
