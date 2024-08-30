import './AccountProfile.css'
import { Col, Container, Row } from 'reactstrap'
import Topheader from '../topheader/Topheader'
import Header from '../header/Header'
import Sidebar from '../profilesidebar/ProfileSidebar'
import Accountimg from '../../images/Accountprofile/profile.png';
import { Button } from 'reactstrap';


function AccountProfile () {
    return (
            <>
            <div className="accountprofile">
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
                    <Col xs="9" className="profile">
                    <div className="bg-white shadow p-3 mt-5 rounded1">
                        <h3 className="text-center">Account Profile</h3>
                        <div className="text-center">
                        <img src={Accountimg} alt={Accountimg} className="w-50" />
                        </div>
                        
                        <Container>
                            <Row>
                                <h6>Basic Information</h6>
                                <Col xs="4" className="basic_info font16">
                                    <h6 className="text-center">Account Type</h6>
                                    <Button color="primary" className="rounded">Free Plan</Button>
                                    <a href="#" >Upgrade Plan</a>
                                </Col>
                                <Col xs="4" className="basic_info">
                                    <h6 className="text-center">Your Role</h6>
                                    <span className="text-center">Owner</span>
                                </Col>
                                <Col xs="4" className="basic_info">
                                <h6 className="text-center">Meeting Capacity</h6>
                                <p>By default a paid user in your account can host</p>
                                </Col>
                            </Row>
                        </Container>
                        
                        <h5>Learn More Details</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>

            </>
    )
}

export default AccountProfile;