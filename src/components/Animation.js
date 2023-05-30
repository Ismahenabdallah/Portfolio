import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import WomanImg from '../assets/img/services/received_1753653008317984.jpeg';

const Animation = () => {
  return (
    <section id='home' className='lg:h-full flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full lg:mt-10 mt-24'>
        <div className='flex items-center h-full'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-4'>
              Salut, je suis Ismahen! 👋
            </p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left mb-8'>
              <Typewriter words={["I Build & Design", "Web Interfaces.", "Freelancer", "Développeur."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </h1>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end m-14 '>
            <img className='h-[40vh] rounded-md' src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;
