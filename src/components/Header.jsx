import React from 'react'
import logo from '../assets/logo2.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-center gap-2'>
            <img src={logo} alt="" className='mt-3'/>
            <div className="link">
                <div className="btn-group mt-5">
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Don
      </Dropdown.Toggle>

      <Dropdown.Menu >
       <Link to='/' className='text-decoration-none'><Dropdown.Item href="#/action-1">Home</Dropdown.Item> </Link> 
       <Link to='/contact' className='text-decoration-none'> <Dropdown.Item href="#/action-2">Contact</Dropdown.Item> </Link> 
       <Link to='/about' className='text-decoration-none'> <Dropdown.Item href="#/action-3">About Us</Dropdown.Item> </Link> 
       <Link to='/teams' className='text-decoration-none'> <Dropdown.Item href="#/action-2">Teams</Dropdown.Item> </Link> 
       <Link to='/methodology' className='text-decoration-none'> <Dropdown.Item href="#/action-3">Methodology</Dropdown.Item> </Link> 
      </Dropdown.Menu>
    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header