import { Button, Col, Row } from 'react-bootstrap'
import expensetracker from '../../assets/img/expensetracker.png'
import genric from '../../assets/img/genric store.png'
import mailbox from '../../assets/img/mailbox.png'
import './Project.css'
const Projects = ()=>{
    return(
        
        <div className='project-box' id='Projects'>
            <h2>Projects</h2>
            <p>Here is the list of my project, that i have created during my course</p>
           
            <Row className="project-card">
             
                <Col xs={12} md={6} xl={7} className="project-image">
                    <img src={expensetracker} />
                </Col>
                <Col xs={12} md={6} xl={5} className="project-description">
                    <h3>Expense Tracker</h3>
                    <p>
                       <ul>
                        <li>A React app that keep the track of expense done by a user.</li>
                        <li>Integrated Login or signup feature.</li>
                        <li>User can verify email, update profile, reset password</li>
                        <li>Added downloading feature which allows to download expense list</li>
                       </ul>
                        <div className='projectlink-container'>

                        <Button>Live</Button>
                        
                        </div>
                    </p>
                </Col>
             
            </Row>
               
            {/* 2nd project */}
            <Row className="project-card">
                <Col xs={12} md={6} xl={7} className="project-image">
                    <img src={mailbox} />
                </Col>
                <Col xs={12} md={6} xl={5} className="project-description">
                    <h3>Mailbox</h3>
                    <p>
                       <ul>
                       <li>A React app that allow send or receive emails.</li>
                        <li>Used google firebase for storing data.</li>
                        <li>User can see all the mails they have sent or receive</li>
                        <li>Integrated react-jodit text editor for composing the mails.</li>
                       </ul>
                        <Button>link</Button>
                    </p>
                </Col>
            </Row>
            {/* 3rd project */}
            <Row className="project-card">
                <Col xs={12} md={6} xl={7} className="project-image">
                    <img src={genric} />
                </Col>
                <Col xs={12} md={6} xl={5} className="project-description">
                    <h3>Genric Store</h3>
                    <p>
                       <ul>
                        <li>A simple React app to buy products.</li>
                        <li>Used Google firebase for user authentication.</li>
                        <li>Added Page protection to any unauthorized user.</li>
                        <li>Added a cart badge where user can see total number of cart items.</li>
                       </ul>
                        <Button>link</Button>
                    </p>
                </Col>
            </Row>
        </div>
        
    )
}
export default Projects;