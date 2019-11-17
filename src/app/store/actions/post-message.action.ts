import { createAction, props } from '@ngrx/store';

export enum PostMessageActionTypes {
  SendPostMessageSuccess = '[Post Message] Send Post Message (success)',
  SendPostMessageFailure = '[Post Message] Send Post Message (failure)',
}

export const SendPostMessageSuccess = createAction(
  PostMessageActionTypes.SendPostMessageSuccess,
  props<{ metadata: any }>()
);

export const SendPostMessageFailure = createAction(
  PostMessageActionTypes.SendPostMessageFailure,
  props<{ error: any }>()
);
