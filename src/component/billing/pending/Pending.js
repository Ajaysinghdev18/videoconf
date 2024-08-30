import './Pending.css';
import { Container, Row, Col, TabContent, Card, CardTitle, CardText, TabPane, Nav, NavItem, NavLink, CustomInput, Form, FormGroup, Label, Input, Button } from 'reactstrap';


function Pending () {
    return (
        <>
        <div>
            
        
            <Row>
                <Col xs="12" className="pendingplan">
                    <div className="prweww-col pt-5 pb-5">
                        <h4 className="font14">Pending Plan</h4>
                        <div className="pendingbody">
                            <h6>no pending plan found</h6>
                            <Button color="primary">Views Plan</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        

        </div>
        </>
    )
}

export default Pending;