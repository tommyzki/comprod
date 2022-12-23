import { Row, Col } from "react-bootstrap";
import { useContext } from 'react';
import AppContext from "../AppContext/AppContext"
import styles from './Review.module.scss';


export default function Review() {
const context = useContext(AppContext);

  return (
    <div id="review" className={styles.container}>
        <div className={ context.themeContext === "white" ? styles.reviewContainer : styles.reviewContainerBlack}>
            <Row>
                <Col xs={6} md={6} xl={3}>
                    <div className={styles.titleList}>100+</div>
                    <div className={styles.listData}>number of clients</div>
                </Col>
                <Col xs={6} md={6} xl={3}>
                    <div className={styles.titleList}>250+</div>
                    <div className={styles.listData}>projects</div>
                </Col>
                <Col xs={6} md={6} xl={3}>
                    <div className={styles.titleList}>300K+</div>
                    <div className={styles.listData}>line of codes</div>
                </Col>
                <Col xs={6} md={6} xl={3}>
                    <div className={styles.titleList}>4000+</div>
                    <div className={styles.listData}>hours of work</div>
                </Col>
            </Row>
        </div>
    </div>
  )
}
