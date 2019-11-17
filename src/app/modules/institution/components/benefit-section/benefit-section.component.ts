import { Component, OnInit, Input } from '@angular/core';
import { BenefitModel } from '../../models/benefit.model';

@Component({
  selector: 'app-benefit-section',
  templateUrl: './benefit-section.component.html',
  styleUrls: ['./benefit-section.component.scss']
})
export class BenefitSectionComponent implements OnInit {
  @Input() title: string;
  @Input() checkIconUrl: string;
  @Input() benefits: BenefitModel[];

  constructor() { }

  ngOnInit() {
  }

}
