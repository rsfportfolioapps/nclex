import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElearningService extends BaseService {
  private url = '/assets/data/elearnings.json';
  private propertyUrl = '/assets/data/elearning.json';

  getElearnings() {
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
