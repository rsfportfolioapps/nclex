import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-institution-container',
  templateUrl: './institution-container.component.html',
  styleUrls: ['./institution-container.component.scss']
})
export class InstitutionContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
