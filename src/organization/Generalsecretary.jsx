import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const GeneralSecretary = () => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">General Secretary</Card.Header>
        <Card.Body>
          <h5>The General Secretary is responsible for maintaining the Central Office and ensuring the smooth functioning of the Association</h5>
          <p>The General Secretary's duties include the following:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>a. </strong>Maintain the Central Office and attend to correspondence with the assistance of the Organizing Secretary, Secretaries, and Parliament
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>b. </strong>Control the Staff sanctioned to the Central Office
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>c. </strong>Maintain records of the minutes of the meeting of the Central and State Council, Central and State Executive, and Secretariat, and be in charge of all the records, registers, stores, and properties of the Association
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>d. </strong>Take suitable steps to implement the decisions or directions of the Central and State Council, Central and State Executive Committee, and the Secretariat
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>e. </strong>Consult the President in all important matters
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>f. </strong>Convening all meetings in consultation with the President, such as Secretariat, Executive and State Council, and Departmental cells
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>g. </strong>Take necessary steps to preserve the records and documents and arrange for their safe custody
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>h. </strong>Operate Bank Accounts jointly with the President
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>i. </strong>Maintain the Members list of the Central and State Branches, City Centre, Special Branches, and Assembly Constituencies
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>j. </strong>Maintain a register of properties of Central and State Branches, City Centre, Special Branches, and Assembly Constituencies
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>k. </strong>Incur expenditure within prescribed limits by the Central and State Executive. All payments exceeding Rs.1,000/- shall be made in consultation with the President
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>l. </strong>Be the Editor/Publisher of the Magazines/Journals of the Association
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GeneralSecretary;
