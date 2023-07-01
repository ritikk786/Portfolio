import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import headerimg from '../../assets/img/header-img.svg'
import Skills from "../Skills/Skills";

const Banner = ()=>{
    const toRotate = [`Hi i'm Ritik Kumar`,`I'm Frontend Developer`, `I'm Web Designer`]
    const [loopindex, setLoopindex] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(80)
    const period = 1000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta)
        return(()=>{
            clearInterval(ticker)
        })
    },[text])
    const tick= ()=>{
        let i = loopindex % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
        setText(updatedText)

        if(isDeleting){
            setDelta((prev)=> prev/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false)
            setLoopindex(loopindex + 1);
            setDelta(80)
        }
    }
    return(
        <section className="banner" id="home">
            <Container >
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} style={{minHeight: '18rem'}}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{``}<span className="wrap">{text}</span></h1>
                </Col>
            <Col xs={12} md={6} xl={5} >
                <img id="main" src={headerimg} alt='statue'/>
            </Col>
            </Row>
            </Container>
            {/* <Skills/> */}
        </section>
    )
}
export default Banner;