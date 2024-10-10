import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './home.css';  

const HomePage = ({ startQuiz }) => {
  return (
    <div className="home-page text-center">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h1>Welcome to the Quiz Application</h1>
            <p className="lead mt-4">
              Test your knowledge by selecting a quiz and answering a series of multiple-choice questions.
            </p>
            <Button 
              variant="secondary" 
              className="mt-4"
              onClick={startQuiz}
            >
              Start Quiz
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
