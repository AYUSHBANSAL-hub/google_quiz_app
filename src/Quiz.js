import React, { useState, useEffect } from "react";
import Question from "./Question";

const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Rome", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Helium"],
      correctAnswer: 1
    },
    {
      question: "What year did the Titanic sink in the Atlantic Ocean?",
      options: ["1912", "1905", "1898", "1923"],
      correctAnswer: 0
    },
    {
      question: "Who wrote 'Macbeth'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: 1
    },
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: 1
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correctAnswer: 2
    },
    {
      question: "Which country won the 2018 FIFA World Cup?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correctAnswer: 2
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Pepper"],
      correctAnswer: 1
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: 2
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      correctAnswer: 1
    }
];  
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [questionStatus, setQuestionStatus] = useState(
    Array(quizData.length).fill("notAnswered")
  );
  const [remainingTime, setRemainingTime] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  let timer; // Moved the timer declaration to a broader scope.

  useEffect(() => {
    const startTimer = () => {
      timer = setTimeout(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        }
      }, 1000);
    };

    startTimer();

    return () => {
      clearTimeout(timer);
    };
  }, [remainingTime]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowAnswer(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = {
      userAnswer: index,
      correct: isCorrect,
    };
    setAnswers(updatedAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (remainingTime > 0) {
      clearTimeout(timer);
      setRemainingTime(4); // Show answer for 4 seconds
    }

    if (currentQuestionIndex === quizData.length - 1) {
      setIsQuizEnded(true);
    } else {
      proceedToNextQuestion();
    }
  };

  const handleSkip = () => {
    setQuestionStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[currentQuestionIndex] = "skipped";
      return updatedStatus;
    });

    proceedToNextQuestion();
  };

  const proceedToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setRemainingTime(15); // Reset the timer for the new question
  };

  return (
    <div>
      {!isQuizEnded && (
        <div>
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
            correctAnswer={currentQuestion.correctAnswer}
          />
          <div>Time remaining: {remainingTime}</div>
          {showAnswer && (
            <div>
              <p>Your answer: {currentQuestion.options[selectedAnswer]}</p>
              <p
                style={{
                  color:
                    selectedAnswer === currentQuestion.correctAnswer
                      ? "green"
                      : "red",
                }}
              >
                Correct answer:{" "}
                {currentQuestion.options[currentQuestion.correctAnswer]}
              </p>
            </div>
          )}
          <div>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={proceedToNextQuestion}>Next</button>
          </div>
        </div>
      )}
      {isQuizEnded && (
        <div>
          <h2>Quiz ended!</h2>
          <div>Final Score: {score}</div>
          <button onClick={() => setIsQuizEnded(false)}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
