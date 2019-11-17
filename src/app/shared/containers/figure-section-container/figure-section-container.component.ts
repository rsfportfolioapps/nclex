import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FigureModel } from 'src/app/models/figure.model';
import { Store, select } from '@ngrx/store';
import { getFigureList } from 'src/app/store/selectors/figure.selector';
import { LoadFigureList } from 'src/app/store/actions/figure.action';

@Component({
  selector: 'app-figure-section-container',
  templateUrl: './figure-section-container.component.html',
})
export class FigureSectionContainerComponent implements OnInit {
  figures: Observable<FigureModel[]>;

  constructor(private store: Store<any>) {
    this.figures = this.store.pipe(
      select(getFigureList)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadFigureList());
  }
}
