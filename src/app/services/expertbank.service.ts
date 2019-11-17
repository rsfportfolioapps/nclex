import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExpertbankService extends BaseService {
  private url = '/assets/data/expertbanks.json';
  private propertyUrl = '/assets/data/expertbank.json';

  getExpertbanks() {
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
