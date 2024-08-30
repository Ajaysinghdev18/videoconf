import React, { useState } from 'react';
import Topheader from '../topheader/Topheader';
import './Profile.css';
import Header from '../header/Header';
import { Container, Col, Row } from 'reactstrap';
import Sidebar from '../profilesidebar/ProfileSidebar'
import ProfilePicture from '../images/Default profile With border.svg';
import Footer from '../footer/Footer'

function Profile() {
    return (
        <>
            <div className="profile">

                <Topheader />
                <Header />

                <div>
                    <Container className="note">
                        <Row>
                            <Col xs="12">
                                <p class="note_info">Note: As our world comes together to slow the spread of COVID-19 pandemic, the Vmeet Support Center has continued
                                to operate 24x7 globally to support you. Please see the updated<a href="#"> Support Guidelines during</a> these unprecedented times.
                            </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col xs="3">
                        <div className="bg-white shadow p-3 mt-5 rounded1">
                            <Sidebar />
                            </div>
                        </Col>
                        <Col xs="9">
                        <div className="bg-white shadow p-3 mt-5 rounded1">
                            <Row>
                                <Col xs="2">
                                    <img src={ProfilePicture} className="profilepicture" alt="profilepicture" />
                                </Col>
                                <Col xs="5">
                                    <h1>Eva John</h1>
                                </Col>
                            </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <Footer />
        </>
    )
}
export default Profile;