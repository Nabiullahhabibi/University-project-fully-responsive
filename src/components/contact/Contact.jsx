
import React from 'react'
import { Heros } from '../common/heros/Heros'
import "./Contact.scss"
export const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

  return (
    <>
     <Heros title="Contact Us" section="HOME / CONTACT"/>
    <div className='contactContainer'>
      <div className='leftCon'>
        <iframe src={map}></iframe>
      </div>
      <div className='rightCon'>
        <h1>Contact us</h1>
        <p>We're open for any suggestion or just to have a chat</p>

        <div className='items'>
          <div className='box'>
            <h4>ADDRESS:</h4>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className='box'>
            <h4>EMAIL:</h4>
            <p> info@yoursite.com</p>
          </div>
          <div className='box'>
            <h4>PHONE:</h4>
            <p> + 1235 2355 98</p>
          </div>
        </div>

        <form action=''>
          <div className='formCon'>
            <div className="nameSection">
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            </div>
          <div className="subject">
          <input type='text' placeholder='Subject' />
          <textarea cols='30' rows='12' >
            Create a message here...
          </textarea>
          </div>
          <button className='formBtn'>SEND MESSAGE</button>
          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </form>

      </div>
  </div>
    </>
  )
}
