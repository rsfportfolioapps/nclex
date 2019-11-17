import { Component, OnInit, Input } from '@angular/core';
import { WorkModel } from '../../models/work.model';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() works: WorkModel[];

  constructor() { }

  ngOnInit() {
  }

}
