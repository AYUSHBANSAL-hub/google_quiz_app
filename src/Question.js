// src/Question.js
import React from 'react';

const Question = ({ question, options, onAnswerSelect, selectedAnswer, correctAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelect(index)}
          disabled={selectedAnswer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;