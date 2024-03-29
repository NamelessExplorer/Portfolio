import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const poppins = Poppins({ weight: ['400', '500'], style: ['normal'], subsets: ['latin'], display: 'swap' })

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7jkuhj3', 'template_6eagxfp', form.current, 'yq4j4_zQNZI2io0ue')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
        <section id = 'contact'>
            <div className="container">
                
                <div className="contact-left">
                    <h1 className="subtitle3 scroll-section">Contact Me</h1>
                    <h2 className='scroll-section'>Email ID</h2>
                    <p className='scroll-section'>arx3099@gmail.com</p>
                    <br/><br/>
                    <h2 className='scroll-section'>Phone Number</h2>
                    <p className='scroll-section'>(+91) 8920441714</p>
                   
                </div>
                
                <div className="contact-right">

                    <h2 className='formtitle scroll-section' data-text="Drop&nbsp;an&nbsp;email!">Want to get in touch? </h2>
                    <form method="post" className="form" ref={form} onSubmit={sendEmail}>

                        <div className="nue">
                            <input className="io1 scroll-section" type="text" name="user_name" placeholder="Your Name" required />
                            <input className="io2 scroll-section" type="email" name="email_id" placeholder="Your Email" required />
                        </div>
                        <textarea className="textbox scroll-section" name="message" rows="6" placeholder="Your Message"></textarea>

                        <button type="submit" name="message" className="sendmessage scroll-section" value="Send">Send</button>
                    </form>
                </div>
            </div>
            </section>
        </>
    )
}

export default Contact;

