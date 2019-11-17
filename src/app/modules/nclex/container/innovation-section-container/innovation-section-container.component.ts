import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { InnovationModel } from '../../models/innovation.model';
import { getInnovationList, getInnovationProperty } from '../../store/selectors/innovation.selector';
import { LoadInnovationList, LoadInnovationProperty } from '../../store/actions/innovation.action';

@Component({
  selector: 'app-innovation-section-container',
  templateUrl: './innovation-section-container.component.html',
})
export class InnovationSectionContainerComponent implements OnInit {
  innovations: Observable<InnovationModel[]>;
  title: Observable<string>;
  subtitle: Observable<string>;
  imageUrl: Observable<string>;

  constructor(private store: Store<any>) {
    this.innovations = this.store.pipe(
      select(getInnovationList)
    );
    this.title = this.store.pipe(
      select(getInnovationProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getInnovationProperty, { property: 'subtitle' })
    );
    this.imageUrl = this.store.pipe(
      select(getInnovationProperty, { property: 'imageUrl' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('subtitle');
    this.getProperty('imageUrl');
  }

  getList() {
    this.store.dispatch(LoadInnovationList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadInnovationProperty({ property }));
  }
}

