import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import nyuimg from '../../Assets/nyu.jpeg';
import muimg from '../../Assets/mu.webp';
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
                    2021-2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="education-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={nyuimg} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}}>MS - Computer Science</Card.Title>
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
                <TimelineOppositeContent color="white" style={{fontWeight: 'bold'}}>
                    2016-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="education-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={muimg} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >BE - Computer Engineering</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}