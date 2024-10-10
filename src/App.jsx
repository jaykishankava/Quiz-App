import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';  
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScoreSummary from './components/ScoreSummary';
import Home from './components/Home';  
import { quizzes } from './data/quizzes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);  


  const startQuiz = () => {
    setShowInstructions(false);
  };

  const handleQuizCompletion = () => {
    toast.success('Quiz completed!');
    setCompleted(true);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        {showInstructions && (
          <Home startQuiz={startQuiz} />  
        )}
        {!showInstructions && !currentQuiz && !completed && (
          <QuizList quizzes={quizzes} setCurrentQuiz={setCurrentQuiz} />
        )}
        {currentQuiz && !completed && (
          <QuizPage 
            quiz={currentQuiz} 
            setScore={setScore} 
            setCompleted={handleQuizCompletion} 
            setUserAnswers={setUserAnswers}
          />
        )}
        {completed && (
          <ScoreSummary 
            quiz={currentQuiz} 
            score={score} 
            setCurrentQuiz={setCurrentQuiz} 
            setCompleted={setCompleted} 
            userAnswers={userAnswers} 
          />
        )}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
