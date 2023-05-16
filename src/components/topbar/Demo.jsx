import React from 'react'

export const Demo = () => {
   // Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro modi ipsum sapiente maxime debitis quae fugiat sint
   // aliquid accusantium nam nobis, ratione harum? Eaque ullam itaque libero veritatis ab.
//Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis magni corrupti harum, 
//voluptate quisquam est assumenda unde aut fuga autem, modi mollitia neque quis vero. Excepturi tenetur dignissimos
// cumque voluptates mollitia facilis non numquam ratione fugit, expedita veniam atque sed odio quidem officia et. Blanditiis facere qui vero et necessitatibus deserunt. 
//Autem ipsam placeat officia voluptatibus dolore, a vel, veritatis exercitationem animi incidunt temporibus eaque ex tenetur natus nesciunt maiores quasi iure voluptate, 
//nemo itaque aliquam vitae odit cupiditate! Dolorum, repudiandae. Mollitia, ullam! Doloremque autem maiores, ducimus atque officia sunt id.
// Quam quibusdam cupiditate delectus necessitatibus odio deleniti magnam.
  return (
    <div>Demo
        
    </div>
  )
}
import React from 'react';
import CV from '../../assets/Dinesh_Sengar_Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  )
};

export default CTA;