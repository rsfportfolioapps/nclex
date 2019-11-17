import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss']
})
export class FaqContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
