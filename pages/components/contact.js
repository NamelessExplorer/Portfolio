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
                    <h2>Email ID</h2>
                    <p>arx3099@gmail.com</p>
                    <br/><br/>
                    <h2>Phone Number</h2>
                    <p>(+91) 8920441714</p>
                   
                </div>
                
                <div className="contact-right">

                    <h2 className='formtitle'>Want to get in touch? Drop an email!</h2>
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

