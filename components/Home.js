import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { useState } from 'react'

const Home = () => {

    return (
        <section className='home' id='home'>

            <div className='home-content'>
                <h3 className='line-1'>Hey, I'm</h3>
                <br />
                <h3 className='line-2'>
                    Anshumann Ravichandar
                </h3>
                <br /><br />
                <p>An aspiring software developer who loves to discover new things every</p>
                <br /><br />
                <a href='#' className='btn contact'>CONTACT ME</a>
            </div>

            <div className='profession-container'>
                <div className='profession-box' />
            </div>

        </section>

    )
}

export default Home;