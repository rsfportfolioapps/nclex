import { Component, OnInit, Input } from '@angular/core';
import { PreparationModel } from '../../models/preparation.model';

@Component({
  selector: 'app-preparation-section',
  templateUrl: './preparation-section.component.html',
  styleUrls: ['./preparation-section.component.scss']
})
export class PreparationSectionComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() preparations: PreparationModel[];

  constructor() { }

  ngOnInit() {
  }

}
