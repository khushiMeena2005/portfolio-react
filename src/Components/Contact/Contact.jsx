import React from 'react'
import "./Contact.css"
import theme_pattern from "../../../public/Images/assets/theme_pattern.svg"
import mail_icon from "../../../public/Images/assets/mail_icon.svg"
import location_icon from "../../../public/Images/assets/location_icon.svg"
import call_icon from "../../../public/Images/assets/call_icon.svg"

const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5c7d0f98-251e-4a26-9faa-ac886a24c1d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
       alert(res.message);
        window.location.reload();
    }
  };

  return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
        <h1> Get In Touch</h1>
        <img src={theme_pattern} alt="" />
        </div>

        <div className='contact-section'>
          <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>I am currently avaiable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className='contact-details'>
              <div className='contact-detail'>
              <img src={mail_icon} alt="" />
              <p>khushimeena4381@gmail.com</p>
              </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt="" />
                    <p>+91 9261656266</p>
              </div>
                <div className='contact-detail'>
                  <img src={location_icon} alt="" />
                  <p>Jaipur , Rajasthan</p>
              </div>

            </div>
          </div>
          <form  onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input  type='text' placeholder='Enter Your Name' name='name'/>
            <label htmlFor=''>Your Email </label>
            <input  type='email' placeholder='Enter Your email' name='email'/>
            <label htmlFor=''>Write Your Message Here</label>
            <textarea name='message' rows="4" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit 
            </button>
          </form>
        </div>
    </div>
  )
}

export default Contact;
