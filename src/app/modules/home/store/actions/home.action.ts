import { Action } from '@ngrx/store';

export enum HomeActionTypes {
  LoadHome = '[Home] Load Home',
  LoadHomeSuccess = '[Home] Load Home (success)'
}

export class LoadHome implements Action {
  readonly type = HomeActionTypes.LoadHome;
}

export class LoadHomeSuccess implements Action {
  readonly type = HomeActionTypes.LoadHomeSuccess;

  constructor(public payload: any) { }
}

export type HomeActions = LoadHome | LoadHomeSuccess;
