import { Component, OnInit, Input } from '@angular/core';
import { FaqModel, FaqGroupedByCategoryModel } from '../../models/faq.model';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {
  @Input() faqsGroupedByCategory: FaqGroupedByCategoryModel;

  constructor() { }

  ngOnInit() {
  }

}
