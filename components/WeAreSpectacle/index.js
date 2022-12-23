import Image from 'next/image';
import { Row, Col } from "react-bootstrap";
import styles from "./WeAreSpectacle.module.scss";

export default function WeAreSpectacle() {
  return (
    <div className="background-gradient">
      <div className={styles.container}>
        <div className={styles.imageAbsolute}>
          <div className={styles["imageAbsolute-imageLeft"]}>
            <Image
              src="/vectary-texture2.png"
              alt="vectary-texture"
              layout="fill"
            />
          </div>
          <div className={styles["imageAbsolute-imageRight"]}>
            <Image src="/player-3d.png" alt="player-3d" layout="fill" />
          </div>
        </div>
        <Row>
          <Col className={styles.headerTitle64}>
            <span className={styles.padTitle}>
              We are <span className="primary-color">Spectacle</span>
            </span>
          </Col>
        </Row>
      </div>
      <div className={styles.bgLineDiv} />
    </div>
  );
}
