import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FeatureModel } from '../../models/feature.model';
import { getFeatureList, getFeatureProperty } from '../../store/selectors/feature.selector';
import { LoadFeatureList, LoadFeatureProperty } from '../../store/actions/feature.action';

@Component({
  selector: 'app-feature-section-container',
  templateUrl: './feature-section-container.component.html',
})
export class FeatureSectionContainerComponent implements OnInit {
  features: Observable<FeatureModel[]>;
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.features = this.store.pipe(
      select(getFeatureList)
    );
    this.title = this.store.pipe(
      select(getFeatureProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
  }

  getList() {
    this.store.dispatch(LoadFeatureList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadFeatureProperty({ property }));
  }
}

