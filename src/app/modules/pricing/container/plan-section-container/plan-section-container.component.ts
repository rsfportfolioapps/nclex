import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PlanModel } from '../../models/plan.model';
import { getPlanList, getPlanProperty } from '../../store/selectors/plan.selector';
import { LoadPlanList, LoadPlanProperty } from '../../store/actions/plan.action';

@Component({
  selector: 'app-plan-section-container',
  templateUrl: './plan-section-container.component.html',
})
export class PlanSectionContainerComponent implements OnInit {
  plans: Observable<PlanModel[]>;
  title: Observable<string>;
  subtitle: Observable<string>;
  checkImageUrl: Observable<string>;
  buttonText: Observable<string>;

  constructor(private store: Store<any>) {
    this.plans = this.store.pipe(
      select(getPlanList)
    );
    this.title = this.store.pipe(
      select(getPlanProperty, { property: 'title' })
    );
    this.subtitle = this.store.pipe(
      select(getPlanProperty, { property: 'subtitle' })
    );
    this.checkImageUrl = this.store.pipe(
      select(getPlanProperty, { property: 'checkImageUrl' })
    );
    this.buttonText = this.store.pipe(
      select(getPlanProperty, { property: 'buttonText' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('subtitle');
    this.getProperty('checkImageUrl');
    this.getProperty('buttonText');
  }

  getList() {
    this.store.dispatch(LoadPlanList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadPlanProperty({ property }));
  }
}
