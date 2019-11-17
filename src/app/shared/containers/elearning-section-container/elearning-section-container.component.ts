import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ElearningModel } from 'src/app/models/elearning.model';
import { getElearningList, getElearningProperty } from 'src/app/store/selectors/elearning.selector';
import { LoadElearningList, LoadElearningProperty } from 'src/app/store/actions/elearning.action';

@Component({
  selector: 'app-elearning-section-container',
  templateUrl: './elearning-section-container.component.html',
})
export class ElearningSectionContainerComponent implements OnInit {
  elearnings: Observable<ElearningModel[]>;
  title: Observable<string>;
  buttonText: Observable<string>;

  constructor(private store: Store<any>) {
    this.elearnings = this.store.pipe(
      select(getElearningList)
    );
    this.title = this.store.pipe(
      select(getElearningProperty, { property: 'title' })
    );
    this.buttonText = this.store.pipe(
      select(getElearningProperty, { property: 'buttonText' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('buttonText');
  }

  getList() {
    this.store.dispatch(LoadElearningList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadElearningProperty({ property }));
  }
}
