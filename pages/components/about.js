
import { useState, useEffect} from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Javascript" },
    { skill: "ReactJS" },
    { skill: "NextJS" },
    { skill: "React Native" },
    { skill: "MongoDB" },
    { skill: "MySQL"},
    { skill: "Java" },
    { skill: "Python" },
    { skill: "Langchain" }
    
]

const education = [
    { edu: "Computer Science and Engineering (Vellore Institute of Technology, Bhopal)" },
    { edu: "Class 12th, Fahaheel Al-Watanieh Indian Private School(FAIPS), Kuwait" },
    { edu: "Class 10th Delhi International School, New Delhi" }
]

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
  
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
  
    const opentab = (tabName) => {
      setActiveTab(tabName);
    };
  
    return (
      <section id='about'>
        <div className='row'>
          <div className='about-col-1 '>
            <img className='profile scroll-section' src="profile.png" loading='lazy' alt='Profile' />
          </div>
  
          <div className='about-col-2'>
  
            <h1 className='subtitle scroll-section'>About Me</h1>
            <p className='describe scroll-section'>Hey! I&apos;m always up for new challenges. Juggling between multiple new technologies, I&apos;m exploring a wide range of technological domains, ranging from web development, to machine learning and app development.</p>
  
            <div className='tab-titles scroll-section'>
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => opentab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => opentab('education')}
              >
                Education
              </p>
            </div>
  
            <div className={`tab-contents scroll-section ${activeTab === 'skills' ? 'active-tab' : ''}`}>
              {skills.map((item, idx) => (
                <p key={idx} className='skills scroll-section'>{item.skill}</p>
              ))}
            </div>
  
            <div className={`tab-contents scroll-section ${activeTab === 'education' ? 'active-tab' : ''}`}>
              {education.map((ite, idx) => (
                <p key={idx} className='education scroll-section'>{ite.edu}</p>
              ))}
            </div>
  
          </div>

        </div>
      </section>
    );
  };
  
  export default About;