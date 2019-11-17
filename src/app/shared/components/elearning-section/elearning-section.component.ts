import { Component, OnInit, Input } from '@angular/core';
import { ElearningModel } from 'src/app/models/elearning.model';

@Component({
  selector: 'app-elearning-section',
  templateUrl: './elearning-section.component.html',
  styleUrls: ['./elearning-section.component.scss']
})
export class ElearningSectionComponent implements OnInit {
  @Input() title: string;
  @Input() buttonText: string;
  @Input() elearnings: ElearningModel[];

  constructor() { }

  ngOnInit() {
  }

}
