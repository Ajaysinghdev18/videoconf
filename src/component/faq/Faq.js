import React from 'react';
import { Container } from 'reactstrap';
import './Faq.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '100%',
      flexShrink: 0,
      fontSize:'24px',
      color:'#000000',
      fontWeight:'600',
    },
  }));

const Faq = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="faqSection">
            <Container>
                <div className="faqDiv">
                    <h2 className="center">Frequently Asked Questions</h2>
                    <span className="unLine"></span>

                    <div >
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography className={classes.heading}>What is a Licensed user and what is a Participant?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            >
                            <Typography className={classes.heading}>How many participants can join the meeting?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            >
                            <Typography className={classes.heading}>How many people can use one meeting license?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>How many people can use one meeting license?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>What is the difference between Vmeet Rooms and a Meetings</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>What is the difference between an Audio Plan and Vmeet Phone?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>What payment methods do you accept?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Vmeet accepts credit card and Paypal payments online. To pay by check, wire transfer or ACH, please call 1.888.799.9666.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Can I pay quarterly or for more than a year up-front?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Do you charge sales or consumption taxes?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>How does the subscription service work? Can I cancel my subscription?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Where can I find a Vmeet W-9 for my business?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Where can I find Vmeet's Terms of Service?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expndIcon" />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>How does Vmeet keep the product secure?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Faq
