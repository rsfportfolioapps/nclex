import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccreditationService extends BaseService {
  private url = '/assets/data/accreditations.json';
  private propertyUrl = '/assets/data/accreditation.json';

  getAccreditations() {
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
