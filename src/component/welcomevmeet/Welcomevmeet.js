import React from 'react';
import './Welcomevmeet.css'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Topheader from '../topheader/Topheader';
import Header from '../header/Header';
import Footer from '../footer/Footer'
import Welcome from '../images/welcom.svg'
import Vmeetalone from '../images/vmeetAloone.svg'
import Startmeeting from '../images/startmeeting.svg'
import Chrome from '../images/chromeextension.svg'
import Microsoft from '../images/microsoftoutlookplugin.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  function getSteps() {
    return ['Account Info', 'Invite Colleagues', 'Test Meeting'];
  }

  

function Welcomevmeet() {

  
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };


    function getStepContent(step) {
      switch (step) {
        case 0:
          return (
              <Container>
                  <Row>
                      <Col xs={12} md={8}>
                          <img src={Welcome} alt={Welcome} className="stepleftImage"/>
                      </Col>
  
                      <Col xs={12} md={4}>
                          <div className="welcomevmeet-form mt-5 ">
                              <h5 className="font30">
                              <b>Welcome to Vmeet</b></h5>
                              <p className="font16 justify">Hi, Eva John. Your account has been successfully created. Plaeas list your name and create a password to continue</p>
                              <Form>
                                      <FormGroup className="mb-3">
                                          <Input type="text" id="stepInput" name="f-name" placeholder="First Name"/>
                                      </FormGroup>
                                      <FormGroup className="mb-3">
                                          <Input type="text" id="stepInput" name="l-name" placeholder="Last Name"/>
                                      </FormGroup>
                                      <FormGroup className="mb-3">
                                          <Input type="password" id="stepInput" name="password" placeholder="Password"/>
                                      </FormGroup>
  
                                      <FormGroup className="mb-3">
                                          <Input type="password" id="stepInput" name="c-password" placeholder="Confirm Password"/>
                                      </FormGroup> 
                                      <FormGroup>
                                        <p className="prc">By Signing Up, I Agree To The <Link to="#">Privacy Policy</Link> And <Link to="#">Terms Of Service.</Link></p>  
                                      </FormGroup>  
                                      <FormGroup>
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleNext}
                                          id="continueBtn"
                                        >Continue
                                        </Button>
                                      </FormGroup> 
                                      
                              </Form>
                          </div>
                      
                      </Col>
                  </Row>
              </Container>
          );
        case 1:
          return (
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <img src={Vmeetalone} alt={Vmeetalone} className="step2leftImage"/>
                    </Col>
  
                    <Col xs={12} md={4}>
                        <div className="welcomevmeet-form mt-5 ">
                            <h5 className="font30">
                            <b>Don't Vmeet Alone.</b></h5>
                            <p className="font16 justify">Invite your colleagues to create their own free Zoom account today! <Link to="#">Why invite?</Link></p>
                            <Form>
                                    <FormGroup className="mb-3">
                                        <Input type="text" id="stepInput" name="f-name" placeholder="name@domain.com"/>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input type="text" id="stepInput" name="l-name" placeholder="name@domain.com"/>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input type="text" id="stepInput" name="l-name" placeholder="name@domain.com"/>
                                    </FormGroup>
                                    <FormGroup>
                                      <p className="prc">An another mail</p>  
                                    </FormGroup>  
                                    <FormGroup>                                    
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleNext}
                                          id="inviteBtn"
                                        >Invite
                                        </Button>
                                      {isStepOptional(activeStep) && (
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleSkip}
                                          id="slipbtn"
                                        >
                                          Skip this Step
                                        </Button>
                                      )} 
                                    </FormGroup>
                            </Form>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        );
        case 2:
          return (
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <img src={Startmeeting} alt={Startmeeting} className="step2leftImage"/>
                    </Col>
  
                    <Col xs={12} md={4}>
                        <div className="welcomevmeet-form mt-5 ">
                            <h5 className="font30">
                            <b>Start your test meeting.</b></h5>
                            <p className="font12 justify">Excellent! Now it's time to start meeting.</p>
                            <br/>
                            <br/>
                            <p className="font18 justify mb-0"><b>Your personal meeting url:</b></p>
                            <Link to="#"><u><b>https://zoom.us/j/3760455439? pwd=NjFiRU9BZkdUaVlSQ2lYOUtVTGRvQT09</b></u></Link>
                            <Button id="srtMeetbtn">Start Meeting Now</Button>
                            <Button id="goaccbtn">Go To My Account</Button>
                            <hr/>
                            <p className="font12"><b>Save Time By Scheduling Your Meetings Directly From Your Calendar.</b></p>
                            <div className="mt-4">
                              <Row>
                                <Col md={6}>
                                  <Row>
                                    <Col md={2} className="pad0">
                                      <img src={Microsoft} alt={Microsoft} className="extImg" />
                                    </Col>
                                    <Col md={10}>
                                      <p className="font12 mb-0"><b>Microsoft Outlook Plugin</b></p>
                                      <Link to="#" className="font12">Download</Link>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row>
                                      <Col md={2} className="pad0">
                                        <img src={Chrome} alt={Chrome} className="extImg" />
                                      </Col>
                                      <Col md={10}>
                                        <p className="font12 mb-0"><b>Chrome Extension</b></p>
                                        <Link to="#" className="font12">Download</Link>
                                      </Col>
                                    </Row>
                                </Col>
                              </Row>
                            </div>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        );
        default:
          return 'Unknown step';
      }
    }
    return (
      <>
      <Topheader />
      <Header />
  <div className="Welcomevmeet">
    <Container>
            <div className={classes.root}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );

                  
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
            </div>
            ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button> */}
              
              


            </div>
          </div>
        )}
      </div>
    </div></Container>
  </div>
        <Footer/>
        </>
    );
}

export default Welcomevmeet;