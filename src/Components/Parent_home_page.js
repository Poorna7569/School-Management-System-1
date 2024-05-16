import React from 'react'
import Homestyle from './Home_style.module.css'
import { Link } from 'react-router-dom'

export default function Parent_home_page() {
  return (
   <>
<div className={Homestyle.Container}>
          <div className={Homestyle.item} id={Homestyle.inner_item1}>
          <h2>SCHOOL NAME</h2>
          <ul className={Homestyle.ul_list}>
            <Link to='/online' style={{textDecoration: 'none', color:'black'}}><li>Online Courses</li></Link>
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
          <h2 className={Homestyle.title_h2}>WELCOME TO PARENT PAGE</h2>
          </div>
          <div className={Homestyle.item} id={Homestyle.inner_item3}>Empty page</div>
          

       </div>


   </>
  )
}
