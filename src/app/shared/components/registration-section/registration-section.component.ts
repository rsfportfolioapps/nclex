import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';

@Component({
  selector: 'app-registration-section',
  templateUrl: './registration-section.component.html',
  styleUrls: ['./registration-section.component.scss']
})
export class RegistrationSectionComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() buttonText: string;
  @Output() submitForm = new EventEmitter();

  formData: RegistrationFormModel;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event, name, email, institution, contactPerson, contactNumber) {
    event.preventDefault();
    this.formData = { name, email, institution, contactPerson, contactNumber };
    this.submitForm.emit(this.formData);
  }

}
