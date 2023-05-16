import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section  id="skills">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">HTML</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">CSS</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">JavaScript</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">React</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Redux</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Next.js</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Chakra ui</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Node.js</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Express</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">Mongodb</h4>
            </article>
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">java</h4>
            </article>
            
            <article className="skills-card">
              <BsFillPatchCheckFill className="skills-card-img" />
              <h4 className="skills-card-name">GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience