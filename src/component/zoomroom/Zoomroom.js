
import { Col, Container, Row } from 'reactstrap'
import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import './Zoomroom.css'
import Sidebar from '../profilesidebar/ProfileSidebar'
import Footer from '../footer/Footer'

function Zoomroom() {
    return (
        <>
        
        <Topheader />
            <Header />
        <div className="zoomroom">


            <div>
                <Container className="note">
                    <Row>
                        <Col xs="12">
                            <p class="note_info">Note: As our world comes together to slow the spread of COVID-19 pandemic, the Vmeet Support Center has continued
                                to operate 24x7 globally to support you. Please see the updated<a href="#"> Support Guidelines during</a> these unprecedented times.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs="3">
                    <div className="bg-white shadow p-3 mt-5 rounded1">
                       <Sidebar/>
                       </div>
                    </Col>
                    <Col xs="9">
                    <div className="bg-white shadow p-3 rounded1 mt-5">
                        <h2 className="text-center">Zoom Rooms</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </>
        )
}

export default Zoomroom;