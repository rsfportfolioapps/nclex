import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class TestimonialService extends BaseService {
  private url = '/assets/data/testimonials.json';
  private propertyUrl = '/assets/data/testimonial.json';

  getTestimonials() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProperty(property: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[property]),
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
