import { Component, OnInit, Input } from '@angular/core';
import { FigureModel } from 'src/app/models/figure.model';

@Component({
  selector: 'app-figure-section',
  templateUrl: './figure-section.component.html',
  styleUrls: ['./figure-section.component.scss']
})
export class FigureSectionComponent implements OnInit {
  @Input() figures: FigureModel[];

  constructor() { }

  ngOnInit() {
  }

}
