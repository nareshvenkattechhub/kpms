import React from 'react';
import { Container, Card } from 'react-bootstrap';

const VicePresident = () => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">Vice President</Card.Header>
        <Card.Body>
          <h5>The Vice President shall assist the President in discharging his duties</h5>
          <ul>
            <li>Assist the President in his duties</li>
            <li>Exercise all powers delegated by the President</li>
            <li>In the absence of the President, assume all powers and duties</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VicePresident;
