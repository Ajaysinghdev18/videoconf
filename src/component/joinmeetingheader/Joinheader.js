import React from 'react';
import './Joinheader.css';
import { Col, Container, Row, NavbarBrand } from 'reactstrap';
import Logo from '../images/logo.png';
import { Link } from "react-router-dom";
import Questionmark from '../images/Question-Mark.svg';
import Setting from '../images/Settings.svg';

const Joinheader = () => {
    return (
        <div className="joinheader">
            <Container>
                <Row>
                    <Col md="8" xs={12}>
                        <NavbarBrand href="/" className="hdLogo">
                            <img src={Logo} className="logo" alt="Logo" />
                        </NavbarBrand>
                        <p className="timedate aft">
                            5:30 PM
                        </p>
                        <p className="timedate">
                           Mon Oct 12 
                        </p>
                    </Col>
                    <Col md={4} xs={12} className="right">
                        <Link to="/#" className="iconSet">
                            <img src={Questionmark} alt={Questionmark} />
                        </Link>
                        <Link to="/#" className="iconSet">
                            <img src={Setting} alt={Setting} />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Joinheader
