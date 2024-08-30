import React, { useState } from 'react';
import classnames from 'classnames';
import './Security.css'
import { Link } from "react-router-dom";
import { Container, Row, Col, TabContent,  TabPane, Nav, NavItem, NavLink, Form, FormGroup,CustomInput } from 'reactstrap';
import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import { Navigation } from 'react-minimal-side-navigation';
import Footer from '../footer/Footer'


function Security() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
      <>
      
    <div className="Security">

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
                      <h3 className="text-center mb-5">Security</h3>
                  <Nav tabs className="nav-justified rocording-tabs">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Meeting
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Recording
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Telephone
                        </NavLink>
                    </NavItem>

                    
                </Nav>
                <Row>
                    <Col xs="4">
                        <div className="nav-inner-style mt-5">
                        <Navigation
                    items={
                        [
                            {
                                title: 'Security',
                                itemId: '/security',
                            },

                            {
                                title: 'Schedule Meeting',
                                itemId: '/schedulemeeting',
                            },
                            {
                                title: 'In Meeting (Basic)',
                                itemId: '/inmeeting',
                            },
                            {
                                title: 'In Meeting (Advanced)',
                                itemId: '/inmeetingadvanced',
                            },
                            {
                                title: 'Email Notification',
                                itemId: '/emailnotification',
                            },
                            {
                                title: 'Other',
                                itemId: '/other',
                            },
                        ]}
                />
                        </div>
                    
                    </Col>
                    <Col xs="8">
                    <TabContent activeTab={activeTab}>
                    
                    <TabPane tabId="1">
                    
                        <div className="pt-5 pb-5">
                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" />
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>


                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" />
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" checked />
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="switch" />
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        
                        </div>
                    
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <p>Comming Sooon...</p>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="3">
                        <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <p>Comming Sooon...</p>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>

                    
                </TabContent>
                    </Col>
                </Row>
                
                  </div>
              </Col>
          </Row>
      </Container>
      <Footer />
    </div>
    <Footer/>
</>
  );
}
export default Security;
