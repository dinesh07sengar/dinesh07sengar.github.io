import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import {FaFileDownload} from 'react-icons/fa'


import './topbar.css';
import CV from '../../assets/Dinesh_Sengar_Resume.pdf';

const Topbar = () => {
  // className={activeNav === '#home' ? 'active' : ''}
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav  id="nav-menu">
      <a href="#home" onClick={()=> setActiveNav('#home')} className="nav-link home"><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className="nav-link about"><AiOutlineUser /></a>
      <a href="#skills" onClick={()=> setActiveNav('#experience')} className="nav-link skills"><BiBook /></a>
      <a href="#projects" onClick={()=> setActiveNav('#portfolio')} className="nav-link projects"><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className="nav-link contact"><BiMessageSquareDetail /></a>
      <a href={CV} download onClick={()=> setActiveNav('#contact')} className={"nav-link resume"} id="resume-button-1"><FaFileDownload/></a>
    </nav>
  )
}

export default Topbar;