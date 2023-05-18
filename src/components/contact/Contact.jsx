import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi'


import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_wofr4g6',
        'template_tw9a108',
        formRef.current,
        'qhzG-MP-xRGDCIdb3'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact" >
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 id="contact-email">sengardante@gmail.com</h5>
            <a href="sengardante@gmail.com">Send a message</a>

          </article>
          <div className="contact__socials">

            <a href="https://www.linkedin.com/in/dinesh-sengar-199a98201/" target="_blank" rel="noreferrer" id="contact-linkedin" ><BsLinkedin /></a>
            <a href="https://github.com/dinesh07sengar" target="_blank" rel="noreferrer" id="contact-github"><FaGithub /></a>
            <a href="tel:+918109614595" target="_blank" rel="noreferrer" id="contact-phone" ><FiPhoneCall /></a>
          </div>


        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <div >
            <a href='mailto:sengardante@gmail.com'><button type="submit" className="btn btn-primary">
              Send Message
            </button></a>

          </div>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>

    </section>
  );
};

export default Contact;
