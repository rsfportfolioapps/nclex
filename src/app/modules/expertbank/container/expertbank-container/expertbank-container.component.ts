import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-expertbank-container',
  templateUrl: './expertbank-container.component.html',
  styleUrls: ['./expertbank-container.component.scss']
})
export class ExpertbankContainerComponent implements OnInit {
  practiceTitle: string;

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
