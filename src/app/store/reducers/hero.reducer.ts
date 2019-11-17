import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { HeroModel } from 'src/app/models/hero.model';
import {
  LoadHero,
  LoadHeroSuccess,
  LoadHeroFailure,
  PreviewHeroSuccess
} from '../actions/hero.action';

export interface HeroState {
  heroes: {
    [type: string]: HeroModel
  };
  isFetching: boolean;
  error: any;
}

const initialState: HeroState = {
  heroes: {},
  isFetching: false,
  error: null
};

const heroReducer = createReducer(
  initialState,

  on(
    LoadHero,
    (state, action) => ({ ...state, isFetching: true })
  ),

  on(
    LoadHeroSuccess,
    (state, action) => ({
      ...state,
      isFetching: false,
      heroes: {
        ...state.heroes,
        [action.page]: action.hero
      }
    })
  ),

  on(
    LoadHeroFailure,
    (state, action) => ({ ...state, isFetching: false, error: action.error })
  ),

  on(
    PreviewHeroSuccess,
    (state, action) => ({
      ...state,
      isFetching: false,
      heroes: {
        ...state.heroes,
        [action.page]: {
          ...state.heroes[action.page],
          ...action.hero
        }
      }
    })
  ),
);

export function HeroReducer(state, action) {
  return heroReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
