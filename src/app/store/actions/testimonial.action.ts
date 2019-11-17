import { createAction, props } from '@ngrx/store';
import { TestimonialModel } from 'src/app/models/testimonial.model';

export enum TestimonialActionTypes {
  // list
  LoadTestimonialList = '[Testimonial] Load Testimonial List',
  LoadTestimonialListSuccess = '[Testimonial] Load Testimonial List (success)',
  LoadTestimonialListFailure = '[Testimonial] Load Testimonial List (failure)',

  // property
  LoadTestimonialProperty = '[Testimonial] Load Testimonial Property',
  LoadTestimonialPropertySuccess = '[Testimonial] Load Testimonial Property (success)',
  LoadTestimonialPropertyFailure = '[Testimonial] Load Testimonial Property (failure)'
}

// list
export const LoadTestimonialList = createAction(
  TestimonialActionTypes.LoadTestimonialList
);

export const LoadTestimonialListSuccess = createAction(
  TestimonialActionTypes.LoadTestimonialListSuccess,
  props<{ list: TestimonialModel[] }>()
);

export const LoadTestimonialListFailure = createAction(
  TestimonialActionTypes.LoadTestimonialListFailure,
  props<{ error: any }>()
);

// property
export const LoadTestimonialProperty = createAction(
  TestimonialActionTypes.LoadTestimonialProperty,
  props<{ property: string }>()
);

export const LoadTestimonialPropertySuccess = createAction(
  TestimonialActionTypes.LoadTestimonialPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadTestimonialPropertyFailure = createAction(
  TestimonialActionTypes.LoadTestimonialPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
