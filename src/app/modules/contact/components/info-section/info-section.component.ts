import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  @Input() title: string;
  @Input() email: string;
  @Input() details: string;

  constructor() { }

  ngOnInit() {
  }

}
