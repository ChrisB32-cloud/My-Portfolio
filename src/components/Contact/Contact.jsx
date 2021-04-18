import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pc00w6j', 'template_512gm1f', e.target, 'user_kqm9lPEvXDEbEYeZgKlTS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me?'}
            </p>
            <div className='form-wrapper'>
              <Form onSubmit={sendEmail} className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group controlId="formBasicEmail" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Name</Form.Label>
                  <Form.Control className='formInputCont' name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Email address</Form.Label>
                  <Form.Control className='formInputCont' name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="text-left w-75 p-3">
                  <Form.Label className='ml-3'>Message</Form.Label>
                  <Form.Control className='formInputCont' name='message' as="textarea" rows={4} type="text" placeholder="Message" required />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
                <Form.Group controlId="formBasicPassword" className="text-left w-20 p-3">
                  <Form.Control className="cta-btn cta-btn--resume" style={{ fontSize: '30px', backgroundColor: 'lightgrey' }} type="submit" value="Lets Talk" />
                </Form.Group>
                {/* <a
                  type='submit'
                  // target="_blank"
                  value='Send'
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                // href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
                >
                  {btn || "Let's Talk"}
                </a> */}
              </Form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
