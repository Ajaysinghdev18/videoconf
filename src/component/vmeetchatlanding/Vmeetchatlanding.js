import React from 'react';
import './Vmeetchatlanding.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Join from "../../images/signup/Join.svg"
import Powerfull from "../../images/signup/Powerful.svg"
import Unparalleled from "../../images/signup/Unparalleled.svg"
import HDvideo from "../../images/signup/HDvideo.svg"
import Recording from "../../images/signup/Recording.svg"
import Built from "../../images/signup/Built.svg"
import Streamlined from "../../images/signup/Streamlined.svg"
import Made from "../../images/signup/Made.svg"
import Team from "../../images/signup/Team.svg"
import WFH from "../../images/signup/wfh.png"
import Meatingsolution from "../../images/signup/MeetingSolution.png"
import MobileMeetings from "../../images/signup/MobileMeetings.png"
import ZoomChat from "../../images/signup/ZoomChat.png"
import VmeetForHome from "../../images/signup/VmeetForHome.png"
import HardwareOptimize from "../../images/signup/HardwareOptimize.png"
import ZoomMeetingsConnects from "../../images/signup/ZoomMeetingsConnects.png"
import integrationlogo from "../../images/signup/integrationlogo.png"
import download from "../../images/signup/download.png"
import playbutton from "../../images/signup/playbutton.svg"
import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Vmeetchatlanding() {
  return (
      <>
      <Topheader/>
      <Header/>
    <div className="Signup">

            <div className="vmeet-top">
                <Container>
                    <Row>
                        <Col xs="5">
                            <div className="vidio-top-text">
                                <h5 className="font30"><b>Vmeet Meeting & Chat</b></h5>
                                <p>Enterprise video conferencing with real-time messaging and content sharing</p>
                                <Form>
                                    <Row>
                                        <Col xs="7">
                                            <FormGroup>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter you work email" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="5">
                                            <Button className="vmeet-btn-4">Sign up for free</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <p>By submitting the form, I agree to the Privacy Policy</p>
                                <p className="m-0"><img src={playbutton} alt={playbutton} className="mr-10 play-btn"/><Link to="#">Watch Video</Link></p>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
      
            <div className="vmeet-second">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="signup-video-block rounded1 shadow bg-white">
                                <Row>
                                    <Col xs="3">
                                        <div className="signup-1col-video p-3">
                                            <h5 className="font26"><b>Simplified video conferencing and messaging across any device</b></h5>
                                        </div>
                                    </Col>

                                    <Col xs="3">
                                        <div className="signup-2col-video p-3">
                                        <img src={Join} alt={Join}   />
                                            <h5 className="font20"><b>Join anywhere, on any device</b></h5>
                                            <p className="font14">Zoom Meetings syncs with your calendar system and delivers streamlined enterprise-grade video conferencing from desktop and mobile</p>
                                        </div>
                                    </Col>

                                    <Col xs="3">
                                        <div className="signup-2col-video p-3">
                                            <img src={Powerfull} alt={Powerfull}   />
                                            <h5 className="font20"><b>Powerful meeting security</b></h5>
                                            <p className="font14">Robust security settings ensure disruption-free meetings. Encryption, role-based security, Passcode protection, Waiting Rooms and more</p>
                                        </div>
                                    </Col>

                                    <Col xs="3">
                                        <div className="signup-2col-video p-3">
                                            <img src={Unparalleled} alt={Unparalleled}   />
                                            <h5 className="font20"><b>Unparalleled usability</b></h5>
                                            <p className="font14">Enable quick adoption with meeting capabilities that make it easy to start, join, and collaborate across any device.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col xs="12">
                        <div className="text-center">
                            <h3 className="text-center mb-3"><b>Built For Modern Teams</b></h3>
                            <div className="title-line"></div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs="12">
                        <div className="signup-multicol">
                            <div className="shadow bg-white rounded1  signup-multicol-colum">
                                <img src={HDvideo} alt={HDvideo}   />
                                <h5 className="font16"><b>HD video and audio</b></h5>
                                <p className="font12">Bring HD video and audio to your meetings with support for up to 1000 video participants and 49 videos on screen</p>
                            </div>

                            <div className="shadow bg-white rounded1  signup-multicol-colum">
                                <img src={Recording} alt={Recording}   />
                                <h5 className="font16"><b>Recording and transcripts</b></h5>
                                <p className="font12">Record your meatings locally or to the cloud. with searchable transcripts.</p>
                            </div>
                            <div className="shadow bg-white rounded1  signup-multicol-colum">
                                <img src={Built} alt={Built}   />
                                <h5 className="font16"><b>Built-in collaboration tools</b></h5>
                                <p className="font12">Multiple participants can share their screens simultaneously and coannotate for a more interactive meeting</p>
                            </div>

                            <div className="shadow bg-white rounded1  signup-multicol-colum">
                                <img src={Streamlined} alt={Streamlined}   />
                                <h5 className="font16"><b>Streamlined calendaring</b></h5>
                                <p className="font12">Support scheduling or starting meetings from Outlook, Gmail, or iCal.</p>
                            </div>

                            <div className="shadow bg-white rounded1  signup-multicol-colum">
                                <img src={Made} alt={Made}   />
                                <h5 className="font16"><b>Made for Connecting</b></h5>
                                <p className="font12">Filters, reactions, polls, hand raising, and music or video sharing make meetings more fun and engaging</p>
                            </div>

                            <div className="shadow bg-white rounded1 p-3 signup-multicol-colum">
                                <img src={Team} alt={Team}   />
                                <h5 className="font16"><b>Team Chat</b></h5>
                                <p className="font12">Chat with groups, searchable history, integrated file sharing, and 10 year archive. Easily escalate into 1:1 or group calls</p>
                            </div>

                        </div>
                        
                    </Col>
                </Row>
            </Container>

            <div className="section2bg">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="text-center">
                                <h3 className="text-center mb-3 text-white"><b>Customers Who Switch To Zoom Report An Increase <br/> In Performance, Trust, And Engagement</b></h3>
                                <div className="title-line-white"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="3">
                            <div className="mt-5 text-center">
                                <CircularProgressbarWithChildren value={95} className="w-75">
                                    <div className="font30 text-white progress-text">
                                        <strong>95%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                                <p className="font18 text-white text-center">95% report an increase in performance</p>
                            </div>
                        </Col>

                        <Col xs="3">
                            <div className="mt-5 text-center">
                                <CircularProgressbarWithChildren value={95} className="w-75">
                                    <div className="font30 text-white progress-text">
                                        <strong>95%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                                <p className="font18 text-white text-center">95% report a greater sense of trust</p>
                            </div>
                        </Col>

                        <Col xs="3">
                            <div className="mt-5 text-center">
                                <CircularProgressbarWithChildren value={93} className="w-75">
                                    <div className="font30 text-white progress-text">
                                        <strong>93%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                                <p className="font18 text-white text-center">93% report a greater sense of engagement</p>
                            </div>
                        </Col>

                        <Col xs="3">
                            <div className="mt-5 text-center">
                                <CircularProgressbarWithChildren value={85} className="w-75">
                                    <div className="font30 text-white progress-text">
                                        <strong>85%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                                <p className="font18 text-white text-center">85% saw an increase in video usage</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col xs="12">
                        <div className="section3bg rounded1 shadow mt-5 mb-5">
                            <Row>
                                <Col xs="12">
                                    <div className="text-center">
                                        <h3 className="text-center mb-3"><b>Confidently Work From Home</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <div className="wfh-col p-3 mt-5">
                                        <h5 className="mb-3"><b>New Features To Help You Work <br />From Home And Have Fun Doing It.</b></h5>
                                        <p className="m-0">• Clear audio with advanced background noise suppression</p>
                                        <p className="m-0">• Share slides as your virtual background </p>
                                        <p className="m-0">• Feel camera ready with adjustable touch up my appearance</p>
                                        <p className="m-0">• Look well lit in any situation by adjusting advanced lighting </p>
                                        <p className="m-0">• More reactions to let your feelings show</p>
                                        <p className="m-0">• Filters to bring some fun into your day</p>
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-img p-3 mt-5">
                                        <img src={WFH} alt={WFH}  className="w-100" />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <div className="text-center mt-5">
                                        <h3 className="text-center mb-3"><b>Modernize Your Meeting Solution</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs="6">
                                    <div className="wfh-img p-3 mt-5">
                                        <img src={Meatingsolution} alt={Meatingsolution}  className="w-100" />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-col p-3 mt-5">
                                        <h5 className="mb-3"><b>Zoom Meetings For Desktop And Mobile <br />
                                        Provides The Tools To Make Every Meeting <br/>A Great One.</b></h5>
                                        <p className="m-0">• Focus on your meeting – click record to leave the note taking to Zoom’s auto-generated, searchable transcripts </p>
                                        <p className="m-0">• Share and play videos with full audio and video transmit without uploading the content </p>
                                        <p className="m-0">• Feel meeting ready with virtual backgrounds, touch up my appearance and lighting controls</p>
                                       
                                    </div>
                                </Col>
                                
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <div className="text-center mt-5">
                                        <h3 className="text-center mb-3"><b>A Thoughtful Approach To Mobile Meetings</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <div className="wfh-col p-3 mt-5">
                                        <h5 className="mb-3"><b>Today’s Professionals Need To Be Able To Work And Video Conference Wherever They Are. Zoom Meetings For Mobile Provides The Same Great Experience That You’d Expect From The Desktop Client And More.</b></h5>
                                        <p className="m-0">• Turn on Virtual Backgrounds and select the image of your choice (iPhone 8+ required)</p>
                                        <p className="m-0">• Share your screen and co-annotate  </p>
                                        <p className="m-0">• Use Safe Driving Mode or Apple Carplay (iPhone only)</p>
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-img p-3 mt-5">
                                        <img src={MobileMeetings} alt={MobileMeetings}  className="w-100" />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <div className="text-center mt-5">
                                        <h3 className="text-center mb-3"><b>Communicate Instantly On Zoom Chat</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs="6">
                                    <div className="wfh-img p-3 mt-5">
                                        <img src={ZoomChat} alt={ZoomChat}  className="w-100" />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-col p-3 mt-5">
                                        <h5 className="mb-3"><b>Integrated Persistent Messaging <br />
                                        Streamlines Workspace Collaboration  <br/>A Across The Desktop And Mobile Clients</b></h5>
                                        <p className="m-0">• Instantly start a meeting or phone call </p>
                                        <p className="m-0">• Share files and search content in public or private groups</p>
                                        <p className="m-0">• Connect external users while keeping information safe</p>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="section4bg">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="text-center">
                            <Link to="#" className="vmeet-btn-1 shadow mb-3 text-dark">Download Now</Link>
                                <h3 className="text-center mb-3 text-white"><b>Vmeet For Home</b></h3>
                                <div className="title-line-white"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <div className="wfh-col p-3 mt-5">
                                <h5 className="mb-3 text-white"><b>Get Immersive In-Oce Collaboration <br />Right From Home</b></h5>
                                <p className="text-white">Zoom for Home brings your calendar, meetings, and phone together in one dedicated device</p>
                                <p className="m-0 text-white">• High-quality microphone, camera, and speakers</p>
                                <p className="m-0 text-white">• Touch displays for easy whiteboarding and annotation</p>
                                <p className="m-0 text-white">• Simple for IT to deploy and manage</p>
                                <Link to="#" className="vmeet-btn-2 shadow">Check Out Vmeet For Home Devices</Link>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="wfh-img p-3 mt-5">
                                <img src={VmeetForHome} alt={VmeetForHome}  className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col xs="12">
                        <div className="section5bg rounded1">
                            <Row>
                                <Col xs="12">
                                    <div className="text-center">
                                        <h3 className="text-center mb-3"><b>Administration And Remote Assistance Made Easy</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <div className="wfh-col p-5 mt-5">
                                        <h5 className="mb-3"><b>Centralized IT Management And Remote <br />Assistance Simplifies Deployment And<br/>Support</b></h5>
                                        <p className="m-0">• Track utilization and usage trends </p>
                                        <p className="m-0">• View version distribution  </p>
                                        <p className="m-0">• Assign granular permission settings (account, group, and user level)</p>
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-img p-5 mt-5">
                                        <img src={WFH} alt={WFH}  className="w-100" />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <div className="text-center mt-5">
                                        <h3 className="text-center mb-3"><b>Expanded Audio</b></h3>
                                        <div className="title-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs="6">
                                    <div className="wfh-img p-5 mt-5">
                                        <img src={Meatingsolution} alt={Meatingsolution}  className="w-100" />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className="wfh-col p-5 mt-5">
                                        <h5 className="mb-3"><b>Add Audio Options For Everyone.</b></h5>
                                        <p className="m-0">• Free VoIP and toll-based dial-in for 55+ countries  </p>
                                        <p className="m-0">• Global toll free and call-out</p>
                                        <p className="m-0">• Dedicated dial-in numbers</p>
                                       
                                    </div>
                                </Col>
                                
                            </Row>

                           
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs="4">
                        <div className="rounded1 shadow bg-white dardwaremaincol">
                            <div className="hardcare-col">
                                <img src={HardwareOptimize} alt={HardwareOptimize}  className="w-100 rounded" />
                            </div>
                            <div className="hardware-col-text p-3">
                                <h5><b>Hardware To Optimize Your Meeting Experience</b></h5>
                                <div className="hardware-line"></div>
                                <p className="font12">Upgrade your audio and video quality with headsets, webcams, and more</p>
                                <Link to="#" className="vmeet-btn-3 rounded text-white">View Recommended Hardware</Link>
                            </div>
                        </div>
                    </Col>

                    <Col xs="4">
                        <div className="rounded1 shadow bg-white dardwaremaincol">
                            <div className="hardware-col-text p-3">
                                <h5><b>Zoom Meetings Connects <br />With Some Of Your <br/>Favorite Applications To <br />Enhance Collaboration.</b></h5>
                                <p className="font12">Upgrade your audio and video quality with headsets, webcams, and more</p>
                                <Link to="#">Know more</Link>
                            </div>

                            <div className="hardcare-col">
                                <img src={ZoomMeetingsConnects} alt={ZoomMeetingsConnects}  className="w-100 rounded" />
                            </div>
                            
                        </div>
                    </Col>

                    <Col xs="4">
                        <div className="rounded1 shadow bg-white dardwaremaincol">
                            <div className="hardware-col-text p-3">
                                <h5><b>Integrations</b></h5>
                                <div className="hardware-line"></div>
                                <p className="font12">Easily schedule and join meetings from your <br/>existing email or calendar application.</p>
                                
                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                <div className="hardwarecol-download rounded shadow">
                                    <p className="m-0 font12"><img src={integrationlogo} alt={integrationlogo} className="mr-10" />Lorem ipsum dolo <spn className="float-right"><img src={download} alt={download} /></spn></p>
                                </div>

                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs="12">
                        <div className="text-center shadow bg-white rounded1 mt-5 mb-5 pt-5 pb-5">
                            <h3>Start Vmeeting Today</h3>
                            <p className="font12">Seeing is believing! Schedule a live demo with one of our product specialists at your convenience.  <br/>We can learn about your requirements, answer questions, and review ways. Vmeet can help you and your organization.</p>
                            <p className="m-0"><Link to="#" className="vmeet-btn-5 rounded text-white">Request A Demo</Link> <Link to="#" className="vmeet-btn-3-outline rounded">Buy Now</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="p-ab-top">
                <Container>
                    <Row>
                        <Col xs="12">
                            <p className="p-ab-top-text text-white">We have developed resources to help you through this challenging time <Link to="#" className="text-warning">Click here</Link>  to learn more. <span><Link to="#" className="text-white"><i className="fas fa-times"></i></Link></span></p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
      
    </div>
</>
  );
}
export default Vmeetchatlanding;
