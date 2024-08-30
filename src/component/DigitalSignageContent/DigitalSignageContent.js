import './DigitalSignageContent.css'
import { Col, Container, Row } from 'reactstrap'
import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import Sidebar from '../profilesidebar/ProfileSidebar'
import Footer from '../footer/Footer'

function DigitalSignageContent () {
    return (
        <>
        <div className="Digital_Signage_Content">

            <Topheader />
            <Header />

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
                    <div className="bg-white shadow p-3 mt-5 rounded1">
                        <h2 className="text-center">Digital Signage Content</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </>
    )
}

export default DigitalSignageContent;