import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import xoriant from '../../Assets/xoriant.png';
import amazon from '../../Assets/amazon.jpeg';
import tacto from '../../Assets/tacto.png';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="white" style={{fontWeight: 'bold'}}>
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="education-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={amazon} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}}>SDE Intern</Card.Title>
                                    <br></br>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="education-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={xoriant} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Associate Software Engineer</Card.Title>
                                    <br></br>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
           
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="education-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={tacto} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Junior Software Engineer</Card.Title>
                                    <br></br>
                                  
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </TimelineContent>
            </TimelineItem>
        </Timeline>
        
    );
}