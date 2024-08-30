import React from 'react';
import { Col, Row, Container  } from 'reactstrap';
import Userimage from '../images/userImg.png';
import Ashwin from '../images/Ashwin.png';
import Bruce from '../images/Bruce.png';
import Diana from '../images/Diana.png';
import './Videochat.css';
import Rightbar from '../rightbar/Rightbar';
import Videobottom from '../videobottom/Videobottom';

const Videochat = (props) => {
   
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={9} xs={12}>
                        <div className="customSectionFlex">
                            <div className="videoSection">
                                <img src={Userimage} alt={Userimage} className="w_100"/>
                            </div>
                            <div className="videoSection">
                                <img src={Ashwin} alt={Ashwin} className="w_100"/>
                            </div>
                            <div className="videoSection">
                                <img src={Bruce} alt={Bruce} className="w_100"/>
                            </div>
                            <div className="videoSection">
                                <img src={Diana} alt={Diana} className="w_100"/>
                            </div>
                            <div className="videoSection">
                                <img src={Userimage} alt={Userimage} className="w_100"/>
                            </div>
                            <div className="videoSection">
                                <img src={Ashwin} alt={Ashwin} className="w_100"/>
                            </div>
                        </div>
                        <Videobottom />
                    </Col>
                    <Col md={3} xs={12}>
                        <Rightbar/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Videochat