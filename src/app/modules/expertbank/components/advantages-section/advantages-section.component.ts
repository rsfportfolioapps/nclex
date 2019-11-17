import { Component, OnInit, Input } from '@angular/core';
import { AdvantageModel } from '../../models/advantage.model';

@Component({
  selector: 'app-advantages-section',
  templateUrl: './advantages-section.component.html',
  styleUrls: ['./advantages-section.component.scss']
})
export class AdvantagesSectionComponent implements OnInit {
  @Input() title: string;
  @Input() advantages: AdvantageModel[];

  constructor() { }

  ngOnInit() {
  }

}
