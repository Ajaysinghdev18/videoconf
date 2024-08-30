import React, { useState } from 'react';
import classnames from 'classnames';
import DataTable from "react-data-table-component";
import './Groupmanagement.css'
import Footer from '../footer/Footer'


import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Button, NavLink, Form, FormGroup,CustomInput, Label, Input } from 'reactstrap';

import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import ProfileSidebar from '../profilesidebar/ProfileSidebar'




  const columns = [
    {
      name: "Group Name ",
      selector: "g_name",
      sortable: true,
    },
    {
        name: "Number of members",
        selector: "n_member",
        sortable: false,
      },
    {
      name: "Last modified",
      selector: "l_modified",
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
        g_name: "Group 1",
        n_member: "100",
        l_modified: "September 26, 2020 12:40",
       
        action: <p className="m-0"><Link to="#" className="btn-primary btn btn-sm font12" size="sm">Edit</Link> <Link to="#" className="btn-danger btn btn-sm font12" size="sm">Delete</Link></p>,
        
      },
  ];


function Groupmanagement() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
      <>
      
    <div className="Groupmanagement">

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
                      <h3 className="text-center mb-5">Group Management</h3>
                
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
                  </div>
              </Col>
          </Row>
      </Container>
      <Footer />
    </div>
</>
  );
}
export default Groupmanagement;
