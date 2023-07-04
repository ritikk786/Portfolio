import React, { forwardRef, useState } from "react"
import image from '../../assets/img/contact-img.svg'
import { Col, Container, Row } from "react-bootstrap"
import download from '../../assets/img/download.svg'
// import resume from '../../assets/'
const ContactForm = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetais] = useState(initialState)
    const [buttonState, setButtonState] = useState('Send')
    const [status, setStatus] = useState({})
    const onupdateValue = (category, value) => {
        setFormDetais({
            ...formDetails,
            [category]: value,
        })
    }

    const submithandler = async (e) => {
        e.preventDefault()
        setButtonState('Sending...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        })
        setButtonState('Send');
        let data = await response.json();
        setFormDetais(initialState)
        if (data.code === 200) {
            setStatus({ sucess: true, message: 'Message sent successfully' })
        }
        else {
            setStatus({ sucess: false, message: 'Something went wrong' })
        }
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={image} alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="https://formspree.io/f/mleyrqvp" method="post">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" name='firstname' onChange={(e) => onupdateValue('firstName', e.target.value)} />

                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" name="lastname" onChange={(e) => onupdateValue('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Email" name="email" onChange={(e) => onupdateValue('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Phone Number" name="phone" onChange={(e) => onupdateValue('phone', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows={10} placeholder="message" name="message" onChange={(e) => onupdateValue('message', e.target.value)}></textarea>
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
                <a className="resume-conainer-file" href="ritikk786.pdf" download="ritik's resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                    </svg>
                    <span style={{marginLeft:'10px'}}>Download</span> </a>
            </div>
        </section>
    )
}
export default ContactForm;