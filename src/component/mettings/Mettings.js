import React, { useState } from 'react';
import classnames from 'classnames';
import './Mettings.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { Link } from "react-router-dom";
import { Container, Row, Col, TabContent, Card, CardTitle, CardText, TabPane, Nav, NavItem, NavLink, CustomInput, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import Nomeeting from '../../images/meeting/Nomeeting.svg'
import Footer from '../footer/Footer'

function Mettings() {
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

      <Container className="mb-150">
          <Row>
              <Col xs="3">
                <div className="bg-white shadow p-3 mt-5 rounded1">
                <ProfileSidebar />
                </div>
              </Col>

              <Col xs="9">

                  <div className="bg-white shadow p-3 rounded1 mt-5">
                      <h3 className="text-center mb-5">Meetings</h3>
                  <Nav tabs className="nav-justified">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Upcoming
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Previous
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Personal Meetings
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Meeting Templates
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col xs="6">
                                <div className="meetingtimebtn">
                                <p className="m-0"> <Link to="#" className="vmeet-btn-3-outline rounded">Start Time to End Time</Link></p>
                                </div>
                            </Col>
                            <Col xs="6">
                                <div className="sedulemetting text-right">
                                    <Link to="#" className="vmeet-btn-5 rounded text-white">Schedule a Meeting</Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <div className="nometting text-center pt-5 pb-5">
                                    <img src={Nomeeting} alt={Nomeeting}  className="w-25"/>
                                    <h5 className="mt-3"><b>The user does not have any upcoming meetings.</b></h5>
                                    <h5><b>To schedule a new meeting click Schedule a Meeting.</b></h5>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12">
                                <div className="full-content-view pt-5 pb-5">
                                    <div className="content-view-meeting">
                                        <div className="meetingcol-1 text-center">
                                            <p className="m-0">Tuesday</p>
                                            <h6>05/10/2020</h6>
                                        </div>
                                        <div className="meetingcol-2">
                                            <h6 >UI Requirement</h6>
                                            <p className="m-0 font12">***********439 <Link to="#">Show</Link></p>
                                            <p className="m-0 font12">https://zoom.us/j/*******439?pwd=******** <Link to="#">Show</Link></p>
                                        </div>
                                        <div className="meetingcol-3">
                                            <Link to="#" className="text-danger mt-0 mr-10">Delete</Link>
                                            <Link to="#" className="vmeet-btn-3-outline rounded mt-0 mr-10">Edit</Link>
                                            <Link to="#" className="vmeet-btn-5 rounded mt-0">Start</Link>
                                        </div>
                                    </div>

                                    <div className="content-view-meeting">
                                        <div className="meetingcol-1 text-center">
                                            <p className="m-0">Wednesday</p>
                                        </div>
                                        <div className="meetingcol-2">
                                            <h6 >Wireframing</h6>
                                            <p className="m-0 font12">06-10-2020 | 15:30 - 16:00</p>
                                        </div>
                                        <div className="meetingcol-3">
                                            <Link to="#" className="text-danger mt-0 mr-10">Delete</Link>
                                            <Link to="#" className="vmeet-btn-3-outline rounded mt-0 mr-10">Edit</Link>
                                            <Link to="#" className="vmeet-btn-5 rounded mt-0">Start</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <p>Comming Sooooon...</p>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="3">
                    <Row>
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
                                                    <Label><b>Meeting Options</b></Label>
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
                    </TabPane>

                    <TabPane tabId="4">
                    <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <p>Comming Sooooon...</p>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                  </div>
              </Col>
          </Row>
      </Container>
      <Footer />
    </div>
</>
  );
}
export default Mettings;
