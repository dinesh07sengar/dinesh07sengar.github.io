import React from 'react';

import { Pagination } from 'swiper';
import GitHubCalendar from "react-github-calendar"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://github-readme-stats.vercel.app/api?username=dinesh07sengar&show_icons=true&theme=bluegreen',
      name: 'streak1',
      id2:"github-stats-card",
    },
    {
      id: 2,
      link: 'https://github-readme-streak-stats.herokuapp.com?user=dinesh07sengar',
      name: 'streak2',
      id2:"github-streak-stats",
    },
    {
      id: 3,
      link: 'https://github-readme-stats.vercel.app/api/top-langs/?username=dinesh07sengar&layout=compact',
      name: 'streak3',
      id2:"github-top-langs",
    },
   
  ];
  return (
    <section id="testmonials">
      

      <h5>Some glimpse of my github</h5>
      <h2>GitHub-Details</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
      
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar" id={test.id2}>
            <img src={test.link} alt={test.name}/>
            {/* <a href={test.link}>
              <BsLinkedin />
            </a> */}
          </div>
          {/* <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small> */}
        </SwiperSlide>
        ))}
        <div>
        <GitHubCalendar
        fontSize={16}
        blockSize={15}
        
        username="dinesh07sengar"
        style={{backgroundColor:"none"}}
      />
        </div>
       
      </Swiper>
    </section>
  )
}

export default Testimonials