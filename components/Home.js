import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'

const Home = () => {

    return (
        <div className='home'>
            <section className='home' id = 'home'>
                <div className='home-content'>
                    <h3>Hello, I am</h3>
                    <h1>Anshumann Ravichandar</h1>
                </div>

            </section>
        </div>
    )
}

export default Home;