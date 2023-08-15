import React from 'react'
import "./PouplerCourse.scss"
import { coursesCard } from '../../../dummydata'
export const PouplarCourse = ({page}) => {
  let count = 0;
  if(page === "Home"){
    count = 3;
  }else{
    count = 9;
  }
  return (
    <div className="pCourseContainer">
      {(page === "Home" &&  <div className="title">
            <h3>OUR COURSES</h3>
            <h1>Explore Our Popular Online Courses</h1>
        </div>   )}
       
        <div className="pCourses">
         {coursesCard.slice(0,count).map((course)=>{
            return(
                <div className="pCourse" key={course.id}>
                    <div className="pCourseDetails">
                    <div className="pCourseIcon">
                        <img src={course.cover} alt="" />
                    </div>
                    <div className="pCourseInfo">
                        <h1>{course.coursesName}</h1>
                        <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className="teacherInfo">
                        <div className="teacherDetail">
                            <img src={course.courTeacher[0].dcover} alt=''/>
                            <span>{course.courTeacher[0].name}</span>
                        </div>
                        <div className="teacherPrice">{course.courTeacher[0].totalTime}</div>
                      </div>
                    </div>
                    </div>
                    <div className="price">
                        {course.priceAll} / {course.pricePer}
                    </div>
                    <button className='pCourseBtn'>ENROLL NOW!</button>
                </div>
            )
         })}
        </div>
    </div>
  )
}
