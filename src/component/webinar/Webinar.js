import React from 'react';
import './Webinar.css'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import MobileMeetings from '../../images/webinar/MobileMeetings.png'
import WebinaBG2 from '../../images/webinar/WebinaBG2.png'
import Footer from '../footer/Footer'

function Webinar() {
    return (
        <>
        <div className="webinar">
            <Topheader />
            <Header />
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
                            <h3 className="text-center mb-5">Webinar</h3>

                            <Row>
                                <Col xs="6">
                                    <h4><b>What is Webinar?</b></h4>
                                    <p>Zoom Video Webinars allow you to easily conduct large online events with video, audio and screen sharing for up to 100 video participants and 10,000 attendees</p>
                                    <p>The features in Webinar are tailored for managing large audiences with branding, registration, host controls, polls, question & answer, raise hand,</p>
                                </Col>

                                <Col xs="6">
                                        <div className="webinar-img">
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
                                        <h4 className="mt-5 text-white"><b>How is Webinar enabled?</b></h4>
                                        <p className="text-white">Webinar can be added to any paid plans such as Pro, Business or Edu</p>
                                        <p className="text-white">Go to your Webinar Add-On Plan, or contact your sales representative</p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="webinar-sec-bg text-center mt-5">
                                <Row>
                                    <Col xs="12">
                                        <h3>How Do I Start?</h3>
                                        <p className="m-0">On the User Management page, admin can enable Webinars for certain users with Edit User</p>
                                    </Col>
                                </Row>
                            </div>
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

export default Webinar;