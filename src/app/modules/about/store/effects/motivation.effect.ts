import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MotivationService } from '../../services/motivation.service';
import { MotivationModel } from '../../models/motivation.model';
import { LoadMotivationListSuccess, LoadMotivationList, LoadMotivationListFailure } from '../actions/motivation.action';

@Injectable()
export class MotivationEffects {
  loadMotivationList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadMotivationList),
      mergeMap(() => {
        return this.motivationService$.getMotivations()
          .pipe(
            map((list: MotivationModel[]) =>
              LoadMotivationListSuccess({ list })
            ),
            catchError(error =>
              of(LoadMotivationListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private motivationService$: MotivationService
  ) { }
}
