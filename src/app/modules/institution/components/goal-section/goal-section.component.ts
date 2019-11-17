import { Component, OnInit, Input } from '@angular/core';
import { GoalModel } from '../../models/goal.model';

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.scss']
})
export class GoalSectionComponent implements OnInit {
  @Input() title: string;
  @Input() avatarUrl: string;
  @Input() checkIconUrl: string;
  @Input() goals: GoalModel[];

  constructor() { }

  ngOnInit() {
  }

}
