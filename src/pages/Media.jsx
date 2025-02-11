import React from 'react';
import { Card, Button, ListGroup, Row, Col, Image } from 'react-bootstrap';




import Navigation from '../components/Navigation';
function Media() {
  return (



    <section
      id="media"
      className="py-5"
      style={{
        backgroundColor: '#a63225', 
        height:"100vh",// Setting background color for the whole page
      }}
    >

      <div className="container">
        {/* Title */}
        <h2 className="text-center display-4 mb-4 text-white fw-bold">Media</h2>

        {/* Newspapers Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card
              style={{
                background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Card.Header className="text-center text-white">Newspapers</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Daily News 1</ListGroup.Item>
                  <ListGroup.Item>Daily News 2</ListGroup.Item>
                  <ListGroup.Item>Daily News 3</ListGroup.Item>
                  <ListGroup.Item>Global Times</ListGroup.Item>
                </ListGroup>
                <Button variant="light" className="mt-3 w-100">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Upcoming Events Section */}
          <Col md={6}>
            <Card
              style={{
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Card.Header className="text-center text-white">Upcoming Events</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Event 1 - Date: Feb 10</ListGroup.Item>
                  <ListGroup.Item>Event 2 - Date: Mar 5</ListGroup.Item>
                  <ListGroup.Item>Event 3 - Date: Apr 20</ListGroup.Item>
                </ListGroup>
                <Button variant="light" className="mt-3 w-100">
                  View All Events
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Videos Section */}
        <Row>
          <Col md={12}>
            <Card
              style={{
                background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Card.Header className="text-center text-white">Media Videos</Card.Header>
              <Card.Body>
                <Row className="g-4">
                  {/* Video 1 */}
                  <Col md={4}>
                    <Card>
                      <Image
                        src="https://via.placeholder.com/500x300"
                        fluid
                        alt="Video 1"
                        style={{ borderRadius: '10px' }}
                      />
                      <Card.Body>
                        <Card.Title>Video Title 1</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Video 2 */}
                  <Col md={4}>
                    <Card>
                      <Image
                        src="https://via.placeholder.com/500x300"
                        fluid
                        alt="Video 2"
                        style={{ borderRadius: '10px' }}
                      />
                      <Card.Body>
                        <Card.Title>Video Title 2</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Video 3 */}
                  <Col md={4}>
                    <Card>
                      <Image
                        src="https://via.placeholder.com/500x300"
                        fluid
                        alt="Video 3"
                        style={{ borderRadius: '10px' }}
                      />
                      <Card.Body>
                        <Card.Title>Video Title 3</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Media;
