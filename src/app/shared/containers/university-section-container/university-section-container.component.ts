import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getUniversityList } from 'src/app/store/selectors/university.selector';
import { LoadUniversityList } from 'src/app/store/actions/university.action';
import { Observable } from 'rxjs';
import { UniversityModel } from 'src/app/models/university.model';

@Component({
  selector: 'app-university-section-container',
  templateUrl: './university-section-container.component.html',
})
export class UniversitySectionContainerComponent implements OnInit {
  universities: Observable<UniversityModel[]>;

  constructor(private store: Store<any>) {
    this.universities = this.store.pipe(
      select(getUniversityList)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadUniversityList());
  }
}
