import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FeatureModel } from '../../models/feature.model';
import { FeatureService } from '../../services/feature.service';
import {
  LoadFeatureListSuccess,
  LoadFeatureList,
  LoadFeatureListFailure,
  LoadFeaturePropertySuccess,
  LoadFeaturePropertyFailure,
  LoadFeatureProperty
} from '../actions/feature.action';

@Injectable()
export class FeatureEffects {
  // list
  loadFeatureList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadFeatureList),
      mergeMap(() => {
        return this.featureService$.getFeatures()
          .pipe(
            map((features: FeatureModel[]) =>
              LoadFeatureListSuccess({ list: features })
            ),
            catchError(error =>
              of(LoadFeatureListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadFeatureProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadFeatureProperty),
      mergeMap(({ property }) => {
        return this.featureService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadFeaturePropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadFeaturePropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private featureService$: FeatureService
  ) { }
}
