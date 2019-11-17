import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-section-details',
  templateUrl: './hero-section-details.component.html',
  styleUrls: ['./hero-section-details.component.scss']
})
export class HeroSectionDetailsComponent implements OnInit {
  @Input() hero: HeroModel;
  @Output() inputChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.inputChange.emit({ [name]: value });
  }
}
