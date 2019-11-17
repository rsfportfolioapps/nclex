import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadInstitutionList } from 'src/app/store/actions/institution.action';
import { getInstitutionList } from 'src/app/store/selectors/institution.selector';
import { InstitutionModel } from 'src/app/models/institution.model';

@Component({
  selector: 'app-institution-section-container',
  templateUrl: './institution-section-container.component.html',
})
export class InstitutionSectionContainerComponent implements OnInit {
  institutions: Observable<InstitutionModel[]>;

  constructor(private store: Store<any>) {
    this.institutions = this.store.pipe(
      select(getInstitutionList)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadInstitutionList());
  }
}
