import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Container
} from 'reactstrap';
import Logo from '../images/logo.png';
import './Header.css'


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className="bgHeader">
                <Container>
                    <NavbarToggler onClick={toggle} />
                    <NavbarBrand to="/">
                        <Link to="/">
                            <img src={Logo} className="logo" alt="Logo" />
                        </Link>
                    </NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="headerMain" navbar>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Solutions
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/billing">Billing</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/calendarintegration">Calendar Integration</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/download-center">Download Center</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/digitalsignage">Digital Signage Content</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/devicemanagement">Device Management</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/usermanagement">User Management</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/vmeetchatlanding">Vmeet Chat Landing</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Link to="/pricing" className="nav-link">Plans & Pricing</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contactsales" className="nav-link">Contact Sales</Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/joinmeeting" className="nav-link">Join A Meeting</Link>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link to="/mettings"><Button color="primary" id="hostMeeting">Host A Meeting</Button></Link>
                                </DropdownToggle>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;