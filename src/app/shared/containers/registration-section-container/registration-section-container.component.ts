import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getRegistrationProperty } from 'src/app/store/selectors/registration.selector';
import { LoadRegistrationProperty, SubmitRegistrationForm } from 'src/app/store/actions/registration.action';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';

@Component({
  selector: 'app-registration-section-container',
  templateUrl: './registration-section-container.component.html',
})
export class RegistrationSectionContainerComponent implements OnInit {
  @Input() page: string;

  title: Observable<string>;
  subtitle: Observable<string>;
  buttonText: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getRegistrationProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getRegistrationProperty, { property: 'subtitle' })
    );
    this.buttonText = this.store.pipe(
      select(getRegistrationProperty, { property: 'buttonText' })
    );
  }

  ngOnInit() {
    this.getProperty('title', this.page);
    this.getProperty('subtitle', this.page);
    this.getProperty('buttonText', this.page);
  }

  getProperty(property: string, page: string) {
    this.store.dispatch(LoadRegistrationProperty({ property, page }));
  }

  handleSubmitRegistrationForm(formData: RegistrationFormModel) {
    this.store.dispatch(SubmitRegistrationForm({ formData }));
  }
}

