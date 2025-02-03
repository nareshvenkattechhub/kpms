import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const JointSecretary = () => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">Joint Secretary</Card.Header>
        <Card.Body>
          <h5>The Joint Secretary assists the General Secretary in the discharge of his duties and takes over in the absence of the General Secretary.</h5>
          <p>The Joint Secretary's responsibilities include the following:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>a. </strong>Assist the General Secretary in the discharge of his duties
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>b. </strong>In the absence of the General Secretary:
              <ListGroup variant="flush" className="ms-3">
                <ListGroup.Item>
                  <strong>i). </strong>Exercise all the powers entrusted to him by the General Secretary and perform his duties
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>ii). </strong>Be the publisher of the Magazines and Journals of the Association
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JointSecretary;
