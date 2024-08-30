import React, { useState } from 'react';
import classnames from 'classnames';
import DataTable from "react-data-table-component";
import './Rolemanagement.css'


import { Link } from "react-router-dom";
import { Container, Row, Col, TabContent,  TabPane, Nav, NavItem, InputGroup, InputGroupAddon, InputGroupText, Button, NavLink, Form, FormGroup,CustomInput, Label, Input } from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'
import Footer from '../footer/Footer'


const columns = [
    {
      name: "Email/ Name ID",
      selector: "email_name",
      sortable: true,
    },
    {
        name: "First Name",
        selector: "f_name",
        sortable: true,
      },
    {
      name: "Last Name",
      selector: "l_name",
      sortable: true,
    },
    {
      name: "Type",
      selector: "type",
      sortable: false,
    },

    {
        name: "Department",
        selector: "department",
        sortable: false,
     
      },

      {
        name: "Action",
        selector: "action",
        sortable: false,
     
      }
  ];

  const movies = [
    {
        id: 1,
        email_name: "Sales@example.com ",
        f_name: "Dave",
        l_name: "Thomas",
        type: "Licensed-webinar-zoom phone",
        department: "IT",
        action: <p className="m-0"><Link to="#" className="btn-primary btn btn-sm font12" size="sm">Edit</Link> <Link to="#" className="btn-danger btn btn-sm font12" size="sm">Delete</Link></p>,
        
      },
  ];


function Rolemanagement() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
      <>
      
    <div className="Rolemanagement">

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
                      <h3 className="text-center mb-5">Role Management</h3>
                  <Nav tabs className="nav-justified rocording-tabs">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Role Settings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Role Members
                        </NavLink>
                    </NavItem>

                </Nav>

                <TabContent activeTab={activeTab} className="mt-5">
                    
                    <TabPane tabId="1">
                    
                        <div className="p-3">
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col xs="3">
                                            <Label><b>Role Name</b></Label>
                                        </Col>
                                        <Col xs="9">
                                            <Input type="text" placeholder="User Role Administrator" />
                                        </Col>
                                    </Row>
                                        
                                </FormGroup>

                                <FormGroup className="mt-3">
                                    <Row>
                                        <Col xs="3">
                                            <Label><b>Description (Optional)</b></Label>
                                        </Col>
                                        <Col xs="9">
                                            <Input type="textarea" placeholder="You can add roles and assign users to roles" />
                                        </Col>
                                    </Row>
                                        
                                </FormGroup>
                            </Form>

                            <h4 className="mt-5">Role Privilege Settings</h4>
                            <p>Click one or more checkboxes to change the privileges for this role.</p>
                            <div className="content-view-meeting active-content-role">
                                <div className="meetingcol-1">
                                    <p className="m-0">Role Privilege Items</p>
                                </div>
                                <div className="meetingcol-2">
                                    <p className="m-0">View</p>
                                </div>

                                <div className="meetingcol-3">
                                    <p className="m-0">Edit</p>
                                </div>
                            </div>

                            <p className="font12 mt-3"><b>User and permission management</b></p>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <p className="font12 mt-3"><b>Account Management</b></p>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <div className="content-view-meeting">
                                <div className="meetingcol-1">
                                    <p className="m-0 font12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                </div>
                                <div className="meetingcol-2">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox"/>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>

                                <div className="meetingcol-3">
                                    <Form>
                                        <FormGroup>
                                            <div>
                                                <CustomInput type="checkbox" checked/>
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
                                <div className="prweww-col p-3">
                                    <Row>
                                        <Col xs="6">
                                            <Form>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                <   InputGroupText><i className="fas fa-search"></i></InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Enter Group name" />
                                                <InputGroupAddon addonType="append">
                                                <Button className="tablesearchbutton">Search</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                            </Form>
                                        </Col>

                                        <Col xs="6">
                                            <div className="text-right">
                                                <Button className="create-group-btn"><i className="fas fa-plus mr-2"></i> Create Group</Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                        <DataTable
                               
                               columns={columns}
                               data={movies}
                               defaultSortFieldId={1}
                              
                               pagination
                               selectableRows
                               />
                                        </Col>
                                    </Row>
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
export default Rolemanagement;
