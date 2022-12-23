import { Row, Col, Button, Carousel } from 'react-bootstrap'
import styles from './Team.module.scss';

export default function Team() {
  return (
    <div id='about' className={styles.container}>
        <Row>
            <Col className='headerTitle'>
                People in Concise
            </Col>
        </Row>

        <Row className='m-5'>
            <Col>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className=""
                            src="/image/image-placeholder1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img
                            className=""
                            src="/image/image-placeholder2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=""
                            src="/image/image-placeholder3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>

        <Row>
            <Col className={styles.subTitle}>
                Our coffee-powered team who are eager to build the product you imagine it to be.
            </Col>
        </Row>

        <Row>
            <Col>
                <Button variant="primary-text" className={styles.buttonPadding}>Learn more about us<img className='rightIcon' src="/icon/arrowright.svg" alt="add item" width="30"/></Button>
            </Col>
        </Row>

    </div>
  )
}
