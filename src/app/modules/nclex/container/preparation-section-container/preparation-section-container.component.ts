import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PreparationModel } from '../../models/preparation.model';
import { getPreparationList, getPreparationProperty } from '../../store/selectors/preparation.selector';
import { LoadPreparationList, LoadPreparationProperty } from '../../store/actions/preparation.action';
@Component({
  selector: 'app-preparation-section-container',
  templateUrl: './preparation-section-container.component.html',
})
export class PreparationSectionContainerComponent implements OnInit {
  preparations: Observable<PreparationModel[]>;
  title: Observable<string>;
  imageUrl: Observable<string>;

  constructor(private store: Store<any>) {
    this.preparations = this.store.pipe(
      select(getPreparationList)
    );
    this.title = this.store.pipe(
      select(getPreparationProperty, { property: 'title' })
    );
    this.imageUrl = this.store.pipe(
      select(getPreparationProperty, { property: 'imageUrl' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('imageUrl');
  }

  getList() {
    this.store.dispatch(LoadPreparationList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadPreparationProperty({ property }));
  }
}
