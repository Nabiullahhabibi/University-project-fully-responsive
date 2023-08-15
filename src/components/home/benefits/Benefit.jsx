import React from 'react'
import "./Benefit.scss"
import {homeDetails , logos} from "../../../dummydata"
export const Benefit = () => {
  return (
    <>
    <div className="container">
        <div className="left">
            {/* <img src='./images/about.webp' alt=''/> */}
        </div>
        <div className="right">
            <div className="details">
                <h3>LEARN ANYTHING</h3>
                <h1>Benefits About Online Learning Expertise</h1>
            </div>
            <div className="cards">
            {homeDetails.map((card) => {
              return (
             <div className="card" key={card.id}>
             <div className='img'>
             <img src={card.cover} alt={card.cover} />
             </div>
             <div className='text'>
              <h2>{card.title}</h2>
               <p>{card.desc}</p>
              </div>
            </div>
              )
            })}
            </div>
        </div>
    </div>
    <div className="logoContainer">
      {logos.map((logo)=>{
        return(
          <div className="logo" key={logo.title}>
            <div className="logoIcon"><img src={logo.cover} alt=''/></div>
            <div className="logoDetails">
              <h1>{logo.data}</h1>
              <h2>{logo.title}</h2>
            </div>
          </div>
        )
      })}
    </div>
      </>
  )
}
