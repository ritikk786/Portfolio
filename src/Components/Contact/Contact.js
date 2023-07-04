import React, { forwardRef, useState } from "react"
import image from '../../assets/img/contact-img.svg'
import { Col, Container, Row } from "react-bootstrap"
// import resume from '../../assets/'
const ContactForm = ()=>{
    const initialState = {
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        message : '',
    }
    const [formDetails, setFormDetais] = useState(initialState)
    const [buttonState, setButtonState] = useState('Send')
    const [status, setStatus] = useState({})
    const onupdateValue = (category, value)=>{
        setFormDetais({
            ...formDetails,
            [category] : value,
        })
    }

    const submithandler = async (e)=>{
        e.preventDefault()
        setButtonState('Sending...')
        let response = await fetch('http://localhost:5000/contact',{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json;charset=utf-8"
            },
            body : JSON.stringify(formDetails),
        })
        setButtonState('Send');
        let data = await response.json();
        setFormDetais(initialState)
        if(data.code === 200){
            setStatus({sucess:true, message:'Message sent successfully'})
        }
        else{
            setStatus({sucess:false, message:'Something went wrong'})
        }
    }
    return(
       <section className="contact" id="connect">
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={image} alt="contact us"/>
                </Col>
                <Col md={6}>
                   <h2>Get In Touch</h2>
                   <form action="https://formspree.io/f/mleyrqvp" method="post">
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" placeholder="First Name" name='firstname' onChange={(e)=> onupdateValue('firstName',e.target.value)}/>
                            
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="text" placeholder="Last Name"  name="lastname" onChange={(e)=> onupdateValue('lastName',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                             <input type="email" placeholder="Email" name="email" onChange={(e)=> onupdateValue('email',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="tel" placeholder="Phone Number" name="phone" onChange={(e)=> onupdateValue('phone',e.target.value)}/>
                        </Col>
                        <Col sm={12} className="px-1">
                        <textarea rows={10} placeholder="message"  name="message" onChange={(e)=> onupdateValue('message',e.target.value)}></textarea>
                           <button type="submit"><span>{buttonState}</span></button>
                        </Col>
                        {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    </Row>
                   </form>
                </Col>
            </Row>
        </Container>
        <div className="resume-container">
                    <h2>Download Ritik's Resume</h2>
                    <a className="resume-conainer-file" href="ritik.resume.sharpener.pdf"  download="ritik's resume">Download</a>
        </div>
       </section>
    )
}
export default ContactForm;