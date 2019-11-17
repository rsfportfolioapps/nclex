import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getQuestionProperty } from '../../store/selectors/question.selector';
import { LoadQuestionProperty, SubmitQuestionForm } from '../../store/actions/question.action';
import { QuestionFormModel } from '../../models/question.model';

@Component({
  selector: 'app-question-section-container',
  templateUrl: './question-section-container.component.html',
})
export class QuestionSectionContainerComponent implements OnInit {
  title: Observable<string>;
  subtitle: Observable<string>;
  buttonText: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getQuestionProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getQuestionProperty, { property: 'subtitle' })
    );
    this.buttonText = this.store.pipe(
      select(getQuestionProperty, { property: 'buttonText' })
    );
  }

  ngOnInit() {
    this.getProperty('title');
    this.getProperty('subtitle');
    this.getProperty('buttonText');
  }

  getProperty(property: string) {
    this.store.dispatch(LoadQuestionProperty({ property }));
  }

  handleSubmitQuestionForm(formData: QuestionFormModel) {
    this.store.dispatch(SubmitQuestionForm({ formData }));
  }
}

