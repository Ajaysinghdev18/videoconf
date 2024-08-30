import React from 'react';
import './Mailsend.css'
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'reactstrap';
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import Mailsendimg from '../../images/mailsend/Image.svg'
import Footer from '../footer/Footer'

function Mailsend() {
    return (
        <div className="Mailsend">
            <Topheader />
            <Header />
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="mailsend-main text-center">
                            <img src={Mailsendimg} alt={Mailsendimg} className="w-25"/>
                            <h5 className="mt-3"><b>We've sent an email to evajohn@companyname.com. <br/>Click the confirmation link in that email to begin using Vmeet.</b></h5>
                            <p className="font16"><b>if you did not receive the email,</b></p>
                            <Link to="#">Resend Another Mail</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Mailsend;