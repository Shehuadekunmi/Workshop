import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/contact.css'
import {BsSend} from 'react-icons/bs'
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi'

const Contact = () => {
  return (
    <div>
      <Header/>

      <div className="con text-center my-5 ">
        <h4>contact Us</h4>
        <p>We would love to hear from you. Please fill use the informtion below to get in touch with our team</p>
      </div>

      <section className="form d-flex flex-wrap justify-content-around my-3">
        <div className="info px-2 mt-3 py-2">
          <p>Contact Information</p>
          <p className='fw-bold'>General Enquiring</p>
          <p>info@workshopapp.com</p>
          <p className='fw-bold'>Visit Us</p>
          <p>8 Jubilee-CMD Road, Magodo, Lagos State, Nigeria</p>
          <p className='fw-bold'>Follow Us</p>
          <div className="gap-5 text-primary fs-3">
          <BiLogoFacebookSquare /> <BiLogoTwitter />  <BiLogoLinkedinSquare /> <BiLogoInstagramAlt className='text-danger' />
          </div>
        </div>

        <div className="for p-2 my-3">
          <form >
            <h3>Send us A message</h3>
            <div>
              <label >Name</label><br />
              <input type="text" placeholder='Mark Essien' />
            </div>

            <div>
              <label >Email Address</label><br />
              <input type="email" placeholder='markessien@gmail.com' />
            </div>

            <div>
              <label >Phone</label><br />
              <input type="text" placeholder='09079179545' />
            </div>

            <div>
              <label >Message</label><br />
              <textarea placeholder='Hi, do you have a moment to talk about ...' id="" cols="30" rows="10"></textarea>
            </div>

            <button className='btn btn-dark'>Send <BsSend/></button>
          </form>
        </div>
      </section>












      <Footer/>
    </div>
  )
}

export default Contact