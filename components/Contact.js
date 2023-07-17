const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="contact-left">
                        <h1 className="subtitle">Contact Me</h1>
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
                        <form>

                            <div className="nue">
                                <input className="io1" type="text" name="Name" placeholder="Your Name" required />
                                <input className="io2" type="email" name="Email" placeholder="Your Email" required />
                            </div>
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="cv">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact