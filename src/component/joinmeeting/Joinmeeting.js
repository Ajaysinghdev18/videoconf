import React, { useState } from 'react';
import './Joinmeeting.css';
import Joinheader from '../joinmeetingheader/Joinheader';
import { Col, Container, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import Userimage from '../images/userImg.png';
import NothingImage from '../images/firstscreen.png';

const Joinmeeting = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [wasOpened, setWasOpened] = useState(true);

    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
      setWasOpened(isOpened => !isOpened);
    }
    return (
        <div className="joinMeet">
            <Joinheader />
            <Container>
                <div className="joinSpace">
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="leftsection">
                                <Row>
                                    <Col md={6} xs={6}>
                                        <div className="useDiv"><img src={Userimage} alt={Userimage} className="userimage" /></div>
                                    </Col>
                                    <Col md={6} xs={6}>
                                        <h2 id="userName">
                                            Hello, <br />
                                            John
                                        </h2>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="joinSend">
                                <div className="topJoin" onClick={toggle}>
                                    Join or host a meeting
                                </div>
                                {wasOpened && (
                                <div className="nullSec">
                                    <img src={NothingImage} alt={NothingImage} className="nullDataImage" />
                                </div>
                                )}
                                {isOpened && (
                                <div className="formMeeting">
                                    <h2>You're about to join a meeting</h2><br/>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail" className="leftAlign">Meeting ID or Link</Label>
                                            <Input type="text" name="email" id="email" placeholder="Enter meeting ID or Link" />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Input type="text" name="name" id="name" placeholder="Enter your name" />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup check>
                                            <Label check>
                                            <Input type="checkbox" />{' '}
                                            Remember my name for future meetings
                                            </Label>
                                        </FormGroup>
                                        <FormGroup className="rightAlign">
                                            <Button type="submit" color="success" href="/meetingdetails">Join</Button>
                                        </FormGroup>
                                    </Form>
                                </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Joinmeeting
