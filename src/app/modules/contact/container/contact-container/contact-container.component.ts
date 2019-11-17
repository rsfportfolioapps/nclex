import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
