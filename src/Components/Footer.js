import React from 'react'
import footer_style from './Footer_style.module.css'
import logo from '../images/SCHOOL LOGO.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <>
     
     <footer className={footer_style.footer}>
       
       <div className={footer_style.about_company}>
         <img className={footer_style.logo_img} src={logo}/>
         <h2 className={footer_style.company_h2}>SCHOOL NAME</h2>
           
         <FaFacebook  className={footer_style.icon}/>
         <FaInstagram className={footer_style.icon}/>
         
      </div>
       <div className={footer_style.search_something}>
         <h2>ADDRESS</h2>
         <p className={footer_style.address_p}><FiPhoneCall />+91 1234567890</p>
         <p className={footer_style.address_p}><FaEnvelopeOpenText />Name@gmail.com</p>
         <p className={footer_style.address_p}><FaLocationPin />location,Hyberabad-524005</p>
         
       </div>
       <div className={footer_style.opening_hours}>
         <h2>CONTACT CARE</h2>
        
           <p><Link to='/admin' style={{textDecoration:'none' ,color:'white'}}>Admin</Link></p>
           <p><Link to='/teacher' style={{textDecoration:'none' ,color:'white'}}>Teacher</Link></p>
           <p><Link to='/student' style={{textDecoration:'none' ,color:'white'}}>Student</Link></p>
           <p><Link to='/parent' style={{textDecoration:'none' ,color:'white'}}>Parent</Link></p>
           
           


       </div>
     
   </footer>
   </>
  )
}
