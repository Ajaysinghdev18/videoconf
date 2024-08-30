
import React, { useState } from 'react';
import './Topheader.css';
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className="backTophead">
                <Container>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="topnav" navbar>
                            <NavItem>
                                <NavLink href="/requestademo">Request A Demo</NavLink>
                            </NavItem>


                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Resources
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                       <Link to="/webinar">Webinar</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/recording">Recording</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/usermanagement">User Management</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/security">Security</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/welcomevmeet">Welcome Vmeet</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/zoomroom">Zoom Room</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/support">Support</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Container>
            </Navbar>
        </div>
    );
}

export default Example;