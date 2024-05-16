import React from 'react'
import Homestyle from './Home_style.module.css'

export default function Online_courses() {
  return (
   <>
   
<div className={Homestyle.Container}>
          <div className={Homestyle.item} id={Homestyle.inner_item1}>
          <h2>SCHOOL NAME</h2>
          <ul className={Homestyle.ul_list}>
            <li>Online Courses</li>
            <li>Class Time Table</li>
            <li>Home Work</li>
            <li>Apply Leave</li>
            <li>Syllabus </li>
            <li>Exams(mock test also)</li>
            <li>Results</li>
            <li>Notice Board</li>
          </ul>
          </div>
          <div className={Homestyle.item} id={Homestyle.inner_item2}>
          <h2 className={Homestyle.title_h2}>ONLINE COURSE</h2>
          </div>
          <div className={Homestyle.item} id={Homestyle.inner_item3}>Loading.......</div>
          

       </div>

   </>
  )
}
