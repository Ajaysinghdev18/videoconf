import React, { useState } from 'react';
import { Alert, Col, Container, Row, Form, FormGroup, Input, Nav, NavItem, Button } from 'reactstrap';
import './Pricing.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Seemorestory from '../seemorestory/Seemorestory';
import Brandslider from '../brandslider/Brandslider';
import Topheader from '../topheader/Topheader';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';

const Pricing = (props) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [activeTab1, setActiveTab1] = useState();
    const toggle1 = tab => {
        if(activeTab1 !== tab) setActiveTab1(tab);
    }

    return (
        <>
        <Topheader/>
            <Header/>
            <Container>
                <Alert color="info" isOpen={visible} toggle={onDismiss}>
                    Special Offer: New to Vmeet? Sign up  for a Pro Annual plan with ZOOMCARES today and enjoy an additional 20% discount- that’s a $60 savings. 
                    <Link to="#" className="upgrade">Upgrade to annual</Link>
                </Alert>
            </Container>
        
            <div className="topPricing">
                <Container>
                    <h2 className="center ">Choose A Plan</h2>
                    <span className="unLine"></span>
                    <Row>
                        <Col md={6} xs={12}>
                            <h3>Find the right solution for your needs.</h3>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="right">
                                <span className="font18 mr-16 text">Plan</span>
                                <span className="priLength">
                                    <Link to="#" className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Monthly</Link> 
                                    <Link to="#" className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Yearly</Link>
                                </span>
                                <span className="font18 mr-16 text">Currancy</span>
                                <span className="myCurrancy">
                                    <Form>
                                        <FormGroup>
                                            <Input type="select" name="select" id="currency" caret>
                                                <option selected>Rupee ₹</option>
                                                <option>USA $</option>
                                            </Input>
                                        </FormGroup>
                                    </Form>
                                </span>
                                
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div id="priceCard" className={classnames({ active: activeTab1 === '3' })} >
                                <div className="pricecardHead">
                                    <h2>Basic</h2>
                                    <br/>
                                    <p>Personal Meeting</p>
                                    <h2 className="rs">Free</h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" /> Host up to 100 participants</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />40-minute maximum group meetings</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Unlimited 1:1 Meetings</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <p>
                                        *Free, forever. No credit cards required
                                    </p>
                                    <Button onClick={() => { toggle1('3'); }}>Sign Up, Its Free</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div id="priceCard" className={classnames({ active: activeTab1 === '4' })} >
                                <div className="pricecardHead">
                                    <h2>PRO</h2>
                                    <br/>
                                    <p>Great for Small Teams</p>
                                    <h2 className="rs">₹13,200<small>/year/license</small></h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Host up to 100 participants</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Unlimited group meetings</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Social Media Streaming</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />1 GB Cloud Recording (per license)</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <p>
                                    *Purchase up to 9 licenses per account
                                    </p>
                                    <Button onClick={() => { toggle1('4'); }}>Buy Now</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div id="priceCard" className={classnames({ active: activeTab1 === '5' })} >
                                <div className="pricecardHead">
                                    <h2>BUSINESS</h2>
                                    <br/>
                                    <p>Small & Med Businesses</p>
                                    <h2 className="rs">₹17,700<small>/year/license</small></h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Host up to 300 participants</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Single Sign-On</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Cloud Recording Transcripts</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Managed Domains</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Company Branding</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <p>
                                    *Starting at 10 licenses for ₹177,000/year
                                    </p>
                                    <Button onClick={() => { toggle1('5'); }}>Buy Now</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div id="priceCard" className={classnames({ active: activeTab1 === '6' })} >
                                <div className="pricecardHead">
                                    <h2>ENTERPRISE</h2>
                                    <br/>
                                    <p>Large Enterprise-Ready</p>
                                    <h2 className="rs">₹17,700<small>/year/license</small></h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Host up to 500 participants</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Host up to 1,000 Participants with an Enterprise+ Plan</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Unlimited Cloud Storage</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Dedicated Customer Success Manager</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Transcription</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <p>
                                    *Starting at 100 licenses for ₹1,770,000/year
                                    </p>
                                    <Button onClick={() => { toggle1('6'); }}>Contact Sales</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} className="center">
                            <Link to="#" className="compareBtn">Compare Now</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="addOnplans">
                <Container>
                    <Row>
                        <Col md={4} sm={6} xs={12}>
                            <div id="priceCard">
                                <div className="pricecardHead" id="firsthead">
                                    <h2>Audio Plan</h2>
                                    <br/>
                                    <p>Starting at </p>
                                    <h2 className="rs">₹120,000 per year</h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <p>
                                        <b>Audio Plan starts at ₹10,000/month and is billed based on the rates per call per country. If you exceed the ₹10,000/ 
                                        month commitment for calls, you will be charged overage usage based on the rates listed.</b>
                                        </p>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />All paid plans come with local toll numbers, but Audio <br/> 
                                        Plan allows you to add Call Out, global Toll-free and local dial-in for premium countries</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />No charge to your participants to call in from any device</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Easily select one or multiple countries for Toll-free call-in</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <Button id="buynow">Buy Now</Button>
                                    <Button id="learnmore">Learn</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div id="priceCard">
                                <div className="pricecardHead" id="secondhead">
                                    <h2>Large Meetings</h2>
                                    <br/>
                                    <p>Starting at</p>
                                    <h2 className="rs">₹120,000 per year</h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Easily select one or multiple countries for Toll-free call-in</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Include up to 500 or 1,000 interactive participants in a meeting</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Monthly and annual billing options available</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <Button id="buynow">Buy Now</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div id="priceCard">
                                <div className="pricecardHead" id="thirdhead">
                                    <h2>Cloud Storage</h2>
                                    <br/>
                                    <p>Starting at</p>
                                    <h2 className="rs">₹30,000 per year</h2>
                                </div>
                                <div className="pricecardBody">
                                    <Nav>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Store, stream and download your video recordings from the Vmeet Cloud</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />MP4 or M4A file formats available</NavItem>
                                        <NavItem><CheckCircleOutlineIcon className="mr-16" />Storage options include up to 3TB/month</NavItem>
                                    </Nav>
                                </div>
                                <div className="pricecardBottom">
                                    <Button id="buynow">Buy Now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Seemorestory />
            <div className="sldrSection">
                <Container>
                    <Brandslider/>
                </Container>
            </div>
            <Faq/>
            <Footer/>
        </>
    )
}

export default Pricing
