import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
