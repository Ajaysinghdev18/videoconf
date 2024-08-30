import React from 'react';
import './Signupfirst.css'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import Signupimg from "../../images/signin/signupimg.svg"
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import Footer from '../footer/Footer';


function Signupfirst() {
    return (
        <div className="Signin">
            <Topheader />
            <Header />
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="signin-main">
                            <div className="signin-img">
                                <img src={Signupimg} alt={Signupimg}  />
                            </div>
                            <div className="signin-form">
                                <h5 className="text-center font30">
                                    <b>Sign Up</b>
                                </h5>
                                <p className="font15 text-center"><b>For verification, please confirm your date of birth.</b></p>
                                <Form>
                                    <Row>
                                        <Col xs="4">  
                                            <FormGroup>
                                                <Input type="select" name="select">
                                                <option>Month</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="4">  
                                            <FormGroup>
                                                <Input type="select" name="select">
                                                <option>Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="4">  
                                            <FormGroup>
                                                <Input type="select" name="select">
                                                <option>Year</option>
                                                <option>2001</option>
                                                <option>2002</option>
                                                <option>2003</option>
                                                <option>2004</option>
                                                <option>2005</option>
                                                <option>2006</option>
                                                <option>2007</option>
                                                <option>2008</option>
                                                <option>2009</option>
                                                <option>2010</option>
                                                <option>2011</option>
                                                <option>2012</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="p-5">
                                        <FormGroup className="mb-3">
                                            <Label className="font14 mb-2"><b>Work Email Address <sup className="text-danger">*</sup></b></Label>
                                            <Input type="email" name="email" id="exampleEmail" autocomplete="off"/>
                                        </FormGroup>
                                        
                                        <p className="font12 mb-0">Zoom Is Protected By Recaptcha And The Privacy Policy And Terms Of Service Apply</p>
                                        <Button className="vmeet-btn-3 rounded text-white w-100 btn-block"><b>Sign Up</b></Button>
                                        <p className="font12 mt-2 text-center"> Already Have An Account? <Link to="/signin">Sign in</Link></p>
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
                                    
                                    </div>
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

export default Signupfirst;