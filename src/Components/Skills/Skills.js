import React from "react";
import html from '../../assets/img/image-removebg-preview (2).png'
import css from '../../assets/img/css.png'
const Skills = () =>{
    return(
        <div className="skill-box">
            <h2>Skills</h2>
            <div className="items">
            
                <img src={html} width='45' height='45'/>

            
                <img src={css} width='45' height='45'/>

            </div>
        </div>
    )
}
export default Skills;