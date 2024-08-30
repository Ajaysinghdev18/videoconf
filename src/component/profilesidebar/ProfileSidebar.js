import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { NavItem, NavLink, Nav, Navbar ,Row , Col } from 'reactstrap';

import './ProfileSidebar.css';
import { Navigation } from 'react-minimal-side-navigation';



function ProfileSidebar() {
    const history = useHistory();
  const location = useLocation();

    return (
        <>    
            <div className="Container-wrap">
            {/* <Container > */}
<Row className="nav-style">

<Col md={ 12 } xs={12} >

<div className="nav-inner-style">
                       
                <h3>Personal</h3>
                <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                  history.push(itemId);
                }}
                    items={
                        [
                            {
                                title: 'Profile',
                                itemId: '/profile',
                            },

                            {
                                title: 'Meetings',
                                itemId: '/mettings',
                            },
                            {
                                title: 'Webinar',
                                itemId: '/webinar',
                            },
                            {
                                title: 'Recordings',
                                itemId: '/recording',
                            },
                            {
                                title: 'Settings',
                                itemId: '/setting',
                            },
                        ]}
                />
                <h3>Admin</h3>
                <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                  history.push(itemId);
                }}
                    items={
                        [
                            {
                                title: 'User Management',
                                itemId: '#usermanagement',
                                subNav: [
                                    {
                                        title: 'Users',
                                        itemId: '/usermanagementusers',
                                    },
                                    {
                                        title: 'Group Management',
                                        itemId: '/groupmanagement',
                                    },

                                    {
                                        title: 'Role Management',
                                        itemId: '/rolemanagement',
                                    },
                                ],
                            },

                            {
                                title: 'Room Management',
                                itemId: '#roommanagement',
                                subNav: [
                                    {
                                        title: 'Zoom Rooms',
                                        itemId: '/zoomroom',
                                    },
                                    {
                                        title: 'Calendar Integration',
                                        itemId: '/calendarintegration',
                                    },

                                    {
                                        title: 'Digital Signage Content',
                                        itemId: '/digitalsignage',
                                    },

                                    {
                                        title: 'Device Management',
                                        itemId: '/devicemanagement',
                                    },

                                    {
                                        title: 'Cisco/Polycom Rooms',
                                        itemId: '/cisco',
                                    },
                                ],
                            },

                            {
                                title: 'Account Management',
                                itemId: '#accountmanagement',
                                subNav: [
                                    {
                                        title: 'Account Profile',
                                        itemId: '/accountprofile',
                                    },
                                    {
                                        title: 'Billing',
                                        itemId: '/billing',
                                    },
                                ],
                            },

                            {
                                title: 'Advanced',
                                itemId: '#advanced',
                                subNav: [
                                    {
                                        title: 'option 1',
                                        itemId: '/option1',
                                    },
                                    {
                                        title: 'option 2',
                                        itemId: '/option2',
                                    },
                                ],
                            },
                        ]}
                />
                <Navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="#">Attend Live Training</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Video Tutorials</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Knowledge Base</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar>
                </div>
                </Col>
                </Row>
            {/* </Container> */}
            </div>
        </>
    )
}
export default ProfileSidebar;