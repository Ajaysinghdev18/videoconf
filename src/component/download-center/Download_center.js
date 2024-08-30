
import './Download_center.css';

import {Button} from 'reactstrap';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';
import {Container, Col, Form, Row, FormGroup, Label, Input} from 'reactstrap';

import {BsChevronDown} from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { useState } from 'react';
import Footer from '../footer/Footer';



function Download_center () {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
            <>
            <div className="download_center">
                <Topheader />
                    <Header />
                <Container>
                    <Row className="download_center_heading mt-4">
                        <Col xs="6">
                            <h2 className="downcenter"> Download Center </h2>

                        </Col>
                        <Col xs="6" >
                            {/* <h5 className="font16 float-right">Download for It Admin <BsChevronDown/></h5> */}

                            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="float-right">
                                <DropdownToggle caret  id="Btntran">
                                 Download for It Admin 
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className="w-100">
                                        <h4>Vmeet Client For Meettings</h4>
                                        <p>Plug-in for Sharing iPhone/iPad included</p>
                                        <Button className="rounded" color="primary">Download MSI</Button>
                                    </DropdownItem>                                    
                                    <hr/>
                                    <DropdownItem className="w-100">
                                        <h4>Vmeet Mobile Apps</h4>
                                        <p>The web browser client will download automatically</p>
                                        <Button className="rounded" color="primary">Download MSI</Button>
                                    </DropdownItem>
                                    
                                    
                                </DropdownMenu>
                                </Dropdown>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="download_center_info">
                        <h3>Vmeet Client For Meettings</h3>
                        <Row className="download_center_detail">

                            <Col md={6} xs={12}>
                                <p className="font18">The web browser client will download automatically when you
                                    start or
                                    join your first Vmeet meeting, and is also available for manual download
                                    here.</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <p className="font18 center">Version 5.3.1 (52879.0927)</p>
                            </Col>
                            <Col md={2} xs={12} className="download_center_button right">
                                <Button color="primary" className="text-center" size="sm">Download</Button>
                            </Col>

                        </Row>
                    </div>
                    <hr/>
                    <div className="download_center_info">
                        <h3>Vmeet Mobile Apps</h3>
                        <Row className="download_center_detail">

                            <Col md={6} xs={12}>
                                <p className="font18">The web browser client will download automatically when you
                                    start or
                                    join your first Vmeet meeting, and is also available for manual download
                                    here.</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <p className="center">Version 5.3.1 (52879.0927)</p>
                            </Col>
                            <Col md={2} xs={12} className="download_center_button right">
                                    <Button className="mb-3" color="primary"  size="sm"><AiFillAndroid/> Download</Button>
                                    <Button color="primary" size="sm" ><AiFillApple/> Download</Button>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
                <Footer/>
                </>
        );
    }

export default Download_center;