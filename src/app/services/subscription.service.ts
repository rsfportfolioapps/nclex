import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { SubscriptionFormModel } from '../models/subscription-form.model';

@Injectable()
export class SubscriptionService extends BaseService {
  private propertyUrl = '/assets/data/subscription.json';
  private registerFormUrl = '/api/register';

  getProperty(property: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[property]),
        catchError(this.handleError)
      );
  }

  submitSubscriptionForm(formData: SubscriptionFormModel) {
    console.log('@TODO: Implement API:', JSON.stringify(formData, null, 2));
    return this.post(this.registerFormUrl, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
