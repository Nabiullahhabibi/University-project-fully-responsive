

import React from 'react'
import { Heros } from '../common/heros/Heros'
import { PouplarCourse } from '../home/pouplerCourse/PouplarCourse'
import { OnlineCourse } from '../home/onlineCourse/OnlineCourse'

export const Courses = () => {
  return (
    <div className="coursesContainer">
        <Heros title="Explore Courses" section="HOME / COURSES"/>
        <PouplarCourse page="Course" />
        <OnlineCourse/>
    </div>
  )
}
