import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getPerformanceProperty } from '../../store/selectors/performance.selector';
import { LoadPerformanceProperty } from '../../store/actions/performance.action';

@Component({
  selector: 'app-performance-section-container',
  templateUrl: './performance-section-container.component.html',
})
export class PerformanceSectionContainerComponent implements OnInit {
  title: Observable<string>;
  imageUrlFront: Observable<string>;
  imageUrlBack: Observable<string>;
  description: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getPerformanceProperty, { property: 'title' })
    );
    this.imageUrlFront = this.store.pipe(
      select(getPerformanceProperty, { property: 'imageUrlFront' })
    );
    this.imageUrlBack = this.store.pipe(
      select(getPerformanceProperty, { property: 'imageUrlBack' })
    );
    this.description = this.store.pipe(
      select(getPerformanceProperty, { property: 'description' })
    );
  }

  ngOnInit() {
    this.getProperty('title');
    this.getProperty('imageUrlFront');
    this.getProperty('imageUrlBack');
    this.getProperty('description');
  }

  getProperty(property: string) {
    this.store.dispatch(LoadPerformanceProperty({ property }));
  }
}
