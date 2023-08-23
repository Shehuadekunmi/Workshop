import React from 'react'
import Header from '../components/Header'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

const Teams = () => {
  return (
    <div>
      <Header />

        <h1 className='text-center my-5'>MEET OUR TEAM</h1>
      <section className="opa1 d-flex flex-wrap my-5 justify-content-evenly ms-lg-5">
        <div className='inve'>
          <img src={img1} alt="" />
          <div className='gri'>
            <p className='fw-bold'>Gritty Grammer</p>
            <p>Investor</p>
          </div>
        </div>
        <div className='inve'>
          <img src={img2} alt="" />
          <div  className='gri'>
            <p className='fw-bold'>Peter Griffin</p>
            <p>Photographer</p>
          </div>
        </div>
        <div className='inve'>

          <img src={img3} alt="" />
          <div  className='gri'>
            <p className='fw-bold'>Sarah Shobowale</p>
            <p>Product Manager</p>
          </div>
        </div>
        <div className='inve'>
          <img src={img4} alt="" />
          <div className='gri'> <p className='fw-bold'>Stephen Essein</p>
                <p>Developer</p>
          </div>
        </div>
      </section>


      <section className="opa1 d-flex flex-wrap my-5 justify-content-evenly ms-lg-5">
        <div className='inve my-2'>
          <img src={img1} alt="" />
        </div>
        <div className='inve'>
          <img src={img2} alt="" />
          
        </div>
        <div className='inve my-2'>

          <img src={img3} alt="" />
          
        </div>
        <div className='inve'>
          <img src={img4} alt="" />
         
        </div>
      </section>


      <section className="opa d-flex flex-wrap my-5 justify-content-evenly ms-lg-5">
        <div className='inve'>
          <img src={img1} alt="" />
          <div className='gri'>
            <p className='fw-bold'>Gritty Grammer</p>
            <p>Investor</p>
          </div>

          <div className='gri1 text-center'>
            <p className='fw-bold'>Gritty Grammer</p>
            <p>Investor</p>
          </div>
        </div>
        <div className='inve'>
          <img src={img2} alt="" />
          <div  className='gri'>
            <p className='fw-bold'>Peter Griffin</p>
            <p>Photographer</p>
          </div>

          <div  className='gri1 text-center'>
            <p className='fw-bold'>Peter Griffin</p>
            <p>Photographer</p>
          </div>
        </div>
        <div className='inve'>

          <img src={img3} alt="" />
          <div  className='gri'>
            <p className='fw-bold'>Sarah Shobowale</p>
            <p>Product Manager</p>
          </div>

          <div  className='gri1 text-center'>
            <p className='fw-bold'>Sarah Shobowale</p>
            <p>Product Manager</p>
          </div>
          

        </div>
        <div className='inve'>
          <img src={img4} alt="" />
          <div className='gri'> <p className='fw-bold'>Stephen Essein</p>
                <p>Developer</p>
          </div>
          <div className='gri1 text-center'> <p className='fw-bold'>Stephen Essein</p>
                <p>Developer</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Teams