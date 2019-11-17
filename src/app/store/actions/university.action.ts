import { createAction, props } from '@ngrx/store';
import { UniversityModel } from 'src/app/models/university.model';

export enum UniversityActionTypes {
  LoadUniversityList = '[University] Load University List',
  LoadUniversityListSuccess = '[University] Load University List (success)',
  LoadUniversityListFailure = '[University] Load University List (failure)'
}

export const LoadUniversityList = createAction(
  UniversityActionTypes.LoadUniversityList
);

export const LoadUniversityListSuccess = createAction(
  UniversityActionTypes.LoadUniversityListSuccess,
  props<{ list: UniversityModel[] }>()
);

export const LoadUniversityListFailure = createAction(
  UniversityActionTypes.LoadUniversityListFailure,
  props<{ error: any }>()
);
