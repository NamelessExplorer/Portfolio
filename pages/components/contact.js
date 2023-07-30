import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const poppins = Poppins({ weight: ['400', '500'], style: ['normal'], subsets: ['latin'], display: 'swap' })

const Contact = () => {



    return (
        <>
        <section id = 'contact'>
            <div className="container">
                <div className="contact-left">
                    <h1 className="subtitle3">Contact Me</h1>
                    <p>example.contact@gmail.com</p>
                    <p>12345678</p>

                    <div className="social-media">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                    <button type="submit" className='cv'>Download CV</button>
                </div>
                <div className="contact-right">

                    <h1 className='formtitle'>Want to get in touch?</h1>
                    <form method="post">

                        <div className="nue">
                            <input className="io1" type="text" name="Name" placeholder="Your Name" required />
                            <input className="io2" type="email" name="Email" placeholder="Your Email" required />
                        </div>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>

                        <button type="submit" className="message">Submit</button>
                    </form>
                </div>
            </div>
            </section>
        </>
    )
}

export default Contact;

