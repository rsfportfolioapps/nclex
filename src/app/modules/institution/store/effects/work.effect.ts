import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WorkModel } from '../../models/work.model';
import { WorkService } from '../../services/work.service';
import {
  LoadWorkListSuccess,
  LoadWorkList,
  LoadWorkListFailure,
  LoadWorkPropertySuccess,
  LoadWorkPropertyFailure,
  LoadWorkProperty
} from '../actions/work.action';

@Injectable()
export class WorkEffects {
  // list
  loadWorkList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadWorkList),
      mergeMap(() => {
        return this.workService$.getWorks()
          .pipe(
            map((works: WorkModel[]) =>
              LoadWorkListSuccess({ list: works })
            ),
            catchError(error =>
              of(LoadWorkListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadWorkProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadWorkProperty),
      mergeMap(({ property }) => {
        return this.workService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadWorkPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadWorkPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private workService$: WorkService
  ) { }
}
