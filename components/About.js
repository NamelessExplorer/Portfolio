import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { useState } from 'react'
import { useEffect, useRef } from 'react'

const About = () => {


    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        opentab();
    }, []);

    return (
        <div id="About">
            <div className='container'>
                <div className='row'>
                    <div className='about-col-1'>
                        <img className='profile' src="profilepic.png"></img>
                    </div>
                    <div className='about-col-2'>
                        <h1 className='subtitle'>About Me</h1>
                        <p>An aspiring software developer who loves to discover new things everyday.</p>

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
                            <ul>
                                <li>Web Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript (ReactJS, NodeJS, ExpressJS)</li>
                                <li>MongoDB</li>
                                <li><span>Programming</span></li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <ul>
                                <li>Education content goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <script type='text/javascript'>

            </script>
        </div>
    )
}

export default About;