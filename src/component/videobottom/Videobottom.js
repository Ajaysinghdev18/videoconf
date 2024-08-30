import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Call from '../images/Call1.svg';
import Dots from '../images/Dots1.svg';
import Dots1 from '../images/Dots-Icon.svg';
import Mike from '../images/Mike1.svg';
import Video from '../images/Video1.svg';
import Recording from '../images/Recording.svg';
import PresentNow from '../images/Presentnow.svg';
import Security from '../images/Security.svg';
import Help from '../images/Help.svg';
import Attchment from '../images/attach.png';
import Turncaption from '../images/Turn_Captions.svg';
import Settings from '../images/Settings.svg';
import Reportproblem from '../images/Reportproblem.svg';
import Reportabuse from '../images/Reportabuse.svg';
import Phone from '../images/Phone.svg';
import Changelayout from '../images/Changelayout.svg';
import Fullscreen from '../images/fullScreen.svg';
import Windowicon from '../images/windowIcon.svg';
import Entireicon from '../images/entireIcon.svg';
import Securitywhite from '../images/Security-Icon.svg';
import Boxcheckactive from '../images/boxcheckActive.svg';
import classnames from 'classnames';
import Checkbox from "react-custom-checkbox";
import { Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, Form } from 'reactstrap';

export const Videobottom = (props) => {
     

    const [activeTab1, setActiveTab1] = useState('3');
    const toggle2 = tab => {
        if(activeTab1 !== tab) setActiveTab1(tab);
    }
    

    const [isOpen, setDropdownOpen] = useState(false);
    const toggle1 = () => setDropdownOpen(prevState => !prevState);

    const [isOpen1, setDropdownOpen1] = useState(false);
    const toggle3 = () => setDropdownOpen1(prevState => !prevState);

    const [isOpen2, setDropdownOpen2] = useState(false);
    const toggle4 = () => setDropdownOpen2(prevState => !prevState);

    const [isOpen3, setDropdownOpen3] = useState(false);
    const toggle5 = () => setDropdownOpen3(prevState => !prevState);
    return (
        <div>
            <div className="bottomSection">
                            <Row>
                                <Col md={4} xs={12}>
                                    <Dropdown direction="up" isOpen={isOpen} toggle={toggle1}>
                                        <DropdownToggle caret id="mybtn">
                                            Meeting Details
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <Nav tabs id="tabscus">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab1 === '3' })}
                                                    onClick={() => { toggle2('3'); }}
                                                >
                                                  <img src={Help} alt={Help} />  <span class="tabtxt">Details</span>
                                                </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab1 === '4' })}
                                                    onClick={() => { toggle2('4'); }}
                                                >
                                                  <img src={Attchment} alt={Attchment} className="attchIcon" />  Attachments (0)
                                                </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={activeTab1} className="w_500">
                                                <TabPane tabId="3">
                                                <Row>
                                                    <Col sm="12">
                                                        <Row>
                                                            <Col md={12}>
                                                                    <h4 className="fblack">Joining info</h4>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <h5 className="fblack">Meeting Topic :</h5>
                                                            </Col>
                                                            <Col md={6}>
                                                                <p className="fblack">UI Design meeting</p>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <h5 className="fblack">Invite Link :</h5>
                                                            </Col>
                                                            <Col md={6}>
                                                                <p className="fblack">
                                                                    Https://vmeet.us/1/343erddsdfsdfcfsdfsdf
                                                                </p>
                                                                <Link to="#"><u>Copy Link</u></Link>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                </TabPane>
                                                <TabPane tabId="4">
                                                <Row>
                                                    <Col sm="6">
                                                    <Card body>
                                                        <CardTitle>Special Title Treatment</CardTitle>
                                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                        <Button>Go somewhere</Button>
                                                    </Card>
                                                    </Col>
                                                    <Col sm="6">
                                                    <Card body>
                                                        <CardTitle>Special Title Treatment</CardTitle>
                                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                        <Button>Go somewhere</Button>
                                                    </Card>
                                                    </Col>
                                                </Row>
                                                </TabPane>
                                            </TabContent>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col md={4} xs={12} className="center">
                                    <Link to="#" className="Iconvideo">
                                        <img src={Mike} alt={Mike} />
                                    </Link>
                                    <Link to="/endvideo" className="Iconvideo">
                                        <img src={Call} alt={Call} />
                                    </Link>
                                    <Link to="#" className="Iconvideo">
                                        <img src={Video} alt={Video} />
                                    </Link>
                                    <Link to="#" className="Iconvideo">
                                        <img src={Recording} alt={Recording} />
                                    </Link>
                                </Col>
                                <Col md={4} xs={12} className="right"> 
                                    <Link to="#" className="Iconvideo">
                                        <Dropdown direction="up" isOpen={isOpen3} toggle={toggle5} id="mysecurityBtn">
                                            <DropdownToggle id="mysecurity">
                                            <img src={Security} alt={Security} className="imgnoActive"/> <img src={Securitywhite} alt={Securitywhite} className="imgActive"/> <br/>Security
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <Form className="checkForm">
                                                    <Checkbox className="customCheck"
                                                        checked={false}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Lock Meeting" />       
                                                    <Checkbox className="customCheck"
                                                        checked={false}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Enable Waiting Room" />    
                                                        <hr/>    
                                                    <h4 className="fblack">Allow Participants to :</h4> 
                                                    <Checkbox className="customCheck"
                                                        checked={true}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Share Screen" />  
                                                    <Checkbox className="customCheck"
                                                        checked={true}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Chat" />  
                                                    <Checkbox className="customCheck"
                                                        checked={true}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Rename Themselves" />  
                                                    <Checkbox className="customCheck"
                                                        checked={true}
                                                        icon={<img src={Boxcheckactive} style={{ width: 24 }} alt={Boxcheckactive} />}
                                                        size={18}
                                                        label="Unmute Themselves" />                                                                                       
                                                </Form>
                                            </DropdownMenu>
                                        </Dropdown> 
                                    </Link>    
                                    <Link to="#" className="Iconvideo">
                                        <Dropdown direction="up" isOpen={isOpen2} toggle={toggle4} id="presentBtn">
                                            <DropdownToggle id="myprsnt">
                                                <img src={PresentNow} alt={PresentNow} /><br/> Present Now
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <h4 className="fblack">Present</h4>
                                            <NavItem>
                                                <Link to="#"><img src={Entireicon} alt={Entireicon} className="dpIcon" /> Your Entire Screen</Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link to="#"><img src={Windowicon} alt={Windowicon} className="dpIcon" /> A Window</Link>
                                            </NavItem>
                                            </DropdownMenu>
                                        </Dropdown>                                        
                                    </Link> 
                                    <Link to="#" className="Iconvideo">
                                    <Dropdown direction="up" isOpen={isOpen1} toggle={toggle3} id="dotBtndrop">
                                        <DropdownToggle id="mybtn">
                                            <img src={Dots} alt={Dots} className="imgnoActive" />
                                            <img src={Dots1} alt={Dots1} className="imgActive" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                          <NavItem>
                                            <Link to="#"><img src={Phone} alt={Phone} className="dpIcon" /> Use Phone For Audio</Link>
                                          </NavItem>
                                          <NavItem>
                                            <Link to="#"><img src={Fullscreen} alt={Fullscreen} className="dpIcon" /> Full Screen</Link>
                                          </NavItem>
                                          <NavItem>
                                            <Link to="#"><img src={Changelayout} alt={Changelayout} className="dpIcon" /> Change Layout</Link>
                                          </NavItem>
                                          <NavItem>
                                              <Link to="#"><img src={Turncaption} alt={Turncaption} className="dpIcon" /> Turn Off Captions</Link>
                                          </NavItem>
                                          <NavItem>
                                              <Link to="#"><img src={Settings} alt={Settings} className="dpIcon" />Settings</Link>
                                          </NavItem>
                                          <hr/>
                                          <NavItem>
                                              <Link to="#"><img src={Reportproblem} alt={Reportproblem} className="dpIcon" />Report Problem</Link>
                                          </NavItem>
                                          <NavItem>
                                              <Link to="#"><img src={Reportabuse} alt={Reportabuse} className="dpIcon" />Report Abuse</Link>
                                          </NavItem>
                                          <NavItem>
                                            <Link to="#"><img src={Help} alt={Help} className="dpIcon" />Help</Link>
                                          </NavItem>
                                        </DropdownMenu>
                                    </Dropdown>  
                                    </Link>    
                                </Col>
                            </Row>
                        </div>
        </div>
    )
}

export default Videobottom