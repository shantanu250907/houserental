import React from "react";
import{Container,Row,Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Download from './download.jpg';

function Demo() {
    return (
      <>
       <Container >
       <Row>
         <Col md={4}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Download} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
         </Col>
         <Col md={4}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Download} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
         </Col>
         <Col md={4}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Download} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
         </Col>
       </Row>
       </Container>
      </>
    );
  }
  
  export default Demo;
  