import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-pricing-container',
  templateUrl: './pricing-container.component.html',
  styleUrls: ['./pricing-container.component.scss']
})
export class PricingContainerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
