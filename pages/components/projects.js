import Image from 'next/dist/client/image'
import { useState, useEffect, useRef } from 'react'
import { HiExternalLink } from 'react-icons/hi';

const Projects = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('.scroll-section');
        const options = {
          threshold: 0.2,
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
            }
          });
        }, options);
  
    
        sections.forEach((section) => {
          observer.observe(section);
        });
  
    
        return () => {
          observer.disconnect(); // Cleanup observer on component unmount
        };
      }, []); // Empty dependency array ensures the effect runs once on mount

    return (
        <>
        <section id='projects'>
            <h1 className='subtitle2 scroll-section'>My Projects</h1>
            <div className='work-list'>
                <div className='work scroll-section'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>Allergy Detection</h3>
                        <p>Checks food items online for ingredients you are allergic to.</p>
                        <a href='https://github.com/anr2601/Allergy-Detector'><HiExternalLink size={32} /></a>
                    </div>
                </div>
                <div className='work scroll-section'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>One Mile App</h3>
                        <p>An online one to one video calling service.</p>
                        <a href='https://github.com/anr2601/One-Mile'><HiExternalLink size={32}/></a>
                    </div>
                </div>
                <div className='work scroll-section'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>SmartLens</h3>
                        <p>Scans medical items to provide instant information.</p>
                        <a href='https://github.com/anr2601/SmartLens'><HiExternalLink size={32} /></a>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Projects;