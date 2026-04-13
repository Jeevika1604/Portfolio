import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import ProjectCard from '../components/ui/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import claritelImg from '../assets/claritel-mockup.png';
import inventiveImg from '../assets/inventive-mockup.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const projects = [
    {
      title: "The Quick Assist",
      description: "No-code AI chatbot builder for websites to automate customer support and sales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "SaaS", "No-code"],
      externalLink: "https://thequickassist.co/"
    },
    {
      title: "Claritel AI",
      description: "Claritel.ai is an Agentic AI contact center platform for enterprises, enabling autonomous CX workflows, omnichannel engagement, automation, and analytics.",
      image: claritelImg,
      tags: ["Enterprise", "AI", "Dashboard"],
      externalLink: "https://www.claritel.ai/"
    },
    {
      title: "MM Recyclers",
      description: "A modern corporate website for a sustainable e-waste recycling and management company.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
      tags: ["Cleantech", "Corporate", "Web Design"],
      externalLink: "https://mmrecyclers.com/"
    },
    {
      title: "Codetentacles Technologies",
      description: "Digital agency website offering custom software development, AI solutions, and web applications.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["Agency", "Development", "Design"],
      externalLink: "https://codetentaclestechnologies.com/"
    },
    {
      title: "Inventive Digitizing",
      description: "Turn Your Images Into Stunning Embroidery & Vector Files.",
      image: inventiveImg,
      tags: ["Design", "B2B", "E-commerce"],
      externalLink: "https://inventivedigitizing.com/"
    },
    {
      title: "Waari",
      description: "A specialized web application built for the Indian spirituality sector and community.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
      tags: ["Culture", "Web App", "Community"],
      externalLink: "https://waari.in/"
    },
  ];

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="heading-lg mb-4">Featured <span className="text-primary-600">Projects</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">
            A selection of my best work, combining deep technical implementation with beautiful aesthetics.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="swiper-button-prev-custom p-3 rounded-full border border-slate-200 dark:border-white/10 hover:bg-primary-500 hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="swiper-button-next-custom p-3 rounded-full border border-slate-200 dark:border-white/10 hover:bg-primary-500 hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="projects-slider">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
