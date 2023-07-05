import React from "react";
import rk from '../assets/img/image-removebg-preview (1).png'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'
const Footer = () =>{
    return (
        <footer>
            <div className="footer-container">
               <img src={rk} alt="footer-image"/>
               <p>&#169; Copyright 2023 Ritik Kumar</p>
               <div className='social-icon'>
               <a href='https://www.linkedin.com/in/ritikk786' target="_blank"><img src={navicon1} alt='linkedin'/></a>
                <a href='https://www.instagram.com/__ritik786/' target='_blank'><img src={navicon3} alt='intagram'/></a>
                <a href='https://github.com/ritikk786' target="_blank"><img src={navicon2} alt='github'/></a>
               </div>
            </div>
        </footer>
    )
}
export default Footer;