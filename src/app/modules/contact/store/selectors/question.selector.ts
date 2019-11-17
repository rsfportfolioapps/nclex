import { createSelector } from '@ngrx/store';
import { QuestionState } from '../reducers/question.reducer';

export const questionState = state => state.question;

export const getQuestionProperty = createSelector(
  questionState,
  (question: QuestionState, props) => question.properties[props.property]
);
