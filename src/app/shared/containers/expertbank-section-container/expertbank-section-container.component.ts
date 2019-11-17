import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpertbankModel } from 'src/app/models/expertbank.model';
import { Store, select } from '@ngrx/store';
import { getExpertbankList, getExpertbankProperty } from 'src/app/store/selectors/expertbank.selector';
import { LoadExpertbankList, LoadExpertbankProperty } from 'src/app/store/actions/expertbank.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertbank-section-container',
  templateUrl: './expertbank-section-container.component.html',
})
export class ExpertbankSectionContainerComponent implements OnInit {
  expertbanks: Observable<ExpertbankModel[]>;
  title: Observable<string>;
  buttonText: Observable<string>;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {
    this.expertbanks = this.store.pipe(
      select(getExpertbankList)
    );
    this.title = this.store.pipe(
      select(getExpertbankProperty, { property: 'title' })
    );
    this.buttonText = this.store.pipe(
      select(getExpertbankProperty, { property: 'buttonText' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('buttonText');
  }

  getList() {
    this.store.dispatch(LoadExpertbankList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadExpertbankProperty({ property }));
  }

  navigateToExpertBanks() {
    console.log('@@@');
    this.router.navigate(['/expertbanks']);
  }
}
