import React from 'react';


import IMG4 from '../../assets/hotstar.jpg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 4,
      title: 'Hotstar',
      img: IMG4,
      description:
        'Hotstar is single page video streaming web app',
      technologies: 'ReactJs | CSS | Redux | ChakraUi | HTML | ES6',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 1,
      title: 'Beauty-bebo',
      img: "https://user-images.githubusercontent.com/68657465/195849836-fcddab53-fdad-4eed-89a9-edb5a2c5fbc1.png",
      description:
        '•Online retail store for the need of the Makeup, Skin care & various products.',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://beauty-beboclone.netlify.app/index.html',
      github: 'https://github.com/harshita0802goswami/Beauty-bebo',
    },
    {
      id: 2,
      title: 'Shephora',
      img: "https://www.musingsofamuse.com/wp-content/uploads/2012/04/new-sephora-website.jpg",
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'Zostal',
      img: "https://site-images.similarcdn.com/image?url=zostel.com&t=1&s=1&h=a7d9e4066a53788b7df5dcbbe4dde129af440fc6821858a68a5398d4beb26f26",
      description: 'ZOSTEL, a hostel booking website with 60+ destinations across India and Nepal',
      technologies: 'ReactJs | CSS | Redux | ChakraUi | HTML | ES6',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    }
   
   
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="project-card" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3 className="project-title">{pro.title}</h3>
              <p className="project-description">{pro.description}</p>
              <p className="project-tech-stack">{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="project-github-link"
                rel="noreferrer"
              >
                GitHub
                
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="project-deployed-link"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
