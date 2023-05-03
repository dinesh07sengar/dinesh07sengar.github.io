import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dinesh-sengar-199a98201/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/dinesh07sengar" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/dinesh_sengar_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" ><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials