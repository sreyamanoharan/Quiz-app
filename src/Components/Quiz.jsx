import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "JQuery", "CSS", "JavaScript"],
      correctAnswer: "CSS"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oganesson", "Oxine"],
      correctAnswer: "Oxygen"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "J.K. Rowling", "Mark Twain", "William Shakespeare"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "Which year did World War I begin?",
      options: ["1914", "1939", "1812", "1920"],
      correctAnswer: "1914"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: "Diamond"
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C#"],
      correctAnswer: "JavaScript"
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8"
    }
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer); 

   
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestions(nextQuestion);
        setSelectedAnswer(null); 
      } else {
        setShowResult(true); 
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          correctAnswer={quizData[currentQuestion].correctAnswer}
          selectedAnswer={selectedAnswer} 
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
