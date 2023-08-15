import React from 'react'
import "./Heros.scss"
export const Heros = ({section,title}) => {
  return (
    
    <div className="heros" >
    <div className="heroInfo"> 
        <h3>{section}</h3>
       <h1>{title}</h1>
    </div>
    </div>
  )
}
