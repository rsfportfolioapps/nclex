import { createAction, props } from '@ngrx/store';
import { AccreditationModel } from 'src/app/models/accreditation.model';

export enum AccreditationActionTypes {
  // list
  LoadAccreditationList = '[Accreditation] Load Accreditation List',
  LoadAccreditationListSuccess = '[Accreditation] Load Accreditation List (success)',
  LoadAccreditationListFailure = '[Accreditation] Load Accreditation List (failure)',

  // property
  LoadAccreditationProperty = '[Accreditation] Load Accreditation Property',
  LoadAccreditationPropertySuccess = '[Accreditation] Load Accreditation Property (success)',
  LoadAccreditationPropertyFailure = '[Accreditation] Load Accreditation Property (failure)'
}

// list
export const LoadAccreditationList = createAction(
  AccreditationActionTypes.LoadAccreditationList
);

export const LoadAccreditationListSuccess = createAction(
  AccreditationActionTypes.LoadAccreditationListSuccess,
  props<{ list: AccreditationModel[] }>()
);

export const LoadAccreditationListFailure = createAction(
  AccreditationActionTypes.LoadAccreditationListFailure,
  props<{ error: any }>()
);

// property
export const LoadAccreditationProperty = createAction(
  AccreditationActionTypes.LoadAccreditationProperty,
  props<{ property: string }>()
);

export const LoadAccreditationPropertySuccess = createAction(
  AccreditationActionTypes.LoadAccreditationPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadAccreditationPropertyFailure = createAction(
  AccreditationActionTypes.LoadAccreditationPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
