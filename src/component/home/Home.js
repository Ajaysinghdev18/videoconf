import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Home.css';
import {
Container, Col, Row, Button, Card, CardImg, CardText, CardBody,
CardTitle,Alert
} from 'reactstrap';
import MacBookPro from '../images/Group 5193.png';
import ClientPic from '../images/2.png';
import Group from '../images/Group 6180.png';
import Chatimg from '../images/Group 423.svg';
import Screensharing from '../images/Group 423s.svg';
import Conferenceimage from '../images/Group 424.svg';
import Videoimage from '../images/Group 425.svg';
import Mobileimage from '../images/Group 425z.svg';
import ThumbImage from '../images/Group 3887.svg';
import GlobeImg from '../images/Group 3892.svg';
import EngineeredImg from '../images/Group 3893.png';
import GraphImage from '../images/Group 3894.svg';
import Android from '../images/android.svg';
import Apple from '../images/apple.svg';
import Twenty from '../images/brand4.png';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Brandslider from '../brandslider/Brandslider';

function Home() {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
return (
<>
<Topheader />
<Header />
<div className="home">
    <div className="sliderSection">
            <Container>
                <div className="rel">
                    <Alert color="info" isOpen={visible} toggle={onDismiss} className="center" id="tranAlert">
                        We have developed resources to help you through this challenging time. Click here<Link to="#" className="upgrade">Click here</Link> to learn more.
                    </Alert>
                </div>                
            <Row>
                <Col md={ 5 } xs={12}>
                <div className="slidertext">
                    <span className="activenumber">01</span>
                    <span className="numberGray">02</span>
                    <span className="numberGray">03</span>
                    <span className="numberGray">04</span>
                    <span className="numberGray">05</span>
                    <span className="numberGray">06</span>
                <h2>In this together. Keeping you securely connected wherever you are.</h2>
                <p>Power your productivity with a fast and reliable collaboration
                    tool. Engage and train your audience worldwide through live video call.
                </p>
                <p className="btn-four-style">
                    <Button color="primary " className="Sign-up-two">Sign up for free</Button>
                    <Button className="Sign-up-four">Helpful Resources</Button>
                </p>
                </div>
            </Col>
            <Col md={ 7 } xs={12}>
            </Col>
         </Row>
      </Container>
    </div>
   <div className="slider-twobg">       
      
   </div>
   <div className="PremiumFeatures">
      <Container >
         <Row>
            <div className="text-center">
               <Button color="white" className="text-center mb-2">
                  <h4>Premium <a href="#">Features</a></h4>
               </Button>
               <h2 className="text-center mb-3">Powerful Set Of Products & Features</h2>
               <div className="title-line"></div>
            </div>
            <Col md={ 3 } xs={12}>
            <div>
               <Card className="boxone">
                  <CardImg />
                  <CardBody>
                     <CardTitle tag="h5">Online Meeting</CardTitle>
                     <CardText>Online Meetings, Tranning & Technical Support</CardText>
                     <Button className="btn-box-one">Learn More</Button>
                  </CardBody>
               </Card>
            </div>
            <div>
               <Card className="boxtwo">
                  <CardImg src={Screensharing} alt="Card image cap" />
                  <CardBody>
                     <CardTitle tag="h5">Screen Sharing</CardTitle>
                  </CardBody>
               </Card>
            </div>
            <div>
               <Card className="boxthree">
                  <CardImg src={Mobileimage} alt="Card image cap" />
                  <CardBody>
                     <CardTitle tag="h5">Mobile Application</CardTitle>
                  </CardBody>
               </Card>
            </div>
            </Col>
            <Col md={ 6 } xs={12}>
            <div >
               <img src={MacBookPro} className="image-one-style" alt="MacBookPro" />
            </div>
            </Col>
            <Col md={ 3 } xs={12}>
            <div>
               <Card className="boxfour">
                  <CardImg src={Conferenceimage} alt="Card image cap" />
                  <CardBody>
                     <CardTitle tag="h5">Conference Rooms</CardTitle>
                  </CardBody>
               </Card>
            </div>
            <div>
               <Card className="boxfive">
                  <CardImg src={Chatimg} alt="Card image cap" />
                  <CardBody>
                     <CardTitle tag="h5">Meeting Chat</CardTitle>
                  </CardBody>
               </Card>
            </div>
            <div>
               <Card className="boxsix">
                  <CardImg src={Videoimage} alt="Card image cap" />
                  <CardBody>
                     <CardTitle tag="h5">Video Webinar</CardTitle>
                  </CardBody>
               </Card>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="valuableClient">
      <Container >
         <Row>
            <div className="text-center">
               <Button color="white" className="text-center mb-2">
                  <h4>valuable <a href="#">Client</a></h4>
               </Button>
               <h1 className="text-center mb-3">Trusted World’s Leading Companies</h1>
               <div className="title-line"></div>
            </div>
            <Col md={ 6 } xs={12}>
            <div className="Trusted">
               <h2>Trusted By 1000+ Clients Looks So Awesome!</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiu smod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exerce.
               </p>
               <p>Carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow
                  arrowtooth eel darter Atlantic herring southern sandfish. Vimba,
                  zebrafish yellow and black triplefin guitarfish Redfin perch.
               </p>
               <Link>
               <Button color="primary">View All Clients</Button>
               </Link>
            </div>
            </Col>
            <Col md={ 6 } xs={12}>
            <img src={ClientPic} className="client" alt="ClientPic" />
            </Col>
         </Row>
      </Container>
   </div>
   <div className="Aboutustwo ">
      <Container >
         <Row>
            <div className="text-center">
               <Button color="white" className="text-center mb-2">
                  <h4>About <a href="#">Us</a></h4>
               </Button>
               <h1 className="text-center mb-3">Why Vmeet?</h1>
               <div class="title-line" id="line"></div>
            </div>
            <Col md={ 6 } xs={12}>
            <div className="Trusted">
               <h2>Join Our Global CommunityAnd Get Access</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiu smod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exerce.
               </p>
               <p>
                  Carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow
                  arrowtooth eel darter Atlantic herring southern sandfish. Vimba,
                  zebrafish yellow and black triplefin guitarfish Redfin perch.
               </p>
               <Link>
               <Button color="primary">Know More</Button>
               </Link>
            </div>
            </Col>
            <Col md={ 3 } xs={12}>
            <div className="paddadd">
               <Card className="aboutusboxtwo one">
                  <CardImg src={GlobeImg} alt="Card image cap" />
                  <CardBody>
                     <p className="font18">One consistent enterprise
                        experience for all use cases
                     </p>
                  </CardBody>
               </Card>
            </div>
            <div className="paddadd">
               <Card className="aboutusboxtwo two">
                  <CardImg src={ThumbImage} alt="Card image cap" />
                  <CardBody>
                     <p className="font18">Easy-to-use and<br/>
                        buy, scale
                     </p>
                  </CardBody>
               </Card>
            </div>
            </Col>
            <Col md={ 3 } xs={12}>
            <div className="paddadd">
               <Card className="aboutusboxtwo three">
                  <CardImg src={GraphImage} alt="Card image cap" />
                  <CardBody>
                     <p className="font18">Up to 1,000 video participants
                        with 10,000 viewers
                     </p>
                  </CardBody>
               </Card>
            </div>
            <div className="paddadd">
               <Card className="aboutusboxtwo four">
                  <CardImg src={EngineeredImg} alt="Card image cap" />
                  <CardBody>
                     <p className="font18">Engineered & optimized to
                        work reliably
                     </p>
                  </CardBody>
               </Card>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   {/* 
   <Container>
      <Row>
         <Col xs="6">
         <Card>
            <CardBody>
               <CardTitle tag="h5">Customer reviews</CardTitle>
               <Row>
                  <Col xs="2">
                  <CardImg src={Twenty} alt="Card image cap" />
                  </Col>
                  <Col xs="4">
                  <h6>20th Century Fox</h6>
                  </Col>
               </Row>
               <CardText>"Vmeet is probably the most well-received </CardText>
               <CardText>collaboration tool that we've seen at Fox in 20 </CardText>
               <CardText>years. There is no other tool that has brought </CardText>
               <CardText>people closer together than Vmeet." </CardText>
               <br />
               <CardText><b>- Doug Goetz at 21st Century Fox</b></CardText>
            </CardBody>
         </Card>
         </Col>
      </Row>
   </Container>
   */}

   <div className="customerRvw">
     <Container>
         <div className="myCard">
             <h1 className="white_color">Customer reviews</h1>
             <span className="hdLine"></span>
             <img src={Twenty} alt={Twenty} className="myimages" />
             <span className="tt white_color">20th Century Fox</span>
             <div className="stardiv">
                 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
             </div>
             <p className="dsc white_color"> 
             "Vmeet is probably the most well-received collaboration tool that we've seen at Fox in 20 years. There is no other tool that has brought
             people closer together than Vmeet."
             </p>
             <p className="name white_color"><b>- Doug Goetz at 21st Century Fox</b></p>             
         </div>
         <div className="playIcon">
                 <PlayArrowIcon/>
             </div>                  
            <div className="hmSld">
                <Brandslider/>
            </div>
     </Container>
   </div>
   <div className="GetApp">  
      <Container >
         <Row>
            <div className="text-center">
               <Button color="white" className="text-center mb-2">
                  <h4>Get An <a href="#">App</a></h4>
               </Button>
               <h1 className="text-center mb-3">The Best App To Get Connect</h1>
               <div className="title-line"></div>
            </div>
            <Col md={ 6 } xs={12}>
            <div className="GetAppboxtwo">
               <h2>The Most Convenient And Our Global
                  Online Meeting Service
               </h2>
               <p>Online Meetings With Screen Sharing, Audio And Video Conferencing For
                  both platforms. Engage and train your audience worldwide through live
                  video call. Meet online securely to discuss, present and collaborate from
                  different locations with your mates.
               </p>
               <Link to="#" className="Android-btn">
               <img src={Android} alt={Android} /> Android
               </Link>
               <Link to="#" className="iOS-btn">
               <img src={Apple} alt={Apple} />iOS
               </Link>
            </div>
            </Col>
            <Col md={ 6 } xs={12}>
            <img src={Group} className="GetApp-img" alt="Group" />
            </Col>
         </Row>
      </Container>
   </div>
<div className="RequestDemo">
   <Container>
      <Row>
         <Col md={ 12 } xs={12}>
         <div className="Request-div text-center shadow bg-white rounded1 pt-5 pb-5">
            <h3>Request A <a href="#">Demo</a></h3>
            <p className="font12">Seeing is believing! Schedule a live demo with one of our product specialists at your convenience. <br />We can learn about your requirements, answer questions, and review ways. Vmeet can help you and your organization.</p>
            <p className="m-0">
               <Link to="#" className="RequestDemo-btn-one">
               Request A Demo</Link>
               <Link to="#" className="RequestDemo-btn-two rounded">
               Buy Now</Link>
            </p>
         </div>
         </Col>
      </Row>
   </Container>
   </div>
</div>
<Footer/>
</>
)
}
export default Home;