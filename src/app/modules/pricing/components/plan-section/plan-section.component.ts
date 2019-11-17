import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-section',
  templateUrl: './plan-section.component.html',
  styleUrls: ['./plan-section.component.scss']
})
export class PlanSectionComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  @Input() checkImageUrl;
  @Input() buttonText;
  @Input() plans;

  constructor() { }

  ngOnInit() {
  }

}
