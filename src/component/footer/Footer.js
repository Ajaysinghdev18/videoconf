import React from 'react';
import './Footer.css';
import {BrowserRouter as Router, Link } from "react-router-dom";
import {
    Container,
    Form, FormGroup, Label, Input,Row, Col
} from 'reactstrap';
import Facebook from '../images/facebook.svg';
import Insta from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Linkedin from '../images/linkedin.svg';


const Footer = () => {
    return (
        <>
        <div className="footer">
            <Container>
                <div className="w_20">
                    <h4 className="white_color">ABOUT</h4>
                    <span className="underLine"></span>
                    <Router>
                        <Link to="/#">Blog</Link>
                        <Link to="/#">Customers</Link>
                        <Link to="/#">Our Team</Link>
                        <Link to="/#">Careers</Link>
                        <Link to="/#">Partners</Link>
                        <Link to="/#">Investors</Link>
                        <Link to="/#">Brand & Guidelines</Link>
                    </Router>
                </div>
                <div className="w_20">
                    <h4 className="white_color">DOWNLOAD</h4>
                    <span className="underLine"></span>
                    <Router>
                        <Link to="/#">Meetings Client</Link>
                        <Link to="/#">Outlook Plug-in</Link>
                        <Link to="/#">Browser Extension</Link>
                        <Link to="/#">iPhone/iPad App</Link>
                        <Link to="/#">Android App</Link>
                    </Router>
                </div>
                <div className="w_20">
                    <h4 className="white_color">SALES</h4>
                    <span className="underLine"></span>
                    <Router>
                        <Link to="/#">Contact Sales</Link>
                        <Link to="/#">Plan & Pricing</Link>
                        <Link to="/#">Request A Demo</Link>
                        <Link to="/#">Webinars and Events</Link>
                    </Router>
                </div>
                <div className="w_20">
                    <h4 className="white_color">SUPPORT</h4>
                    <span className="underLine"></span>
                    <Router>
                        <Link to="/#">Account</Link>
                        <Link to="/#">Support Center</Link>
                        <Link to="/#">Live Training</Link>
                        <Link to="/#">Feedback</Link>
                        <Link to="/#">Contact Us</Link>
                        <Link to="/#">Privacy & Security</Link>
                    </Router>
                </div>
                <div className="w_20 inline">
                    <h4 className="white_color">OTHERS</h4>
                    <span className="underLine"></span>
                    <Router>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Language</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>English</option>
                                    <option>Hindi</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Currency</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>USA Dollar $</option>
                                    <option>Indian Rupees ₹</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <Link to="/#"><img src={Facebook} alt={Facebook} /></Link>
                        <Link to="/#"><img src={Insta} alt={Insta} /></Link>
                        <Link to="/#"><img src={Twitter} alt={Twitter} /></Link>
                        <Link to="/#"><img src={Linkedin} alt={Linkedin} /></Link>
                    </Router>
                </div>
            </Container>
        </div>
        
        <div className="bottomFooter">
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <p className="white_color">Copyright ©2020 Vmeet Communications, Inc. All rights reserved.</p>
                </Col>
                <Col md={6} xs={12} className="right">
                    <p className="white_color">Powered by Helenzys</p>
                </Col>
            </Row>
        </Container>
    </div>
    </>
    )
}

export default Footer
