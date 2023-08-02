"use client"
import { useState, useEffect } from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Javascript" },
    { skill: "ReactJS" },
    { skill: "Next.JS" },
    { skill: "Tailwind CSS" },
    { skill: "MongoDB" },
    { skill: "ExpressJS" },
    { skill: "NodeJS" },
    { skill: "Core Java" }
]

const education = [
    { edu: "CSE with Specialization in AIML (Vellore Institute of Technology, Bhopal)" },
    { edu: "Class 12th, Fahaheel Al-Watanieh Indian Private School(FAIPS), Kuwait" },
    { edu: "Class 10th Delhi International School, New Delhi" }
]

const About = () => {


    const [activeTab, setActiveTab] = useState('');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        opentab('skills');
    }, []);

    return (

        <section id='about'>
            <div className='row'>

                <div className='about-col-1'>
                    <img className='profile' src="profile.png" />
                </div>

                <div className='about-col-2'>

                    <h1 className='subtitle'>About Me</h1>
                    <p className='describe'>Hey! I'm an aspiring software developer who likes to learn about new technologies. Currently I'm exploring the field of web development and am proficient in MERN stack.</p>

                    <div className='tab-titles'>
                        <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}
                        >
                            Skills
                        </p>
                        <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>
                            Education
                        </p>
                    </div>

                    <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                        {
                            skills.map((item, idx) => {
                                return <p key={idx} className='skills'>{item.skill}</p>
                            })
                        }
                    </div>

                    <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                        {
                            education.map((ite,idx) => {
                                return <p key={idx} className='education'>{ite.edu}</p>
                            })
                        }
                    </div>

                </div>

                <script type='text/javascript'>

                </script>
            </div>
        </section>
    )
}

export default About;