import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: [
    './hero-section.component.scss'
  ]
})
export class HeroSectionComponent implements OnInit {
  @Input() readonly hero: HeroModel;

  constructor() { }

  ngOnInit() {

  }
}
