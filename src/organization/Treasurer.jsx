import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const Treasurer = () => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">Treasurer</Card.Header>
        <Card.Body>
          <h5>The Treasurer is responsible for managing the financial affairs of the Association.</h5>
          <p>The Treasurer's responsibilities include the following:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>a. </strong>Collect the Association dues and assessments from the Central and State Branches, City Centre, Special Branches, and Assembly Constituencies, and report to the State Executive Committee periodically on the collections. Present annual audited accounts to the State Executive Committee within 3 months after the completion of the year.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>b. </strong>Maintain accounts, receipts, and expenditure. Present the yearly audited accounts furnished by the Branches, City Centre, and Special Branches to the State Executive Committee.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>c. </strong>Make payments as approved by the President.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>d. </strong>Assist the General Secretary in the preparation and presentation of the Annual Budget.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>e. </strong>Have the accounts audited every year and present them to the State Executive Committee.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>f. </strong>Place income and expenditure statements before the Executive periodically.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>g. </strong>Issue receipts for all the money received by the Association, deposit the same in the Bank, and inform the President periodically.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Treasurer;
