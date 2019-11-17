import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getPracticeProperty } from '../../store/selectors/practice.selector';
import { LoadPracticeProperty } from '../../store/actions/practice.action';

@Component({
  selector: 'app-practice-section-container',
  templateUrl: './practice-section-container.component.html',
})
export class PracticeSectionContainerComponent implements OnInit {
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.title = this.store.pipe(
      select(getPracticeProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getProperty('title');
  }

  getProperty(property: string) {
    this.store.dispatch(LoadPracticeProperty({ property }));
  }

  handleClickPractice(): void {
    alert('/pricing');
  }
}
