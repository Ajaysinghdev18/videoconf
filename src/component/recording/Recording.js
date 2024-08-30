import React, { useState } from 'react';
import classnames from 'classnames';
import './Recording.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { Link } from "react-router-dom";
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import MobileMeetings from '../../images/webinar/MobileMeetings.png'
import WebinaBG2 from '../../images/webinar/WebinaBG2.png'
import Footer from '../footer/Footer'

function Recording() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
      <>
      
    <div className="Recording">

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
          <Row >
              <Col xs="3">
                <div className="bg-white shadow p-3 mt-5 rounded1">
                <ProfileSidebar />
                </div>
              </Col>

              <Col xs="9">

                  <div className="bg-white shadow p-3 rounded1 mt-5">
                      <h3 className="text-center mb-5">Recordings</h3>
                  <Nav tabs className="nav-justified rocording-tabs">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Cloud Recording
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Local Recording
                        </NavLink>
                    </NavItem>

                    
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                    
                        <div className="pt-5 pb-5">
                        <Row>
                                <Col xs="6 mt-5">
                                    <h4><b>What is Cloud Recording?</b></h4>
                                    <p>Cloud recording allows you to record meeting video (active speaker) and audio in the Zoom Cloud </p>
                                    <p>where the file can then be downloaded and/or streamed from a browser via HTML 5 or Flash.</p>
                                </Col>

                                <Col xs="6">
                                        <div className="webinar-img mt-5">
                                            <img src={WebinaBG2} alt={WebinaBG2} className="w-100"/>
                                        </div>
                                    </Col>
                            </Row>
                            
                            <div className="webinar-col-bg mt-5">
                                <Row>
                                    <Col xs="6">
                                        <div className="webinar-img">
                                            <img src={MobileMeetings} alt={MobileMeetings} className="w-100"/>
                                        </div>
                                    </Col>

                                    <Col xs="6">
                                        <h4 className="mt-5 text-white"><b>How is Cloud</b></h4>
                                        <p className="text-white">Cloud recording is available to paid subscribers. Go to your Cloud Recording Add-On Plan, or contact your sales representative.</p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="webinar-sec-bg text-center mt-5">
                                <Row>
                                    <Col xs="12">
                                        <h3>How Do I Start?</h3>
                                        <p className="m-0">Enable Cloud Recording on Your Account or contact your Account Executive. <br /> Enable Cloud Recording on your Profile Settings page. <br /> Start a meeting and click "Record" and select "Record to Cloud"</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col xs="12">
                                <div className="prweww-col pt-5 pb-5">
                                    <div className="content-view-meeting active-recording">
                                        <div className="meetingcol-1 text-center">
                                            <h6 className="m-0">05/10/2020</h6>
                                        </div>
                                        <div className="meetingcol-2">
                                            <h6 className="m-0">UI Designing</h6>
                                            
                                        </div>
                                        <div className="meetingcol-3">
                                            <Link to="#" className="mt-0 mr-10"><i className="fas fa-download"></i></Link>
                                        </div>
                                    </div>

                                    <div className="content-view-meeting">
                                        <div className="meetingcol-1 text-center">
                                            <h6 className="m-0">05/10/2020</h6>
                                        </div>
                                        <div className="meetingcol-2">
                                            <h6 className="m-0">UI Designing</h6>
                                            
                                        </div>
                                        <div className="meetingcol-3">
                                            <Link to="#" className="mt-0 mr-10"><i className="fas fa-download"></i></Link>
                                        </div>
                                    </div>
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
    <Footer/>
</>
  );
}
export default Recording;
