import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const About = () => {


    const color={color:"gray"};

    return (
        <div>
            <Container>
            <br />
            <h1>Team</h1>
            <br />
            <h3 style={color}>React development is led by a small dedicated team working full time at Facebook. It also receives contributions from people all over the world.</h3>
            <br />
            <h1>Meet the Team</h1>
            <p style={color}>The React team members work full time on the core component APIs, the engine that powers React DOM and React Native, React DevTools, and the React documentation website.</p>
            <br />
            <CardGroup>
                <Card className="p-2">
                <Card.Img variant="top" src="https://reactjs.org/static/1e34460fee229cb3a8f4726957e38c2c/2233a/acdlite.jpg" />
                <Card.Body>
                    <Card.Title>Andrew Clark</Card.Title>
                    <Card.Text>
                    Andrew got started with web development by making sites with WordPress
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                <Card className="p-2">
                <Card.Img variant="top" src="https://reactjs.org/static/a7fed27b1623bb69bc78adf1d157ced4/3ac88/bvaughn.jpg" />
                <Card.Body>
                    <Card.Title>Brian Vaughn</Card.Title>
                    <Card.Text>
                    Brian studied art in college and did programming on the side to pay for his education.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                <Card className="p-2">
                <Card.Img variant="top" src="https://reactjs.org/static/afb31f3065fd4e93dc7c21e8d316983e/3ac88/lunaruan.jpg" />
                <Card.Body>
                    <Card.Title>Luna Ruan</Card.Title>
                    <Card.Text>Luna learned programming because she thought it meant creating video games.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default About;