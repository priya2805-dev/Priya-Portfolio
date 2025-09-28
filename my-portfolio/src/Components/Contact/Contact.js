import React from 'react'
import instaIcon from "../../assets/instagram.png"

const Contact = () => {
  return (
    <section className='contactPage'>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Let’s Build Something Together – Send a Message!</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Mail'/>
                    <button type='submit' value="send" className='submitBtn'>Submit</button>
                    <div className='links'>
                      <img src={instaIcon} alt='' className='link'/> 

                    </div>
                    </form>
        </div>
      
    </section>
  )
}

export default Contact
