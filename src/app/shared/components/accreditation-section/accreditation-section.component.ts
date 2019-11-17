import { Component, OnInit, Input } from '@angular/core';
import { AccreditationModel } from 'src/app/models/accreditation.model';

@Component({
  selector: 'app-accreditation-section',
  templateUrl: './accreditation-section.component.html',
  styleUrls: ['./accreditation-section.component.scss']
})
export class AccreditationSectionComponent implements OnInit {
  @Input() title: string;
  @Input() accreditations: AccreditationModel[];

  constructor() { }

  ngOnInit() {
  }

}
