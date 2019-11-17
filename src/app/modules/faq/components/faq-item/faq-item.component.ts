import { Component, OnInit, Input } from '@angular/core';
import { FaqModel } from '../../models/faq.model';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {
  @Input() faqItem: FaqModel;

  showAnswer = false;

  constructor() { }

  ngOnInit() {
  }

  handleClick(event): void {
    event.preventDefault();
    this.toggleShowAnswer();
  }

  toggleShowAnswer() {
    this.showAnswer = !this.showAnswer;
  }

}
