import React from 'react'
import "./Testimonial.scss"
import { testimonal } from '../../../dummydata'
export const Testimonial = () => {
  return (
    <div className="testimonialContainer">
        <div className="testimonialTitle">
            <h3>TESTIMONIAL</h3>
            <h1>Our Successful Students</h1>
        </div>
        <div className="testimonialCards">
         {testimonal.map((card)=>{
            return(
                <div className="testimonialCard" key={card.id}>
                    <div className="testimonialUser">
                        <div className="testimonialImage">
                        <img src={card.cover} alt="" />
                        </div>
                        <div className="testimonialName">
                           <h1>{card.name}</h1> 
                           <span>{card.post}</span>
                        </div>
                    </div>
                    <div className="UserInfo">
                        <p>{card.desc}</p>
                    </div>
                    </div>
           
            )
         })}
        </div>
    </div>
  )
}
