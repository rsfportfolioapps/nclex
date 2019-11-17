import { Component, OnInit, Input } from '@angular/core';
import { InnovationModel } from '../../models/innovation.model';

@Component({
  selector: 'app-innovation-section',
  templateUrl: './innovation-section.component.html',
  styleUrls: ['./innovation-section.component.scss']
})
export class InnovationSectionComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() innovations: InnovationModel[];

  constructor() { }

  ngOnInit() {
  }

}
