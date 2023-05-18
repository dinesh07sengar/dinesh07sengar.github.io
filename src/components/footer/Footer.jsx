import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'
import './footer.css';
import CV from '../../assets/Dinesh_Sengar_Resume.pdf';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer className="footer" >
      <a href="#home" className="footer__logo">Dinesh-sengar</a>
      <ul className="nav-menu">
        <li><a href="#home" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#skills" >Skills</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#testmonials" >Github</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/dinesh-sengar-199a98201/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/dinesh07sengar" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/dinesh_sengar_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
