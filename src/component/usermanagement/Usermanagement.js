import React, { useState } from 'react';
import './Usermanagement.css'

import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import Footer from '../footer/Footer'


function Usermanagement() {
    
  return (
      <>
      
    <div className="Usermanagement">

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
                    <div className="bg-white shadow p-5 rounded1 mt-5">
                        <h3 className="text-center mb-5">User Management</h3>
                        <p>To access this feature, you will be asked to verify your identity via credit card. You will not be charged until you select a subscription plan.</p>
                        
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col xs="3">
                                        <Label><b>Currency</b></Label>
                                    </Col>
                                    <Col xs="4">
                                        <Input type="select">
                                            <option>Indian Ruppee</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <h4 className="mt-3"><b>Billing</b></h4>
                            <FormGroup className="mt-3">
                                <Row>
                                    <Col xs="6">
                                        <Label>First Name</Label>
                                        <Input type="text" placeholder="Eva"/>
                                    </Col>
                                    <Col xs="6">
                                        <Label>Last Name</Label>
                                        <Input type="text" placeholder="Joan"/>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Email</Label>
                                <Input type="email" placeholder="evajoan@exmple.com" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Email 2</Label>
                                <Input type="email" placeholder="Additiona Email" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Phone Number</Label>
                                <Input type="text" placeholder="+91 999222222" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Row>
                                    <Col xs="6">
                                        <Label>Company / Organisation Name</Label>
                                        <Input type="text" placeholder="Company name"/>
                                    </Col>
                                    <Col xs="6">
                                        <Label>Total Employee Count</Label>
                                        <Input type="select" >
                                            <option>1000</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Address</Label>
                                <Input type="text" placeholder="Address Line 1" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Apt/Suit</Label>
                                <Input type="text" placeholder="Appartment / Suit Name" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Row>
                                    <Col xs="6">
                                        <Label>City</Label>
                                        <Input type="text" placeholder="City name"/>
                                    </Col>
                                    <Col xs="6">
                                        <Label>Select State</Label>
                                        <Input type="select" >
                                            <option>State name</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Row>
                                    <Col xs="4">
                                        <Label>Zip</Label>
                                        <Input type="text" placeholder="Zipcode"/>
                                    </Col>
                                    <Col xs="8">
                                        <Label>Country Name</Label>
                                        <Input type="select" >
                                            <option>India</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                 <Row>
                                    <Col xs="3">
                                        <Label>Sold To Contact</Label>
                                    </Col>
                                    <Col xs="9">
                                        <Label check>
                                            <Input type="checkbox" checked/> Same as Bill To Contact
                                        </Label>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <hr />

                            <h4 className="mt-3"><b>Payment Method</b></h4>

                            <FormGroup className="mt-3">
                                 <Row>
                                    <Col xs="3">
                                        <Label>Full Address</Label>
                                    </Col>
                                    <Col xs="9">
                                        <Label check>
                                            <Input type="checkbox" checked/> Same as Bill To Contact
                                        </Label>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Card Holder Name</Label>
                                <Input type="text" placeholder="Name" />
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Credit Card Number</Label>
                                <Input type="text" placeholder="**** **** **** ****"/>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>CVV</Label>
                                <Input type="text" placeholder="Name"/>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <Label>Expiration Date</Label>
                                <Row>
                                    <Col xs="6">
                                        <Input type="select" >
                                            <option>Select 1</option>
                                        </Input>
                                    </Col>
                                    <Col xs="6">
                                        <Input type="select" >
                                            <option>Select 1</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup className="mt-3">
                                <div className="meetingsubmitbutton">
                                    <p className="m-0"><Link to="#" className="vmeet-btn-5 rounded text-white">Update</Link></p>
                                </div>
                            </FormGroup>

                            
                        </Form>
     
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
export default Usermanagement;
