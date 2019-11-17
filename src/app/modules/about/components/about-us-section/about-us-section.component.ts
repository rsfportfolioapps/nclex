import { Component, OnInit, Input } from '@angular/core';
import { AboutUsModel } from 'src/app/modules/about/models/about-us.model';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {
  @Input() aboutUsList: AboutUsModel[];

  constructor() { }

  ngOnInit() {
  }

}
