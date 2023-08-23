import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoYoutube, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='text-center text-white bg-dark'>
            <div className="img py-3">
                <img src={logo} alt="" />
            </div>

            <div className="social d-flex justify-content-center gap-3 mt-3 fs-2">
                <BiLogoFacebookSquare /> <BiLogoTwitter /> <BiLogoYoutube /> <BiLogoLinkedinSquare /> <BiLogoInstagramAlt />
            </div>

            <div className="d-flex flex-wrap justify-content-center fs- gap-md-3  my-3">
                <div className='d-flex flex-wrap gap-lg-3  gap-2'> <Link to='/'> <p>Home</p> </Link>
                    <Link to='/contact'><p>Contact</p></Link>
                    <Link to='/teams'>  <p>Teams</p></Link>
                </div>
                <div className='d-flex gap-2 gap-lg-3'>
                    <Link to='/about'>  <p>About Us</p></Link>
                    <Link to='/methodology'>  <p>Methodology</p> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer