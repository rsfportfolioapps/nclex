import { Component, ViewEncapsulation, OnInit, Input, OnChanges } from '@angular/core';
import { UniversityModel } from 'src/app/models/university.model';
import chunk from 'lodash/chunk';

@Component({
  encapsulation: ViewEncapsulation.None, // for scss reasons
  selector: 'app-university-carousel',
  templateUrl: './university-carousel.component.html',
  styleUrls: ['./university-carousel.component.scss']
})
export class UniversityCarouselComponent implements OnInit, OnChanges {
  @Input() universities: UniversityModel[];

  private itemPerSlide$ = 5;

  slides: [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.universities) {
      this.setSlides(changes.universities.currentValue);
    }
  }

  setSlides(universities: UniversityModel): void {
    this.slides = chunk(universities, this.itemPerSlide$);
  }

}
