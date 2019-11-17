import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpertbankModel } from 'src/app/models/expertbank.model';

@Component({
  selector: 'app-expertbank-section',
  templateUrl: './expertbank-section.component.html',
  styleUrls: ['./expertbank-section.component.scss']
})
export class ExpertbankSectionComponent implements OnInit {
  @Input() title: string;
  @Input() buttonText: string;
  @Input() expertbanks: ExpertbankModel[];
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.buttonClick.emit();
  }
}
