

import React from 'react'
import { Heros } from '../common/heros/Heros'
import { team } from '../../dummydata'
import "./Team.scss"

export const Team = () => {
  return (
    <div className="teamContainer">
        <Heros title="TEAM" section="HOME / TEAM"/>
        <div className="team">
         {team.map((member)=>{
            return(
                <div className="member" key={member.cover}>
                    <div className="memberImage">
                        <img src={member.cover} alt="" />
                        <div className='overlay'>
                          <i className='fab fa-facebook-f icon'></i>
                          <i className='fab fa-twitter icon'></i>
                          <i className='fab fa-instagram icon'></i>
                          <i className='fab fa-tiktok icon'></i>
                        </div>
                    </div>
                <div className="memberDetails">
                  <h1>{member.name}</h1>
                  <p>{member.work}</p>
                </div>
                
                </div>
              
            )
         })}
        </div>
    </div>
  )
}
