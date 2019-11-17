import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getInfoProperty } from '../../store/selectors/info.selector';
import { LoadInfoProperty } from '../../store/actions/info.action';

@Component({
  selector: 'app-info-section-container',
  templateUrl: './info-section-container.component.html',
})
export class InfoSectionContainerComponent implements OnInit {
  title: Observable<string>;
  email: Observable<string>;
  details: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getInfoProperty, { property: 'title' })
    );
    this.email = this.store.pipe(
      select(getInfoProperty, { property: 'email' })
    );
    this.details = this.store.pipe(
      select(getInfoProperty, { property: 'details' })
    );
  }

  ngOnInit() {
    this.getProperty('title');
    this.getProperty('email');
    this.getProperty('details');
  }

  getProperty(property: string) {
    this.store.dispatch(LoadInfoProperty({ property }));
  }
}
