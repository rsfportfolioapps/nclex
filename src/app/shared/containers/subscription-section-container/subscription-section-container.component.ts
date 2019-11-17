import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getSubscriptionProperty } from 'src/app/store/selectors/subscription.selector';
import { LoadSubscriptionProperty, SubmitSubscriptionForm } from 'src/app/store/actions/subscription.action';
import { SubscriptionFormModel } from 'src/app/models/subscription-form.model';

@Component({
  selector: 'app-subscription-section-container',
  templateUrl: './subscription-section-container.component.html',
})
export class SubscriptionSectionContainerComponent implements OnInit {
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getSubscriptionProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getProperty('title');
  }

  getProperty(property: string) {
    this.store.dispatch(LoadSubscriptionProperty({ property }));
  }

  handleSubmitSubscriptionForm(formData: SubscriptionFormModel) {
    this.store.dispatch(SubmitSubscriptionForm({ formData }));
  }
}
