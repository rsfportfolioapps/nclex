import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RegistrationFormModel } from '../models/registration-form.model';

@Injectable()
export class RegistrationService extends BaseService {
  private propertyUrl = '/assets/data/registration.json';
  private registerFormUrl = '/api/register';

  getProperty(property: string, page: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[page][property]),
        catchError(this.handleError)
      );
  }

  submitRegistrationForm(formData: RegistrationFormModel) {
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
