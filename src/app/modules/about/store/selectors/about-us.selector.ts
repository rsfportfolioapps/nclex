import { createSelector } from '@ngrx/store';
import { AboutUsState } from '../reducers/about-us.reducer';

export const aboutUsState = state => state.aboutUs;

export const getAboutUsList = createSelector(
  aboutUsState,
  (aboutUs: AboutUsState) => aboutUs.list
);
