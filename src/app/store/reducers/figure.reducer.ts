import { environment } from 'src/environments/environment';
import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { FigureModel } from 'src/app/models/figure.model';
import {
  LoadFigureList,
  LoadFigureListSuccess,
  LoadFigureListFailure
} from '../actions/figure.action';

export interface FigureState {
  list: FigureModel[];
  isFetchingList: boolean;
  error: any;
}

const initialState: FigureState = {
  list: [],
  isFetchingList: false,
  error: null
};

const figureReducer = createReducer(
  initialState,

  on(
    LoadFigureList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadFigureListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadFigureListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
);

export function FigureReducer(state, action) {
  return figureReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
