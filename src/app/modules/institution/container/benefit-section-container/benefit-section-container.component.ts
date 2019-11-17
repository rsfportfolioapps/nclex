import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BenefitModel } from '../../models/benefit.model';
import { getBenefitList, getBenefitProperty } from '../../store/selectors/benefit.selector';
import { LoadBenefitList, LoadBenefitProperty } from '../../store/actions/benefit.action';

@Component({
  selector: 'app-benefit-section-container',
  templateUrl: './benefit-section-container.component.html',
})
export class BenefitSectionContainerComponent implements OnInit  {
  benefits: Observable<BenefitModel[]>;
  title: Observable<string>;
  checkIconUrl: Observable<string>;

  constructor(private store: Store<any>) {
    this.benefits = this.store.pipe(
      select(getBenefitList)
    );
    this.title = this.store.pipe(
      select(getBenefitProperty, { property: 'title' })
    );
    this.checkIconUrl = this.store.pipe(
      select(getBenefitProperty, { property: 'checkIconUrl' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('checkIconUrl');
  }

  getList() {
    this.store.dispatch(LoadBenefitList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadBenefitProperty({ property }));
  }
}
