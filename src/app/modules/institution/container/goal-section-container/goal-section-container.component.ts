import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GoalModel } from '../../models/goal.model';
import { getGoalList, getGoalProperty } from '../../store/selectors/goal.selector';
import { LoadGoalList, LoadGoalProperty } from '../../store/actions/goal.action';

@Component({
  selector: 'app-goal-section-container',
  templateUrl: './goal-section-container.component.html',
})
export class GoalSectionContainerComponent implements OnInit {
  goals: Observable<GoalModel[]>;
  title: Observable<string>;
  checkIconUrl: Observable<string>;
  avatarUrl: Observable<string>;

  constructor(private store: Store<any>) {
    this.goals = this.store.pipe(
      select(getGoalList)
    );
    this.title = this.store.pipe(
      select(getGoalProperty, { property: 'title' })
    );
    this.checkIconUrl = this.store.pipe(
      select(getGoalProperty, { property: 'checkIconUrl' })
    );
    this.avatarUrl = this.store.pipe(
      select(getGoalProperty, { property: 'avatarUrl' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
    this.getProperty('checkIconUrl');
    this.getProperty('avatarUrl');
  }

  getList() {
    this.store.dispatch(LoadGoalList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadGoalProperty({ property }));
  }
}
