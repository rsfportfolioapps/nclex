import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practice-section',
  templateUrl: './practice-section.component.html',
  styleUrls: ['./practice-section.component.scss']
})
export class PracticeSectionComponent implements OnInit {
  @Input() title: string;
  @Output() clickPractice = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(event): void {
    this.clickPractice.emit(event);
  }

}
