import React from 'react'
import "./OnlineCourse.scss"
import { online } from '../../../dummydata'
export const OnlineCourse = () => {
  return (
    <div className="OcourseContainer">
        <div className="OcourseTitle">
            <h3>COURSES</h3>
            <h1>Browes Our Online Courses</h1>
        </div>
        <div className="Ocourses">
         {online.map((course)=>{
            return(
                <div className="Ocourse" key={course.courseName}>
                    <div className="OcourseIcon">
                        <img src={course.cover} alt="" className='public'/>
                        <img src={course.hoverCover} alt='' className='hover' />

                    </div>
                    <div className="OcourseName">
                        <span>{course.courseName}</span>
                    </div>
                    <div className="totalCourses">
                        <span>{course.course}</span>
                    </div>
                    </div>
           
            )
         })}
        </div>
    </div>
  )
}
