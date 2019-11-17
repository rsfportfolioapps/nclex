import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccreditationModel } from 'src/app/models/accreditation.model';
import { Store, select } from '@ngrx/store';
import { getAccreditationList, getAccreditationProperty } from 'src/app/store/selectors/accreditation.selector';
import { LoadAccreditationList, LoadAccreditationProperty } from 'src/app/store/actions/accreditation.action';

@Component({
  selector: 'app-accreditation-section-container',
  templateUrl: './accreditation-section-container.component.html',
})
export class AccreditationSectionContainerComponent implements OnInit {
  accreditations: Observable<AccreditationModel[]>;
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.accreditations = this.store.pipe(
      select(getAccreditationList)
    );
    this.title = this.store.pipe(
      select(getAccreditationProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
  }

  getList() {
    this.store.dispatch(LoadAccreditationList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadAccreditationProperty({ property }));
  }
}
