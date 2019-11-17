import { createAction, props } from '@ngrx/store';
import { HeroModel } from 'src/app/models/hero.model';

export enum HeroActionTypes {
  LoadHero = '[Hero] Load Hero',
  LoadHeroSuccess = '[Hero] Load Hero (success)',
  LoadHeroFailure = '[Hero] Load Hero (failure)',

  // admin
  PreviewHero = '[Hero] Preview Hero',
  PreviewHeroSuccess = '[Hero] Preview Hero (success)',
}

export const LoadHero = createAction(
  HeroActionTypes.LoadHero,
  props<{ page: string }>()
);

export const LoadHeroSuccess = createAction(
  HeroActionTypes.LoadHeroSuccess,
  props<{ page: string, hero: HeroModel }>()
);

export const LoadHeroFailure = createAction(
  HeroActionTypes.LoadHeroFailure,
  props<{ error: any }>()
);

// admin
export const PreviewHero = createAction(
  HeroActionTypes.PreviewHero,
  props<{ page: string, hero: HeroModel }>()
);

export const PreviewHeroSuccess = createAction(
  HeroActionTypes.PreviewHeroSuccess,
  props<{ page: string, hero: HeroModel }>()
);
