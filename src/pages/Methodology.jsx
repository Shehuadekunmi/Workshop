import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/methodology.css'
import Methsec1 from '../components/Methsec1'

const Methodology = () => {
  return (
    <div>
      <Header/>

      <section className='banner'>
        <div className="text-center text-white meth px-2 py-5">
          <h1>The Method of  WorkshopApp </h1>
          <p>Below is a step by step representation of the hiring process of WorkshopApp</p>
        </div>

        <div className='review px-2 py-5'>
          <h3 className="fw-bold pt-5">Overview</h3>
          <p>We are a virtual studio that only aims at hiring only the best qualified people, hence to achieve this process, 
            candidates are made to go through a series of task with already set requirements, this is done in order to test
            as well as bring out the best. Only qualified candidats gets hired.
            The steps include:</p>
        </div>

        <Methsec1/>
      </section>


      




      <Footer/>
    </div>
  )
}

export default Methodology