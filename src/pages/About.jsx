import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import tele from '../assets/tele.png'
import cod from '../assets/cod.png'
import cod1 from '../assets/cod1.png'
import two from '../assets/two.png'
import cap from '../assets/cap.png'
import '../style/about.css'


const About = () => {
 


  return (
    <div>
      <Header />
    
      <div className="ban d-md-flex flex-wra   my-5">
        <div className="text px-2">
          <h1>Who We Are</h1>
          <p>We help you build and grow your startup. With our 300+ projects we have the experience you need to among the 10% successful start ups</p>
        </div>

        <div className="imag mx-2">
          <img src={tele} alt="" />
        </div>
      </div>

      <div className="cod px-3 ">
        <img src={cod} alt="" className='cod2' /> <p>90% of startups are failing, with our 300+ portfolio experience we will prevent mistakes of failed start ups and make it the top 10%</p>
        <img src={cod1} alt="" className='text-center cod1' />
      </div>

      <section className="job d-flex flex-wrap justify-content-evenly ps-lg-5 gap-md-5 px-2">
        <div><img src={two} alt="" /></div>
        <div className='my-2 cap'><img src={cap} alt="" /></div>
        <div className='our'>
          <h2>Our teams Job</h2>
          <p>We have the best team, from designers to markets we select the very best of candidates out of our participant pool of diverse background and knowledge. </p>
        </div>
      </section>

      <section className=' d-flex flex-wrap justify-content-around ms-lg-5 px-md-2 fact my-5'>
        <div className='d-flex work'>
          <div className="var border border-danger-subtle me-2"></div>
          <div>
            <h1>Facts 1</h1>
            <p>We have worked with 12+ clients</p>
          </div>
        </div>

        <div className='d-flex work'>
          <div className="var border border-danger-subtle me-2"></div>
          <div>
            <h1>Facts 1</h1>
            <p>We have worked with 12+ clients</p>
          </div>
        </div>

        <div className='d-flex work'>
          <div className="var border border-danger-subtle me-2"></div>
          <div>
            <h1>Facts 1</h1>
            <p>We have worked with 12+ clients</p>
          </div>
        </div>

        <div className='d-flex work'>
          <div className="var border border-danger-subtle me-2"></div>
          <div>
            <h1>Facts 1</h1>
            <p>We have worked with 12+ clients</p>
          </div>
        </div>
      </section>



      <section>
        <div className='px-2 text-center mb-5 port'>
          <h1 className='fw-bold'>Our 300+ portfolio projects</h1>
          <p>We help you build and grow your startup. With our 300+ projects we have the experience you need to among the 10% successful start ups</p>
          <button className='bg-dark text-white  border-0'>See Our Portfolio</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About