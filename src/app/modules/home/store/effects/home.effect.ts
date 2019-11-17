import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HomeActionTypes, HomeActions } from '../actions/home.action';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  public loadHome$: Observable<any> = this.actions$.pipe(
    ofType(HomeActionTypes.LoadHome),
    mergeMap((action: HomeActions) => of([1, 2, 3]).pipe(
      map(([sampleArr]) => {
        return {
          type: HomeActionTypes.LoadHomeSuccess,
          payload: null
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );
}
