import { Component, OnInit, Input } from '@angular/core';
import { ImprovementModel } from '../../models/improvement.model';

@Component({
  selector: 'app-improvement-section',
  templateUrl: './improvement-section.component.html',
  styleUrls: ['./improvement-section.component.scss']
})
export class ImprovementSectionComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() improvements: ImprovementModel[];

  constructor() { }

  ngOnInit() {
  }

}
