import React from 'react';

import { Pagination } from 'swiper';
import GitHubCalendar from "react-github-calendar"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './github.css';

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
      <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>
        <img
        id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=dinesh07sengar&layout=compact&bg_color=FFFFFF00&hide_border=true&text_color=6d6b6b&title_color=6d6b6b"
          alt="dinesh07sengar"
        />
      </div>
      <div   style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'3rem'}} id="github-stat" >
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=dinesh07sengar&theme=dark&hide_border=true&include_all_commits=false&count_private=true&bg_color=FFFFFF00&text_color=6d6b6b&title_color=6d6b6b"
          alt="dinesh07sengar"
        />
        <img
        id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=dinesh07sengar&theme=dark&hide_border=true&background=FFFFFF00&sideNums=6d6b6b&sideLabels=6d6b6b&ring=e66262&fire=e66262&currStreakLabel=e66262&currStreakNum=6d6b6b"
          alt="dinesh07sengar"
        />
        </div>
      {/* 
      

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
            
          </div>
          
        </SwiperSlide>
        ))}
        <div> */}
        <GitHubCalendar
        fontSize={16}
        blockSize={15}
        
        username="dinesh07sengar"
        style={{backgroundColor:"none"}}
      />
        {/* </div> */}
       
      {/* //</Swiper> */}
    </section>
  )
}

export default Testimonials