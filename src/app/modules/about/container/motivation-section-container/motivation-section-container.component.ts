import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MotivationModel } from '../../models/motivation.model';
import { getMotivationList } from '../../store/selectors/motivation.selector';
import { LoadMotivationList } from '../../store/actions/motivation.action';

@Component({
  selector: 'app-motivation-section-container',
  templateUrl: './motivation-section-container.component.html'
})
export class MotivationSectionContainerComponent implements OnInit {
  motivations: Observable<MotivationModel[]>;

  constructor(private store: Store<any>) {
    this.motivations = this.store.pipe(
      select(getMotivationList)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadMotivationList());
  }
}
