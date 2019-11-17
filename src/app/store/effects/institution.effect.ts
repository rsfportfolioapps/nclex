import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InstitutionService } from 'src/app/services/institution.service';
import { InstitutionModel } from 'src/app/models/institution.model';
import { LoadInstitutionListSuccess, LoadInstitutionList, LoadInstitutionListFailure } from '../actions/institution.action';

@Injectable()
export class InstitutionEffects {
  loadInstitutionList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadInstitutionList),
      mergeMap(() => {
        return this.institutionService$.geInstitutions()
          .pipe(
            map((institutions: InstitutionModel[]) =>
              LoadInstitutionListSuccess({ list: institutions })
            ),
            catchError(error =>
              of(LoadInstitutionListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private institutionService$: InstitutionService
  ) { }
}
