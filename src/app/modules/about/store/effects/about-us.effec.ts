import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AboutUsService } from '../../services/about-us.service';
import { AboutUsModel } from '../../models/about-us.model';
import { LoadAboutUsList, LoadAboutUsListSuccess, LoadAboutUsListFailure } from '../actions/about-us.action';

@Injectable()
export class AboutUsEffects {
  loadAboutUsList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadAboutUsList),
      mergeMap(() => {
        return this.aboutUsService$.getAboutUsList()
          .pipe(
            map((list: AboutUsModel[]) =>
              LoadAboutUsListSuccess({ list })
            ),
            catchError(error =>
              of(LoadAboutUsListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private aboutUsService$: AboutUsService
  ) { }
}
