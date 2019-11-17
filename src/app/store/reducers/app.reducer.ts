import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

