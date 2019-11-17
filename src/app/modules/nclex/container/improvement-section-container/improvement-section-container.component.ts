import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ImprovementModel } from '../../models/improvement.model';
import { getImprovementList, getImprovementProperty } from '../../store/selectors/improvement.selector';
import { LoadImprovementList, LoadImprovementProperty } from '../../store/actions/improvement.action';

@Component({
  selector: 'app-improvement-section-container',
  templateUrl: './improvement-section-container.component.html',
})
export class ImprovementSectionContainerComponent implements OnInit {
  improvements: Observable<ImprovementModel[]>;
  title: Observable<string>;
  subtitle: Observable<string>;

  constructor(private store: Store<any>) {
    this.improvements = this.store.pipe(
      select(getImprovementList)
    );
    this.title = this.store.pipe(
      select(getImprovementProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getImprovementProperty, { property: 'subtitle' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('subtitle');
  }

  getList() {
    this.store.dispatch(LoadImprovementList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadImprovementProperty({ property }));
  }
}
