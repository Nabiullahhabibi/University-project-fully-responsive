
import React from 'react'
import "./Footer.scss"
import {blog} from "./../../../dummydata"
export const Footer = () => {
  return (
    <>
    <div className="footerContainer">
        <div className="emailContainer">
            <div className="emailText">
                <h1>Newsletter - Stay tune and get the latest update</h1>
                <p>Far far away, brhind the word mountains</p>
            </div>
            <div className="emailCon">
            <div className="emailInput">
                <input type='email' placeholder='Enter email address'/>
                <i className='fa fa-paper-plane'></i>
            </div>
            </div>
        </div>
        <div className="footerInfo">
        <div className="left">
        <div className="nameSection">
            <div className="nameHeader">
                <h1>ACADEMIA</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className="nameDetail">
                <p>A small river named Duden flowes by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="nameIcons">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
        </div>
        <div className="exploreSection">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
        </div>
        <div className="quickSection">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
        </div>
        </div>
        <div className="right">
        <div className="recentPostSection">
            <h3>Recent Post</h3>
            {blog.slice(0,3).map((post)=>(
                
                <div className="postCon" key={post.id}>
                <div className="postPhoto">
                    <img src={post.cover} alt=''/>
                </div>
                <div className="postInformation">
                <div className="postIcons">
                <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{post.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{post.type}</label>
                  </span>
                </div>
                <div className="postTitle">
                <h4>{post.title.slice(0, 40)}...</h4>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="questionSection">
        <h3>Have a Questions</h3>
        <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
        </div>
        </div>
        </div>
        <div className="footer">
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
        </div>
    </div>
    </>
  )
}
