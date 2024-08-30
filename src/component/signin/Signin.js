import React from 'react';
import './Signin.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input,Label, Button } from 'reactstrap';
import Signinimg from "../../images/signin/signinimg.png"
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Signin() {
    return (
        <div className="Signin">
            <Topheader />
            <Header />
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="signin-main">
                            <div className="signin-img">
                                <img src={Signinimg} alt={Signinimg} className="w-100" />
                            </div>
                            <div className="signin-form">
                                <h5 className="text-center font30">
                                    <b>Sign In</b>
                                </h5>
                                <Form>
                                    <FormGroup className="mb-3">
                                        <Label className="font14 mb-2"><b>Email Address <sup className="text-danger">*</sup></b></Label>
                                        <Input type="email" name="email" id="exampleEmail" autocomplete="off"/>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Label className="font14 mb-2"><b>Password <sup className="text-danger">*</sup></b></Label>
                                        <Input type="password" name="password" autocomplete="off"/>
                                    </FormGroup>
                                    <p className="font12 mb-0">Zoom Is Protected By Recaptcha And The <Link to="#">Privacy Policy</Link> And <b>Terms Of Service</b> Apply. </p>
                                    
                                    <Button className="vmeet-btn-3 rounded text-white w-100"><b>Sign In</b></Button>

                                    <FormGroup>
                                    <p className="font12 mt-2"><Label check>
                                        <Input type="checkbox"/> Stay Signed In
                                        </Label> <span className="float-right">New To Zoom <Link to="/signupfirst">Sign Up Free</Link></span></p>
                                    </FormGroup>
                                    
                                    
                                    
                                    <Row className="row kpx_row-sm-offset-3 kpx_loginOr">
                                        <Col xs="12">
                                            <hr className="kpx_hrOr"/>
                                            <span className="kpx_spanOr">or</span>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <button className="vmeet-btn-5-google rounded text-white">Google</button>
                                    </div>
                                    <p className="font12 mt-2">By Signing In, I Agree To The <Link to="#">Privacy Policy</Link> And <Link to="#">Terms Of Service</Link>.</p>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default Signin;