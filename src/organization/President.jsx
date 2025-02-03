import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const President = () => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">President</Card.Header>
        <Card.Body>
          <h5>The President shall be the Chief Executive of the Association</h5>
          <p>The President's responsibilities include, but are not limited to, the following:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>a. </strong>Exercise overall control over the affairs of the Association
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>b. </strong>Preside over all the meetings of the Central and State Council, Central and State Executive Committee, and the Parliament Secretariat
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>c. </strong>Keep close contact with the central and state Branches, City Centre, Special Branches, and Assembly Constituencies
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>d. </strong>Closely watch the administrative and legislative measures directly affecting the interests of the Employers and Employees and initiate appropriate action
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>e. </strong>Appoint the Staff within the scale approved by the Executive Committee in consultation with the General Secretary
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>f. </strong>Consult the General Secretary in all important matters
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>g. </strong>Have power to permit expenditure in excess of the limit prescribed in article VIII (3) (c) in case of urgency and present it before the next Executive Committee for approval
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>h. </strong>The President shall be the Chief Executive of the Association at both Central and State levels
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>i. </strong>Operate Bank Accounts with the General Secretary
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default President;
