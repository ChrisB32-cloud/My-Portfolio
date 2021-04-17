import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <div className='form-wrapper'>
              <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group controlId="formBasicEmail" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Message</Form.Label>
                  <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
                >
                  {btn || "Let's Talk"}
                </a>
              </Form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
