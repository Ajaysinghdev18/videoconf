import React, { useState } from 'react';
import classnames from 'classnames';
import './Billing.css';

import { Link } from "react-router-dom";
import { Container, Row, Col, TabContent, Card, CardTitle, CardText, TabPane, Nav, NavItem, NavLink, CustomInput, Form, FormGroup, Label, Input, Button, CardImg, CardBody,CardSubtitle } from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import Nomeeting from '../../images/meeting/Nomeeting.svg'
import Pending from './pending/Pending';
import BillingInfo from './billing-info/BillingInfo';
import InvoiceHistory from './invoice-history/InvoiceHistory'
import Footer from '../footer/Footer'


function Billing() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
      <>
      
    <div className="Mettings">

    <Topheader/>
      <Header/>

      <Container>
          <Row>
              <Col className="xs=12">
                  <div className="top-textmeetings mt-5">
                      <p className="m-0">Note: As our world comes together to slow the spread of COVID-19 pandemic, the Vmeet Support Center has continued <br />to operate 24x7 globally to support you. Please see the updated <Link to="#" className="text-warning"><b>Support Guidelines</b></Link> during these unprecedented times.</p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container>
          <Row>
              <Col xs="3">
                <div className="bg-white shadow p-3 mt-5 rounded1">
                <ProfileSidebar />
                </div>
              </Col>

              <Col xs="9">

                  <div className="bg-white shadow p-3 rounded1 mt-5">
                      <h3 className="text-center mb-5">Billing</h3>
                  <Nav tabs className="nav-justified">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Current
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Pending
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Billing Info
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Invoice History
                        </NavLink>
                    </NavItem>
                </Nav>
                
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Container>
                        <Row>
                            <Col xs="12" className="basic_plan">
                                <div>
                                    <h5>You are currently on a Basic Plan (Free)</h5>
                                
                                </div>
                            </Col>
                        </Row>
                        </Container>
                        
                        <Container>
                            <Row>
                                <Col xs="6" >
                                    <Card className="plan">
                                        <div className="cardtop">
                                        <h4>Basic</h4>
                                        <h6>Personal Metting</h6>
                                        <h3>Free</h3>
                                        </div>
                                        <CardBody>
                                        <h6>Host up to 100 participants</h6>
                                        <h6>40-minute maximum group meetings</h6>
                                        <p>Unlimited 1:1 Meetings</p>
                                        <span> *Free, forever. No credit cards required</span>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xs="6" className="text-center">
                                    <h5>Need more than 40 minutes?</h5>
                                    <span>Upgrade now for unlimited group meetings and other advanced features</span><br></br>
                                    <Button color="primary" className="upgradebtn">Upgrade Account</Button>
                                </Col>
                            </Row>
                        </Container>
                    
                    </TabPane>
                    
                    <TabPane tabId="2">

                        <Pending/>
                        {/* <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <p>Comming Sooooon...</p>
                                </div>
                            </Col>
                        </Row> */}
                    </TabPane>

                    <TabPane tabId="3">
                        <BillingInfo/>
                    {/* <Row>
                            <Col sm="12">
                                <div className="she-meeting pt-5 pb-5">
                                    <h5 className="mb-5">Schedule a Meeting</h5>
                                    <Form>
                                        <FormGroup>
                                            <Row>
                                                <Col xs="3">
                                                    <Label><b>Topic</b></Label>
                                                </Col>
                                                <Col xs="9">
                                                    <Input type="text" placeholder="My Meeting" />
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                    <Label><b>When</b></Label>
                                                </Col>
                                                <Col xs="5">
                                                    <Input type="date" />
                                                </Col>
                                                <Col xs="2">
                                                    <Input type="select">
                                                        <option>2</option>
                                                    </Input>
                                                </Col>

                                                <Col xs="2">
                                                    <Input type="select">
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                    <Label><b>Duration</b></Label>
                                                </Col>
                                                
                                                <Col xs="5">
                                                    <Input type="select">
                                                        <option>2 Hrs</option>
                                                    </Input>
                                                </Col>

                                                <Col xs="4">
                                                    <Input type="select">
                                                        <option>30 Min</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                    <Label><b>Time Zone</b></Label>
                                                </Col>
                                                
                                                <Col xs="9">
                                                    <Input type="select">
                                                        <option>(GMT + 5:30) India</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                </Col>
                                                
                                                <Col xs="9">
                                                    <Label check>
                                                        <Input type="checkbox" checked/> Check me out
                                                    </Label>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <hr />

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                    <label><b>Video</b></label>
                                                </Col>
                                                
                                                <Col xs="9">
                                                    <Label check>
                                                        <Input type="checkbox"/> Host
                                                    </Label>
                                                    <br />

                                                    <Label check>
                                                        <Input type="checkbox" checked/> Participant
                                                    </Label>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <hr />

                                        <FormGroup className="mt-3">
                                            <Row>
                                                <Col xs="3">
                                                    <label><b>Meeting Options</b></label>
                                                </Col>
                                                
                                                <Col xs="9">
                                                    <Label check>
                                                        <Input type="checkbox" checked/> Enable join before host
                                                    </Label>

                                                    <br />

                                                    <Label check>
                                                        <Input type="checkbox"checked /> Mute participants upon entry
                                                    </Label>

                                                    <br />

                                                    <Label check>
                                                        <Input type="checkbox" checked/> Automatically record meeting on the local computer
                                                    </Label>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className="mt-3">
                                            <div className="meetingsubmitbutton">
                                            <p className="m-0"><Link to="#" className="vmeet-btn-5 rounded">Start</Link> <Link className="vmeet-btn-3-outline rounded">Cancel</Link></p>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Col>
                            
                        </Row>
                     */}
                    </TabPane>

                    <TabPane tabId="4">
                       <InvoiceHistory/>
                    </TabPane>
                
                </TabContent>
                  </div>
              </Col>
          </Row>
      </Container>
    </div>
    <Footer/>
</>
  );
}
export default Billing;
