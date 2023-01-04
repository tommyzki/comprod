import { Row, Col, Image } from 'react-bootstrap'
import { useContext } from 'react';
import AppContext from "../AppContext/AppContext"
import styles from './HowWe.module.scss';

export default function HowWe() {
    const context = useContext(AppContext);

  return (
    <div className='container'>
        <div className={['allCenter', styles.maxContainer].join(" ")}>
            <div className={context.themeContext === "white" ? 'headerTitle' : 'headerTitleBlack'}>
                How we do it?
            </div>
            <div className={context.themeContext === "white" ? 'headerText' : 'headerTextBlack'}>
                We translate your vision through our design and codes to craft the ideal product that will help you grow your business.
            </div>
        </div>
        
        <Row className={styles.pointTitle}>
            <Col md={6} xl={3}>
                <Image
                    src="/icon/ideate.svg"
                    width={228}
                    height={32}
                    className={styles.checkIcon}
                />
                <p className={styles.whytitle}>
                    Ideate
                </p>
                <div className={styles.whytext}>
                    We like to break down the problems and explore every possible solutions through in-depth research so we can find an optimal one.
                </div>
            </Col>
            <Col md={6} xl={3}>
                <Image
                    src="/icon/design.svg"
                    width={228}
                    height={32}
                    className={styles.checkIcon}
                />
                <p className={styles.whytitle}>
                    Design
                </p>
                <div className={styles.whytext}>
                    Design is an important part in our process making a product, to simplify something complex is our goal.
                </div>
            </Col>
            <Col md={6} xl={3}>
                <Image
                    src="/icon/build.svg"
                    width={228}
                    height={32}
                    className={styles.checkIcon}
                />
                <p className={styles.whytitle}>
                    Build
                </p>
                <div className={styles.whytext}>
                    Using the latest technologies, we build your product efficiently with our skill and making sure it runs smoothly.
                </div>
            </Col>
            <Col md={6} xl={3}>
                <Image
                    src="/icon/improve.svg"
                    width={32}
                    height={32}
                    className={styles.checkIcon}
                />
                <p className={styles.whytitle}>
                    Improve
                </p>
                <div className={styles.whytext}>
                    Your product can always improve to be better with our iterative approach.
                </div>
            </Col>
        </Row>
    </div>
  )
}
