import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UniversityService } from 'src/app/services/university.service';
import { UniversityModel } from 'src/app/models/university.model';
import { LoadUniversityListSuccess, LoadUniversityList, LoadUniversityListFailure } from '../actions/university.action';

@Injectable()
export class UniversityEffects {
  loadUniversityList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadUniversityList),
      mergeMap(() => {
        return this.universityService$.getUniversities()
          .pipe(
            map((list: UniversityModel[]) =>
              LoadUniversityListSuccess({ list })
            ),
            catchError(error =>
              of(LoadUniversityListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private universityService$: UniversityService
  ) { }
}
