import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';

@Component({
  encapsulation: ViewEncapsulation.None, // for scss reasons
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  errorMessage: string;

  subscriptionTitle: string;

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
