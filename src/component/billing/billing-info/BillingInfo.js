import { Container, Row, Col, TabContent, Card, CardTitle, CardText, TabPane, Nav, NavItem, NavLink, CustomInput, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";

function BillingInfo () {
    return (
        <>
        <div>
        <Row>
                            <Col sm="12">
                                <div className="she-meeting pt-5 pb-5">
                                    <Row>
                                        <Col xs="6">
                                        <h5 className="mb-5">Billing Information</h5>
                                        </Col>
                                        <Col xs="6">
                                        <h6>Currency</h6>
                                        <div class="currency">
                                            
                                            <FormGroup className="float-right">
                                                
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option selected="selected">Indian Ruppee</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </div>
                                        </Col>
                                    </Row>
                                
                                <Container>
                                    <Form>
                                    <FormGroup>
                                    <Row>
                                        <Col xs="6">
                                            <Label>First Name</Label>
                                            <Input type="text" placeholder="First name"/>
                                        </Col>
                                        <Col xs="6">
                                            <Label>Last Name</Label>
                                            <Input type="text" placeholder="Last name"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="12">
                                            
                                        <Label>Email Address</Label>
                                        <Input type="text" placeholder="Johnev@gmail.com"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="12">
                                            
                                        <Label>Addition Email Address</Label>
                                        <Input type="text" placeholder="Johnev@gmail.com"/>
                                        </Col>
                                    </Row>
                                    <br/>

                                    <Row>
                                        <Col xs="6">
                                            <Label>Phone (Please Include Country/Region Code) </Label>
                                            <Input type="text" placeholder="Enter number"/>
                                        </Col>
                                        <Col xs="6">
                                            <Label>Additional Number</Label>
                                            <Input type="text" placeholder="Enter Number"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="6">
                                            <Label>Company /Organization Name</Label>
                                            <Input type="text" placeholder="Enter number"/>
                                        </Col>
                                        <Col xs="6">
                                            <Label>Total Employee Count Of Your Organization </Label>
                                            <FormGroup>
                                                
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option selected="selected">Select Number</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="6">
                                            <Label>Country</Label>
                                            <FormGroup>
                                                
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option selected="selected">India</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="6">
                                            <Label>State/Province </Label>
                                            <FormGroup>
                                                
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option selected="selected">Select state</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="6">
                                            <Label>Headquarters Zip</Label>
                                            <Input type="text" placeholder="Enter Code"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="12">
                                        <Label>Additional Information Related To Your Business Needs*</Label>
                                        <Input type="textarea" name="text" id="exampleText" placeholder="Enter Information" />
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="6">
                                        <Label>Sold To Contact</Label>

                                        </Col>
                                        <Col xs="6">
                                            <Label>Same as Bill To Contact</Label>
                                        </Col>
                                    </Row>
                                    <hr/>

                                    <h5><b>Payment Method</b></h5>
                                    <br/>
                                    <Row>
                                        <Col xs="6">
                                        <Label><b>Full Address</b></Label>

                                        </Col>
                                        <Col xs="6">
                                            <Label>Same as Bill To Contact</Label>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs="12">
                                        <Label>Card Holder Name</Label>
                                        <Input type="text" placeholder="Enter Name"/>

                                        </Col>
                                    </Row><br/>

                                    <Row>
                                        <Col xs="12">
                                        <Label>Credit Card Number</Label>
                                        <Input type="text" placeholder="**** **** **** ****"/>

                                        </Col>
                                    </Row><br/>
                                    <Row>
                                        <Col xs="6">
                                        <Label>CVV</Label>
                                        <Input type="text" placeholder="Enter code"/>

                                        </Col>
                                    </Row><br/>

                                    <Row>
                                        <Col xs="6">
                                        <Label>Expiration Date</Label>
                                        <Input type="date"/>

                                        </Col>
                                        <Col xs="6">
                                            <Label></Label>
                                        <Input type="date"/>

                                        </Col>
                                    </Row><br/>
                                    <Button color="primary" className="rounded">update</Button>
                                    
                                    </FormGroup>
                                    </Form>
                                    
                                </Container>
                                </div>
                            </Col>
                            
                        </Row>
                    
        </div>
        </>
    ) 
}

export default BillingInfo;