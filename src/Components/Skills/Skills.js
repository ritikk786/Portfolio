import React from "react";
import html from '../../assets/img/html ritik.png'
import css from '../../assets/img/css ritik.png'
import react from '../../assets/img/react bb.png'
import js from '../../assets/img/jsb.png'
import reactbootstrap from '../../assets/img/react-bootstrap.png';
import firebase from '../../assets/img/firebase.png'
import redux from '../../assets/img/redux ritik.png'
import git from '../../assets/img/github.png'
import wordpress from '../../assets/img/wordpress logo.png';
import photshop from '../../assets/img/adobe-photoshop-logo-0.png'
const Skills = () => {
    return (
    
        <div className="skill-box" id='skills'>
            <h2>My Skills</h2>
            <div className="items">
                <div className="item">
                    <img src={html} width='45' height='45' alt='html' />
                </div>  
                <div className="item">
                    <img src={css} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={react} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={js} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={reactbootstrap} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={firebase} width='45' height='45' />
                </div>
                {/* <div className="item">
                    <img src={photshop} width='45' height='45' />
                </div> */}
                <div className="item">
                    <img src={redux} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={git} width='45' height='45' />
                </div>
                <div className="item">
                    <img src={wordpress} width='45' height='45' />
                </div>
               
            </div>
        </div>
     
    )
}
export default Skills;