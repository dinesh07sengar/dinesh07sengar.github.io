import React from 'react';
//import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import CV from '../../assets/Dinesh-Sengar-Resume.pdf';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 id="user-detail-name">Dinesh Singh Sengar</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        {/* //<CTA /> */}
        <div className="cta">
          <a href={CV} download className="btn" id="resume-button-2">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>

    </header>
  );
};

export default Header;
