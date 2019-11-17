import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-performance-section',
  templateUrl: './performance-section.component.html',
  styleUrls: ['./performance-section.component.scss']
})
export class PerformanceSectionComponent implements OnInit {
  @Input() imageUrlBack: string;
  @Input() imageUrlFront: string;
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
