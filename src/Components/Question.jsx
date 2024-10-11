import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const Question = ({ question, options, correctAnswer, selectedAnswer, handleAnswer }) => {

  const getButtonColor = (opt) => {
    if (!selectedAnswer) return 'secondary'; 

    if (opt === correctAnswer) {
      return 'success'; 
    }

    if (opt === selectedAnswer && opt !== correctAnswer) {
      return 'danger'; 
    }

    return 'secondary'; 
  };

  return (
    <div className="container-1">
      <h2>{question}</h2>
      <div className="button-second">
        {options.map((opt, index) => (
          <MDBBtn
            rounded
            className="text-dark bt-button"
            color={getButtonColor(opt)} 
            key={index}
            onClick={() => handleAnswer(opt)}
            disabled={!!selectedAnswer} 
          >
            {opt}
          </MDBBtn>
        ))}
      </div>
    </div>
  );
};

export default Question;
  