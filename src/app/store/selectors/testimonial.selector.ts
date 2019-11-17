import { createSelector } from '@ngrx/store';
import { TestimonialState } from '../reducers/testimonial.reducer';

export const testimonialState = state => state.testimonial;

export const getTestimonialList = createSelector(
  testimonialState,
  (testimonial: TestimonialState) => testimonial.list
);

export const getTestimonialProperty = createSelector(
  testimonialState,
  (testimonial: TestimonialState, props) => testimonial.properties[props.property]
);
