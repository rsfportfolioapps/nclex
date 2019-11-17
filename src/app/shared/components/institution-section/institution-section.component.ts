import { Component, OnInit, Input } from '@angular/core';
import { InstitutionModel } from 'src/app/models/institution.model';

@Component({
  selector: 'app-institution-section',
  templateUrl: './institution-section.component.html',
  styleUrls: ['./institution-section.component.scss']
})
export class InstitutionSectionComponent implements OnInit {
  @Input() institutions: InstitutionModel[];

  constructor() { }

  ngOnInit() {
  }

}
