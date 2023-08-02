import Image from 'next/dist/client/image'
import { useState, useEffect, useRef } from 'react'
import { HiExternalLink } from 'react-icons/hi';

const Projects = () => {


    return (
        <>
        <section id='projects'>
            <h1 className='subtitle2'>My Projects</h1>
            <div className='work-list'>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>Allergy Detection</h3>
                        <p>Checks food items online for ingredients you are allergic to.</p>
                        <a href='#'><HiExternalLink size={32} /></a>
                    </div>
                </div>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>One Mile App</h3>
                        <p>An online one to one video calling service.</p>
                        <a href='#'><HiExternalLink size={32}/></a>
                    </div>
                </div>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>?????</h3>
                        <p>???????????</p>
                        <a href='#'><HiExternalLink size={32} /></a>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Projects;