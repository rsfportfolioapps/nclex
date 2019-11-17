import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FigureService } from 'src/app/services/figure.service';
import { FigureModel } from 'src/app/models/figure.model';
import { LoadFigureListSuccess, LoadFigureList, LoadFigureListFailure } from '../actions/figure.action';

@Injectable()
export class FigureEffects {
  loadFigureList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadFigureList),
      mergeMap(() => {
        return this.figureService$.getFigures()
          .pipe(
            map((figures: FigureModel[]) =>
              LoadFigureListSuccess({ list: figures })
            ),
            catchError(error =>
              of(LoadFigureListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private figureService$: FigureService
  ) { }
}
