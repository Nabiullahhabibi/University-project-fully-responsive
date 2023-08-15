import React, { useState } from 'react'
import {faq} from "../../dummydata"
import "./Pricing.scss"
export const Faq = () => {
  const [open, setOpen] = useState(false)
  const [fagCount, setFaqCount] = useState(0)
  const toggle = (index) =>{
    setOpen(!open)
    setFaqCount(index)
  }
  return (
    <div className="faqContainer">
        <div className="faqTitle">
            <h3>FAQS</h3>
            <h1>Frequesntly Ask Question</h1>
        </div>
        <div className='faqs'>
          {faq.map((val, index) => (
            <div className='faq' key={index}>
              <button className='faqBtn' onClick={()=> toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{open ? fagCount === index && <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {open ? fagCount === index && (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
    </div>
  )
}
