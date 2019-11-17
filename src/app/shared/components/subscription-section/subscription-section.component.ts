import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { SubscriptionFormModel } from 'src/app/models/subscription-form.model';

@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss']
})
export class SubscriptionSectionComponent implements OnInit {
  @Input() title: string;
  @Output() submitForm = new EventEmitter();

  formData: SubscriptionFormModel;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event, email) {
    event.preventDefault();
    this.formData = { email };
    this.submitForm.emit(this.formData);
  }
}
