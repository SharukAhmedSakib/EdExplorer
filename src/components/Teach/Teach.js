import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Teach = () => {
    return (
        <div>
            <Container className="my-5 p-5">
                <Form className="w-50 my-5 p-5 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">  
                        <Button variant="primary" type="Log in">
                            Submit
                        </Button>
                        <Button variant="warning">
                                Register Now
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Teach;