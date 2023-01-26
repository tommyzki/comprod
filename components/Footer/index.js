import Image from "next/image";
import { Row, Col } from "react-bootstrap";
// import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div>
      <Row>
        <Col md={3} xl={3}>
          <Image src="/logo.svg" width={102} height={35} alt="logo" />
          <p className={styles.copyright}>Concise © 2022</p>
        </Col>
        <Col xs={6} md={3} xl={3}>
          <div className={styles.titleList}>Contact Us</div>
          <div className={styles.listData}>hallo@concise.id</div>
          
          <div className={[styles.titleList, styles.office].join(" ")}>Office</div>
          <div className={styles.listData}><a href="https://goo.gl/maps/RMq5gYhEytmzw8jo7" target="_blank" rel="noreferrer">Ruko Golden 8 Blok K No.25 Tangerang, Banten 15810</a></div>
        </Col>
        <Col xs={6} md={3} xl={3}>
          <div className={styles.titleList}>Resources</div>
          <div className={styles.listData}><a href="#work">Work</a></div>
          <div className={styles.listData}><a href="#about">About</a></div>
          {/* <div className={styles.listData}>Career</div> */}
        </Col>
        <Col xs={6} md={3} xl={3}>
          <div className={styles.titleList}>Social</div>
          <div className={styles.listData}>Instagram</div>
          <div className={styles.listData}>Twitter</div>
          <div className={styles.listData}>Facebook</div>
          <div className={styles.listData}>LinkedIn</div>

          {/* <div className={styles.reviewBtnContainer}>
            <div className={styles.btnArrow}>
              <Facebook color="#FFF" size={16} />
            </div>
            <div className={styles.btnArrow}>
              <Instagram color="#FFF" size={16} />
            </div>
            <div className={styles.btnArrow}>
              <Twitter color="#FFF" size={16} />
            </div>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}
