import React from 'react'
import logo from '../assets/logo2.png'
import Dropdown from 'react-bootstrap/Dropdown';

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

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header