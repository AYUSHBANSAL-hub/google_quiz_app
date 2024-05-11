// src/reducers.js
import { combineReducers } from 'redux';
import {
  SET_CURRENT_QUESTION,
  SET_ANSWERS,
  SET_SCORE,
  SET_QUESTION_STATUS,
} from './actions';

const currentQuestionIndex = (state = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

const answers = (state = [], action) => {
  switch (action.type) {
    case SET_ANSWERS:
      return action.payload;
    default:
      return state;
  }
};

const score = (state = 0, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.payload;
    default:
      return state;
  }
};

const questionStatus = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTION_STATUS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentQuestionIndex,
  answers,
  score,
  questionStatus,
});

export default rootReducer;
