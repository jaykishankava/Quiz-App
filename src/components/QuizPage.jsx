import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './quizPage.css';

const QuizPage = ({ quiz, setScore, setCompleted, setUserAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      toast.error('Please select an answer!');  
      return;
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
      }
    });
    setScore(score);
    setUserAnswers(answers); 
    setCompleted(true);
    toast.success('Quiz completed!');
  };

  const currentQ = quiz.questions[currentQuestion];

  return (
    <div className="quiz-page">
      <h2 className="text-center">{quiz.title}</h2>
      <div className="question-card shadow-sm p-4 mt-4">
        <h4>{`Question ${currentQuestion + 1}: ${currentQ.question}`}</h4>
        <Form>
          {currentQ.options.map((option, index) => (
            <Form.Check
              type="radio"
              id={`option-${index}`}
              label={option}
              name="answer"
              key={index}
              value={option}
              onChange={() => handleAnswerSelect(option)}
              checked={answers[currentQuestion] === option}
              className="mb-3"
            />
          ))}
        </Form>
        <Button 
          variant="secondary" 
          className="w-100 mt-3" 
          onClick={handleNext}
        >
          {currentQuestion < quiz.questions.length - 1 ? 'Next' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
