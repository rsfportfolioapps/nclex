import { createSelector } from '@ngrx/store';
import { HeroState } from '../reducers/hero.reducer';

export const heroState = state => state.hero;

export const getHeroByPage = createSelector(
  heroState,
  (hero: HeroState, props) => hero.heroes[props.page]
);
