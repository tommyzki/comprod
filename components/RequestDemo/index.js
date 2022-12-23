import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import styles from "./RequestDemo.module.scss";

export default function RequestDemo() {
  return (
    <div className={styles.backgroundColor}>
      <div className={styles.container}>
        <Row>
          <Col sm={12} md={4} lg={6} className='headerTitle'>
            Request demo?
          </Col>
          <Col sm={12} md={8} lg={6} className={styles.requestForm}>
            <div className="input-form-container">
              <div className="input-form input-form-left">
                <div className="iconImageWrapper">
                  <Image
                    src="/icon/mail.png"
                    layout="fill"
                  />
                </div>
              </div>
              <input
                className={styles.emailInput}
                type="text"
                name="name"
                placeholder="Enter your email address here"
              />
            </div>
            <Button variant="primary" className={styles.buttonPadding}>
              Request Now
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
