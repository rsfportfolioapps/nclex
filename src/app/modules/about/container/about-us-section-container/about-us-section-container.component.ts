import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AboutUsModel } from '../../models/about-us.model';
import { getAboutUsList } from '../../store/selectors/about-us.selector';
import { LoadAboutUsList } from '../../store/actions/about-us.action';

@Component({
  selector: 'app-about-us-section-container',
  templateUrl: './about-us-section-container.component.html'
})
export class AboutUsSectionContainerComponent implements OnInit {
  aboutUsList: Observable<AboutUsModel[]>;

  constructor(private store: Store<any>) {
    this.aboutUsList = this.store.pipe(
      select(getAboutUsList)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadAboutUsList());
  }
}
