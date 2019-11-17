import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import {
  LoadTestimonialListSuccess,
  LoadTestimonialList,
  LoadTestimonialListFailure,
  LoadTestimonialPropertySuccess,
  LoadTestimonialPropertyFailure,
  LoadTestimonialProperty
} from '../actions/testimonial.action';

@Injectable()
export class TestimonialEffects {
  // list
  loadTestimonialList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadTestimonialList),
      mergeMap(() => {
        return this.testimonialService$.getTestimonials()
          .pipe(
            map((list: TestimonialModel[]) =>
              LoadTestimonialListSuccess({ list })
            ),
            catchError(error =>
              of(LoadTestimonialListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadTestimonialProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadTestimonialProperty),
      mergeMap(({ property }) => {
        return this.testimonialService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadTestimonialPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadTestimonialPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private testimonialService$: TestimonialService
  ) { }
}
