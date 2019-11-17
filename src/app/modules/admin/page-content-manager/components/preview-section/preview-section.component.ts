import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-section',
  templateUrl: './preview-section.component.html',
  styleUrls: ['./preview-section.component.scss']
})
export class PreviewSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleView(view: string) {
    console.log('@TODO: toggleView', view);
  }
}
