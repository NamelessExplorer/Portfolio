import Image from 'next/dist/client/image'
import { useState, useEffect, useRef } from 'react'

const Projects = () => {


    return (
        <>
        <section id='projects'>
            <h1 className='subtitle2'>My Projects</h1>
            <div className='work-list'>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>Media App</h3>
                        <p>Connects you with people throughout the world</p>
                        <a href='#'></a>
                    </div>
                </div>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>Media App</h3>
                        <p>Connects you with people throughout the world</p>
                        <a href='#'></a>
                    </div>
                </div>
                <div className='work'>
                    <img src='laptop.png' />
                    <div className='layer'>
                        <h3>Media App</h3>
                        <p>Connects you with people throughout the world</p>
                        <a href='#'></a>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Projects;