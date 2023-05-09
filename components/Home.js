import React from 'react'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'


const Home = () => {

    return (
        <section className='home' id='home'>

            <div className='home-content'>
                <h3>Hello, I am</h3>
                <h1>Anshumann Ravichandar</h1>
                <p>Lorem ipsum dolor sit amet constructor, adipiscing elit. Quaerat similique modi
                    facilis, commodi dolore sed. Laudantium, vitae aure</p>

                <div className='social-media'>
                    <a href='#'><i class='bx bxl-github' ></i></a>
                    <a href='#'><box-icon name='linkedin-square' type='logo' ></box-icon></a>
                </div>

                <a href='#' className='btn'>Download CV</a>
            </div>

            <div className='profession-container'>

                <div className='profession-box'>
                    <div className='profession' >
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Developer</h3>
                    </div>
                    <div className='profession' >
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Developer</h3>
                    </div>
                    <div className='profession' >
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Developer</h3>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Home;