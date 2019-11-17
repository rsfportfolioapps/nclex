import { HomeActions } from '../actions/home.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export function HomeReducer(state: {}, action: HomeActions): {} {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

