import React from 'react'
import "./Home.scss"
import { Hero } from './hero/Hero'
import { Benefit } from './benefits/Benefit'
import {  PouplarCourse } from './pouplerCourse/PouplarCourse'
import { OnlineCourse } from './onlineCourse/OnlineCourse'
import { Testimonial } from './testimonial/Testimonial'
import { Blog } from './blog/Blog'
import { Price } from './price/Price'

export const Home = () => {
  return (
    <>
    
    <Hero/>
    <Benefit/>
   <PouplarCourse page="Home"/>
   <OnlineCourse/>
    <Testimonial/>
    <Blog page="Home"/>
    <Price page="Home"/>
    </>
  )
}
