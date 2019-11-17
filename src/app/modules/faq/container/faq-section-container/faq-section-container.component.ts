import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FaqModel } from '../../models/faq.model';
import { getFaqGroupedByProperty } from '../../store/selectors/faq.selector';
import { LoadFaqList } from '../../store/actions/faq.action';

@Component({
  selector: 'app-faq-section-container',
  templateUrl: './faq-section-container.component.html',
})
export class FaqSectionContainerComponent implements OnInit {
  faqsGroupedByCategory: Observable<FaqModel[]>;

  constructor(private store: Store<any>) {
    this.faqsGroupedByCategory = this.store.pipe(
      select(getFaqGroupedByProperty, { property: 'category' })
    );
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.store.dispatch(LoadFaqList());
  }
}
