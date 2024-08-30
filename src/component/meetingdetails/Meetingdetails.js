import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import Userimage from '../images/userImg.png';
import Joinheader from '../joinmeetingheader/Joinheader';
import './Meetingdetails.css';
import Inviteicon from '../images/Invite_Icon.svg';
import Dots from '../images/Dots.svg';
import Turncaption from '../images/Turn_Captions.svg';
import Setting from '../images/Settings.svg';
import Reportabuse from '../images/Reportabuse.svg';
import Reportproblem from '../images/Reportproblem.svg';
import Help from '../images/Help.svg';
import Mike from '../images/Mike.svg';
import Video from '../images/Video.svg';

const Meetingdetails = (props) => {
    const { id, item } = props;
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div>
            <Joinheader/>
            <Container>
                <div className="joinSpace">
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="meetvideo">
                                <img src={Userimage} alt={Userimage} className="pcPick"/>
                                <div className="layers_section">
                                    <a href="javascript:void(0);" className="layerBtn">
                                        <img src={Mike} alt={Mike} />
                                    </a>
                                    <a href="javascript:void(0);" className="layerBtn">
                                        <img src={Video} alt={Video} />
                                    </a>
                                    <span>
                                        <Button
                                            className="ml-1"
                                            id={"Popover-" + id}
                                            type="button"
                                        >
                                        <img src={Dots} alt={Dots} className="dotsbtn" />
                                        </Button>
                                        <Popover
                                            placement="top"
                                            isOpen={popoverOpen}
                                            target={"Popover-" + id}
                                            toggle={toggle}
                                        >
                                            <PopoverBody>
                                               <Link to="/#" className="tog_link"><img src={Turncaption} alt={Turncaption} />Turn Off Captions</Link>
                                               <Link to="/#" className="tog_link"><img src={Setting} alt={Setting} />Settings</Link>
                                               <hr/>
                                               <Link to="/#" className="tog_link"><img src={Reportproblem} alt={Reportproblem} />Report Problem</Link>
                                               <Link to="/#" className="tog_link"><img src={Reportabuse} alt={Reportabuse} />Report Abuse</Link>
                                               <Link to="/#" className="tog_link"><img src={Help} alt={Help} />Help</Link>
                                            </PopoverBody>
                                        </Popover>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="joinSend">
                                <div className="hed_top">
                                    <h2 className="white_color">Hello, Eva John</h2>
                                    <p className="white_color"><b>Meeting Topic</b>:   UI Design Team Meeting</p>
                                    <Row>
                                        <Col md={8}>
                                            <Link to="/videochat" className="joinBtn">Join Now</Link>
                                            <Link to="/#" className="sharescreenBtn">Share Screen</Link>
                                        </Col>
                                        <Col md={4} className="right">
                                            <p><img src={Inviteicon} alt={Inviteicon} /> <b>Invite Others</b></p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="dataTxt">
                                    <Row>
                                        <Col md={6}>
                                            <p className="font-24"><b>Host :</b></p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-22">Eva John</p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-24"><b>Passcode :</b></p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-22">111222</p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-24"><b>Numeric Passcode :<br/>(Telephone/Room Systems)</b></p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-22">111222</p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-24"><b>Invite Link :</b></p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-22 urlLink"><Link to="/#">http://localhost:3001/join</Link></p>
                                            <a href="javascript:void(0)" className="copyLink">Copy Link</a>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-24"><b>Participant ID :</b></p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="font-22">222222</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Meetingdetails
