import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import { getTestimonialList, getTestimonialProperty } from 'src/app/store/selectors/testimonial.selector';
import { LoadTestimonialList, LoadTestimonialProperty } from 'src/app/store/actions/testimonial.action';

@Component({
  selector: 'app-testimonial-section-container',
  templateUrl: './testimonial-section-container.component.html',
})
export class TestimonialSectionContainerComponent implements OnInit {
  testimonials: Observable<TestimonialModel[]>;
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.testimonials = this.store.pipe(
      select(getTestimonialList)
    );
    this.title = this.store.pipe(
      select(getTestimonialProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
  }

  getList() {
    this.store.dispatch(LoadTestimonialList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadTestimonialProperty({ property }));
  }
}
