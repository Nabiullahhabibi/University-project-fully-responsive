// import React, { useEffect, useState } from 'react'
import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from './components/home/Home'
import { Courses } from './components/courses/Courses'
import { Header } from './components/common/header/Header'
import { Footer } from './components/common/footer/Footer'
import { About } from './components/about/About'
import { Journal } from './components/journal/Journal'
import { Contact } from './components/contact/Contact'
import { Pricing } from './components/pricing/Pricing'
import { Team } from './components/team/Team'

const App = () => {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Journal/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
