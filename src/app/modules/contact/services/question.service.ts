import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { QuestionFormModel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {
  private propertyUrl = '/assets/data/question.json';
  private registerFormUrl = '/api/register';

  getProperty(property: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[property]),
        catchError(this.handleError)
      );
  }

  submitQuestionForm(formData: QuestionFormModel) {
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
