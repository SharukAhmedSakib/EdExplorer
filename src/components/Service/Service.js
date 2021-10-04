import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    const {image, author, name, description, price, duration, participant} = props.service;
    return (
        <div>
            {
                <Card style={{height:"600px"}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{author}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Card.Text><h1>$ {price}</h1></Card.Text>
                  <div className="d-flex justify-content-between">
                  <Card.Text><FontAwesomeIcon icon={faClock} />{' '}{duration}hr</Card.Text>
                  <Card.Text><FontAwesomeIcon icon={faUsers} />{' '}{participant}</Card.Text>
                  </div>
                <Button variant="primary w-100">Purchase</Button>
                </Card.Footer>
              </Card>
            }
        </div>
    );
};

export default Service;