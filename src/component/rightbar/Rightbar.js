import React, { useState } from 'react';
import { Col, Row, TabContent, TabPane, Nav, NavItem, NavLink,  Button, Form, FormGroup, Input  } from 'reactstrap';
import classnames from 'classnames';
import Userimage from '../images/userImg.png';
import UserIcon from '../images/usericon.svg';
import Peopleicon from '../images/People-Icon.svg';
import Chaticon from '../images/Chat-Icon.svg';
import Addpeople from '../images/addPeople.svg';
import Soundwaves from '../images/soundWaves.svg';
import Mikegray from '../images/Mikegray.svg';
import Videocross from '../images/videoCros.svg';
import Rizwan from '../images/Rizwan.png';
import Chatwhite from '../images/Chatwhite.svg';
import Peopleblack from '../images/Peopleblack.svg';
import Send from '../images/send.svg';
import { Link } from 'react-router-dom';
import Ashwin from '../images/Ashwin.png';
import Bruce from '../images/Bruce.png';
import Diana from '../images/Diana.png';

const Rightbar = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="rightbar">
                            <Nav className="rightHead">
                                <NavItem>
                                    <p className="dateLink leftLine">5:30 PM</p>
                                </NavItem>
                                <NavItem>
                                    <p className="dateLink">Mon Oct 12</p>
                                </NavItem>
                                <NavItem className="right ml-auto">
                                    <img src={UserIcon} alt={UserIcon} className="rightUser" />
                                </NavItem>
                            </Nav>
                            <Nav tabs className="tabslinkcustom">
                                <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <img src={Peopleicon} alt={Peopleicon} className="peopleicon active" /> <img src={Peopleblack} alt={Peopleblack} className="peopleicon nonactive" /><span className="tabtxt">People (1)</span>
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <img src={Chaticon} alt={Chaticon} className="peopleicon nonactive" /> <img src={Chatwhite} alt={Chatwhite} className="peopleicon active" /><span className="tabtxt">Chat</span>
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                      <Link to="#" className="center d-block fblack"><img src={Addpeople} alt={Addpeople} /> <br/> Add People</Link>
                                      <hr className="h_4" />
                                        <div className="participentList" id="style-2">
                                            <Row className="mb-16">
                                                <Col md={4}>
                                                    <img src={Userimage} alt={Userimage} className="userlistImg" />
                                                </Col>
                                                <Col md={5}>
                                                    <h5>Eva John <br/> (Host)</h5>
                                                </Col>
                                                <Col md={3} className="right">
                                                    <img src={Soundwaves} alt={Soundwaves} className="soundwaves" /><br/>
                                                    <img src={Mikegray} alt={Mikegray} className="smalcon" /> 
                                                    <img src={Videocross} alt={Videocross} className="smalcon" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-16">
                                                <Col md={4}>
                                                    <img src={Ashwin} alt={Ashwin} className="userlistImg" />
                                                </Col>
                                                <Col md={5}>
                                                    <h5>Ashwin Roy</h5>
                                                </Col>
                                                <Col md={3} className="right">
                                                    <img src={Mikegray} alt={Mikegray} className="smalcon" /> 
                                                    <img src={Videocross} alt={Videocross} className="smalcon" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-16">
                                                <Col md={4}>
                                                    <img src={Rizwan} alt={Rizwan} className="userlistImg" />
                                                </Col>
                                                <Col md={5}>
                                                    <h5>Rizwan Suhail</h5>
                                                </Col>
                                                <Col md={3} className="right">
                                                    <img src={Mikegray} alt={Mikegray} className="smalcon" /> 
                                                    <img src={Videocross} alt={Videocross} className="smalcon" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-16">
                                                <Col md={4}>
                                                    <img src={Diana} alt={Diana} className="userlistImg" />
                                                </Col>
                                                <Col md={5}>
                                                    <h5>Priya Raj</h5>
                                                </Col>
                                                <Col md={3} className="right">
                                                    <img src={Mikegray} alt={Mikegray} className="smalcon" /> 
                                                    <img src={Videocross} alt={Videocross} className="smalcon" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-16">
                                                <Col md={4}>
                                                    <img src={Bruce} alt={Bruce} className="userlistImg" />
                                                </Col>
                                                <Col md={5}>
                                                    <h5>Divakar Dube </h5>
                                                </Col>
                                                <Col md={3} className="right">
                                                    <img src={Mikegray} alt={Mikegray} className="smalcon" /> 
                                                    <img src={Videocross} alt={Videocross} className="smalcon" />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="msgSection" id="style-2">
                                        <Row>
                                            <Col md={12}>
                                                <div className="leftchat">
                                                    <h5>You :</h5>
                                                    <p>
                                                        hi all,
                                                    </p>
                                                    <p>
                                                        we need to plan todays activity
                                                    </p>
                                                </div>
                                                <div className="rightchat">
                                                    <h5>Ashwin Roy</h5>
                                                    <p>
                                                        Hey,
                                                    </p>
                                                    <p>
                                                        i will mail you guys the minutes
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="bottomMsg">
                                        <Form>
                                            <FormGroup className="msgBox">
                                                <Input type="text" name="msg" id="msg" placeholder="send message to everyone" />
                                                <Button type="submit"><img src={Send} alt={Send}/></Button>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
        </div>
    )
}

export default Rightbar
