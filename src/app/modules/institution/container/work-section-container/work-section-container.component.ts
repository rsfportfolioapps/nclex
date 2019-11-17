import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WorkModel } from '../../models/work.model';
import { getWorkList, getWorkProperty } from '../../store/selectors/work.selector';
import { LoadWorkList, LoadWorkProperty } from '../../store/actions/work.action';

@Component({
  selector: 'app-work-section-container',
  templateUrl: './work-section-container.component.html',
})
export class WorkSectionContainerComponent implements OnInit {
  works: Observable<WorkModel[]>;
  title: Observable<string>;
  subtitle: Observable<string>;

  constructor(private store: Store<any>) {
    this.works = this.store.pipe(
      select(getWorkList)
    );
    this.title = this.store.pipe(
      select(getWorkProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getWorkProperty, { property: 'subtitle' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('subtitle');
  }

  getList() {
    this.store.dispatch(LoadWorkList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadWorkProperty({ property }));
  }
}
