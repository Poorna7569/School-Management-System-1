import React from "react";
import Header_style from "./Header.module.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={Header_style.body}>
        <div className={Header_style.head}>
          <div className={Header_style.logo}>
            <img
              src="https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg"
              alt=""
            />
          </div>
          <div>
            <nav className={Header_style.nav_home}>
             <Link to='' style={{textDecoration:'none'}}><span className={Header_style.home}>HOME</span></Link>
             <Link to='/portfolio' style={{textDecoration:'none'}}><span className={Header_style.portfolio}>PORTFOLIO</span></Link>
             <Link to='/contactus' style={{textDecoration:'none'}}><span className={Header_style.contactus}>CONTACT US</span></Link> 
             <Link to='/online_admission' style={{textDecoration:'none'}}><span className={Header_style.contactus}>ONLINE ADMISSION</span></Link> 
            </nav>
          </div>
          <div className={Header_style.userlogo}>
           <Link to='/user' style={{textDecoration:'none',color:'black'}} ><FaUser id={Header_style.person_icon} /></Link> 
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
};

export default Header;
