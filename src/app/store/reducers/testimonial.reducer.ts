import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { TestimonialModel, TestimonialPropertyModel, TestimonialPropertyFetchingModel } from 'src/app/models/testimonial.model';
import {
  LoadTestimonialList,
  LoadTestimonialListSuccess,
  LoadTestimonialListFailure,
  LoadTestimonialProperty,
  LoadTestimonialPropertySuccess,
  LoadTestimonialPropertyFailure
} from '../actions/testimonial.action';

export interface TestimonialState {
  // list
  list: TestimonialModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: TestimonialPropertyModel;
  propertiesFetching: TestimonialPropertyFetchingModel;
  propertiesError: TestimonialPropertyModel;
}

const initialState: TestimonialState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: ''
  },
  propertiesFetching: {
    title: false
  },
  propertiesError: {
    title: ''
  }
};

const testimonialReducer = createReducer(
  initialState,

  // list
  on(
    LoadTestimonialList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadTestimonialListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadTestimonialListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadTestimonialProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadTestimonialPropertySuccess,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      properties: {
        ...state.properties,
        [action.property]: action.propertyValue
      }
    })
  ),

  on(
    LoadTestimonialPropertyFailure,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      propertiesError: {
        ...state.propertiesError,
        [action.property]: action.propertyError
      }
    })
  ),
);

export function TestimonialReducer(state, action) {
  return testimonialReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
