import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-university-section-details',
  templateUrl: './university-section-details.component.html',
  styleUrls: ['./university-section-details.component.scss']
})
export class UniversitySectionDetailsComponent implements OnInit {
  @Input() name: string;
  @Output() inputChange = new EventEmitter();
  title = '';

  constructor() { }

  ngOnInit() {
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.inputChange.emit({ [name]: value });
  }
}
