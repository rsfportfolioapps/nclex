import { createAction, props } from '@ngrx/store';
import { InstitutionModel } from 'src/app/models/institution.model';

export enum InstitutionActionTypes {
  LoadInstitutionList = '[Institution] Load Institution List',
  LoadInstitutionListSuccess = '[Institution] Load Institution List (success)',
  LoadInstitutionListFailure = '[Institution] Load Institution List (failure)'
}

export const LoadInstitutionList = createAction(
  InstitutionActionTypes.LoadInstitutionList
);

export const LoadInstitutionListSuccess = createAction(
  InstitutionActionTypes.LoadInstitutionListSuccess,
  props<{ list: InstitutionModel[] }>()
);

export const LoadInstitutionListFailure = createAction(
  InstitutionActionTypes.LoadInstitutionListFailure,
  props<{ error: any }>()
);
