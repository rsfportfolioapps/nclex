import { Component, OnInit, Input } from '@angular/core';
import { MotivationModel } from '../../models/motivation.model';

@Component({
  selector: 'app-motivation-section',
  templateUrl: './motivation-section.component.html',
  styleUrls: ['./motivation-section.component.scss']
})
export class MotivationSectionComponent implements OnInit {
  @Input() motivations: MotivationModel[];

  constructor() { }

  ngOnInit() {
  }
}
