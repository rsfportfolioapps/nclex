import { createSelector } from '@ngrx/store';
import { UniversityState } from '../reducers/university.reducer';

export const universityState = state => state.university;

export const getUniversityList = createSelector(
  universityState,
  (university: UniversityState) => university.list
);
