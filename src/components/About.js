import React from 'react';

import { educations,certificats } from '../data';


const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
        
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
            <div className='flex justify-between '>
              <div>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  '>
               Ismahen Abdallah
    
              </h2>
              <p className='mb-4 text-accent'>
                Full-stack  JS Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              </div>
              <a  href="ismahen-abdallah.pdf" target="_blank" download>
                <button className='border border-gray-600 text-white w-32 p-1 mt-8  hover:bg-accent-hover'>Download Cv</button></a>

       
            </div>
              <p className='mb-8'>
             
             
              
                Je suis perfectionniste, créatif, et j'aime bien apporter de la valeur ajoutée, contribuer à l'amélioration de l'existant.
                <br/>
                 je suis dynamique et j’aime travailler en équipe pour relever des challenges techniques. J’ai une bonne maîtrise des outils de développement et je suis en constante recherche d’apprentissage
            
           
                       
              </p>

<div className='flex  items-center'>
  <p className='text-accent text-[10vh]'>.</p>
  <h3 className='text-accent mt-8 mb-3'>formation professionnelle</h3>
  
</div>
<div className=' '>
    <ul className='ml-12  border-l-2  border-l-slate-400 '>
      {educations.map((item, index) => {
            return(<div className='ml-4 ' key={index}>
               <p className=' hidden lg:text-accent md:text-[10vh] md:absolute md:translate-x-[-5vh] md:translate-y-[-3.5vh]lg:text-accent lg:text-[10vh] lg:absolute lg:translate-x-[-5vh] lg:translate-y-[-3.5vh] '>.</p>
               
      <p className='capitalize text-slate-400 text-md mb-3'>
        #{item.titre}
             </p>

            </div>) })}
    </ul>
  </div>
<div className='flex  items-center'>
  <p className='text-accent text-[10vh]'>.</p>
  <h3 className='text-accent mt-8 mb-3'> certificats</h3>
</div>  
<div className=' '>
    <ul className='ml-12  border-l-2  border-l-slate-400 '>
      {certificats.map((item, index) => {
            return(<div className='ml-4 'key={index}>
               <p className=' hidden lg:text-accent md:text-[10vh] md:absolute md:translate-x-[-5vh] md:translate-y-[-3.5vh]lg:text-accent lg:text-[10vh] lg:absolute lg:translate-x-[-5vh] lg:translate-y-[-3.5vh] '>.</p>
              <p className='capitalize text-slate-400 text-md mb-3'>{item.name}</p>
         

            </div>) })}
    </ul>
  </div>       
             
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
