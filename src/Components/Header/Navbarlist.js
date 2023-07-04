import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rk from '../../assets/img/image-removebg-preview (1).png'
import logo from '../../assets/img/logo.svg'
import navicon1 from '../../assets/img/nav-icon1.svg'
import navicon2 from '../../assets/img/nav-icon2.svg'
import navicon3 from '../../assets/img/nav-icon3.svg'
import arrow1 from '../../assets/img/arrow1.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import {ArrowRightCircle} from 'react-bootstrap'
const Navbarlist = ()=>{
    // const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
     
    const onUpdateLink = (link)=>{
        setActiveLink(link)
    }
    useEffect(()=>{
        const onScroll = ()=>{

            if(window.scrollY){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll);

        return(()=>{
            window.removeEventListener('scroll',onScroll)
        })
    },[])

    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={rk} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='www.linkedin.com/in/ritikk786'><img src={navicon1} alt='linkedin'/></a>
                <a href='https://www.instagram.com/__ritik786/'><img src={navicon3} alt='instagram'/></a>
                <a href='https://github.com/ritikk786'><img src={navicon2} alt='github'/></a>
            </div>
           
            {/* <button className='vvd' ><span>Let's Connect</span></button> */}
            <a href='#connect'><span>Let's Connect</span></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}
export default Navbarlist;