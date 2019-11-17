import { Component, OnInit, Input, OnChanges, ViewEncapsulation  } from '@angular/core';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import chunk from 'lodash/chunk';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialSectionComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() testimonials: TestimonialModel[];

  private itemPerSlide$ = 2;

  slides: [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.testimonials) {
      this.slides = chunk(changes.testimonials.currentValue, this.itemPerSlide$);
    }
  }

}
