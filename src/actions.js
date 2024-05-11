// src/actions.js
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_ANSWERS = 'SET_ANSWERS';
export const SET_SCORE = 'SET_SCORE';
export const SET_QUESTION_STATUS = 'SET_QUESTION_STATUS';

export const setCurrentQuestion = (index) => ({
  type: SET_CURRENT_QUESTION,
  payload: index,
});

export const setAnswers = (answers) => ({
  type: SET_ANSWERS,
  payload: answers,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});

export const setQuestionStatus = (status) => ({
  type: SET_QUESTION_STATUS,
  payload: status,
});
