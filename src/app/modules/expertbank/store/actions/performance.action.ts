import { createAction, props } from '@ngrx/store';

export enum PerformanceActionTypes {
  // property
  LoadPerformanceProperty = '[Performance] Load Performance Property',
  LoadPerformancePropertySuccess = '[Performance] Load Performance Property (success)',
  LoadPerformancePropertyFailure = '[Performance] Load Performance Property (failure)'
}

// property
export const LoadPerformanceProperty = createAction(
  PerformanceActionTypes.LoadPerformanceProperty,
  props<{ property: string }>()
);

export const LoadPerformancePropertySuccess = createAction(
  PerformanceActionTypes.LoadPerformancePropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadPerformancePropertyFailure = createAction(
  PerformanceActionTypes.LoadPerformancePropertyFailure,
  props<{ property: string, propertyError: any }>()
);
