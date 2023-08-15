import React, { useState } from 'react'
import "./Header.scss"
import { Head } from './Head'
import { Link } from 'react-router-dom'
export const Header = () => {
  const [open,setOpen] = useState(false)
  return ( 
    <div className="headerContainer">
    <Head/>
        <div className="header">
          <div className="links">
          <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/courses'><li>All Courses</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/team'> <li> Team </li></Link>
              <Link to='/pricing'><li>Pricing</li></Link>
              <Link to='/journal'><li>Journal</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
          </ul>
          </div>
          <div className='start'>
            <div className='getBtn'>GET CERTIFICATE</div>
          </div>
        </div>
        <div className="mobileHeader">
          <div className='mStart'>
            <div className='getBtn'>GET CERTIFICATE</div>
          </div>
          <div className="toggle">
          <button className='toggle' onClick={() => setOpen(!open)}>
            {open ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
          </div>
          
          </div>
          <div className="mLinks">
          {open && (
             
               <ul>
                <Link to='/'><li onClick={() => setOpen(!open)}>Home</li></Link>
              <Link to='/courses'><li onClick={() => setOpen(!open)}>All Courses</li></Link>
              <Link to='/about'><li onClick={() => setOpen(!open)}>About</li></Link>
              <Link to='/team'> <li onClick={() => setOpen(!open)}> Team </li></Link>
              <Link to='/pricing'><li onClick={() => setOpen(!open)}>Pricing</li></Link>
              <Link to='/journal'><li onClick={() => setOpen(!open)}>Journal</li></Link>
              <Link to='/contact'><li onClick={() => setOpen(!open)}>Contact</li></Link>
             </ul> 
            
            )}
          </div>
    
    </div>

  )
}
