import { Component, OnInit, Input } from '@angular/core';
import { FeatureModel } from '../../models/feature.model';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {
  @Input() title: string;
  @Input() features: FeatureModel[];

  constructor() { }

  ngOnInit() {
  }

}
