import { createSelector } from '@ngrx/store';
import { MotivationState } from '../reducers/motivation.reducer';

export const motivationState = state => state.motivation;

export const getMotivationList = createSelector(
  motivationState,
  (motivation: MotivationState) => motivation.list
);
