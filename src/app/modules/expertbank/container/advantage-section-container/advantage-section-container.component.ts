import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AdvantageModel } from '../../models/advantage.model';
import { getAdvantageList, getAdvantageProperty } from '../../store/selectors/advantage.selector';
import { LoadAdvantageList, LoadAdvantageProperty } from '../../store/actions/advantage.action';

@Component({
  selector: 'app-advantage-section-container',
  templateUrl: './advantage-section-container.component.html',
})
export class AdvantageSectionContainerComponent implements OnInit {
  advantages: Observable<AdvantageModel[]>;
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.advantages = this.store.pipe(
      select(getAdvantageList)
    );
    this.title = this.store.pipe(
      select(getAdvantageProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
  }

  getList() {
    this.store.dispatch(LoadAdvantageList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadAdvantageProperty({ property }));
  }
}
