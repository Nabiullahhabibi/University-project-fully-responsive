import React from 'react'
import "./Header.scss"
export const Head = () => {
  return (
    <div className="head">
        <div className="logo">
        <h1>ACADEMIA</h1>
        <span>ONLINE EDUCATION & LEARNING</span>
        </div>
        <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
    </div>
  )
}
