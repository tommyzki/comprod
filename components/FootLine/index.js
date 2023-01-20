import { Form, Row, Col, Button, ToastContainer, Toast } from 'react-bootstrap';
import { useState } from "react";
import styles from './FootLine.module.scss';
import { sendContactForm } from "../../lib/api";

const initValues = { name: "", email: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function FootLine() {

  const [state, setState] = useState(initState);
  const [show, setShow] = useState(false);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      setShow(true)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  
  return (
    <div id='contact' className={['container', styles.maxContainer].join(" ")}>
      <div className={['headerTitle', styles.padTitle].join(" ")}>
        Have a product in mind?<br/>Let’s talk about that.
      </div>

      <Form>
        <Row className={styles.bodyContainer}>
          <Col md={6}>
            <Form.Group className={styles.mb24px} controlId="formName">
              <Form.Label className='formTitle'>Your Name</Form.Label>
              <Form.Control type="text" name="name" value={values.name} placeholder="Doe" onChange={handleChange} />
            </Form.Group>

            <Form.Group className={styles.mb24px} controlId="formEmail">
              <Form.Label className='formTitle'>Your Email</Form.Label>
              <Form.Control type="email" name="email" value={values.email} placeholder="Doe@email.com" onChange={handleChange} />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group controlId="formMessage">
              <Form.Label className='formTitle'>Your Message</Form.Label>
              <Form.Control as="textarea" name="message" value={values.message} rows={5} placeholder="Hey, im Doe! I have some ideas." onChange={handleChange}/>
            </Form.Group>
          </Col>
        </Row>
  
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <div className={styles.footerContainer}>
          <Button variant="primary" className={styles.buttonPadding} 
            disabled={
              !values.name || !values.email || !values.message
            }
            onClick={onSubmit}
          >Submit</Button>
          <div className={styles.tncText}>
            By submitting this, you agree to our <span className={styles.linkText}>Terms and Conditions</span> & <span className={styles.linkText}>Privacy Policy.</span>
          </div>
        </div>
      </Form>

      <ToastContainer className="toast-fixed-pos" position="top-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Message sent.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
