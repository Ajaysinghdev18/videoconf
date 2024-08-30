import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Seemorestory.css';
import Seemore from '../images/seemor.png';
import Quats from '../images/quats.png';
import {Link} from 'react-router-dom';

const Seemorestory = () => {
    return (
        <>
        <div className="seeStory">
            <Container fluid>
                <Row>
                    <Col md={6} xs={12}>
                        <img src={Seemore} alt={Seemore} className="seeImg" />
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="quatesSec">
                            <img src={Quats} alt={Quats} className="quats" />
                            <p className="white_color font22">I never get asked about how to use Vmeet- people just get <br/>
                            accounts and I never hear from them again, all I see is the <br/>
                            usage on the dashboard go up continuously.</p>
                            <h4 className="white_color">GREG MARTIN, SENIOR MANAGER OF NASDAQ</h4>
                            <Link to="#" className="seebtn">See More Stories</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>        
        </>
    )
}

export default Seemorestory
