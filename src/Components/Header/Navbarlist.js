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
// import {ArrowRightCircle} from 'react-bootstrap'
const Navbarlist = ()=>{
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={navicon1} alt=''/></a>
                <a href='#'><img src={navicon2} alt=''/></a>
                <a href='#'><img src={navicon3} alt=''/></a>
            </div>
            <button className='vvd'><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}
export default Navbarlist;