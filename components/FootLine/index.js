import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from './FootLine.module.scss';


export default function FootLine() {
  return (
    <div id='contact' className={styles.container}>
      <Row>
        <Col className={[styles.textTitle, styles.padTitle].join(" ")}>
          Have a product in mind?<br/>Let’s talk about that.
        </Col>
      </Row>

      <Form>

        <Row className={styles.bodyContainer}>
          <Col md={6}>
            <Form.Group className={styles.mb24px} controlId="formName">
              <Form.Label className='formTitle'>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>

            <Form.Group className={styles.mb24px} controlId="formEmail">
              <Form.Label className='formTitle'>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Doe@email.com" />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group controlId="formMessage">
              <Form.Label className='formTitle'>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Hey, im Doe! I have some ideas." />
            </Form.Group>
          </Col>
        </Row>
  
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Row>
          <Col className={styles.footerContainer}>
            <Button variant="primary" className={styles.buttonPadding}>Submit</Button>
            <div className={styles.tncText}>
              By submitting this, you agree to our <span className={styles.linkText}>Terms and Conditions</span> & <span className={styles.linkText}>Privacy Policy.</span>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
