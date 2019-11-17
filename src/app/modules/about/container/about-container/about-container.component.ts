import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
