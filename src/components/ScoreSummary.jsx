import React from 'react';
import { Button } from 'react-bootstrap';
import './score.css';

const ScoreSummary = ({ quiz, score, setCurrentQuiz, setCompleted, userAnswers }) => {
  const handleRestart = () => {
    setCurrentQuiz(null);
    setCompleted(false);
  };

  return (
    <div className="score-summary text-center">
      <h2>Quiz Completed!</h2>
      <div className="score-card shadow-sm p-4 mt-4">
        <h3>Your Score: {score} / {quiz.questions.length}</h3>
        <ul className="list-group mt-4">
          {quiz.questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <li key={index} className={`list-group-item ${isCorrect ? 'correct-answer' : 'wrong-answer'}`}>
                <strong>Q{index + 1}:</strong> {question.question}
                <br />
                <span className={`user-answer ${isCorrect ? 'text-success' : 'text-danger'}`}>
                  Your Answer: {userAnswer ? userAnswer : 'No Answer'}
                </span>
                <br />
                <span className="correct-answer text-success">
                  Correct Answer: {question.correctAnswer}
                </span>
              </li>
            );
          })}
        </ul>
        <Button 
          variant="secondary" 
          className="mt-4 w-100" 
          onClick={handleRestart}
        >
          Back to Quiz List
        </Button>
      </div>
    </div>
  );
};

export default ScoreSummary;
