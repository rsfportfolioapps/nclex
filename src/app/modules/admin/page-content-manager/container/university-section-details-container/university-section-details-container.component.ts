import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-university-section-details-container',
  templateUrl: './university-section-details-container.component.html',
  styleUrls: ['./university-section-details-container.component.scss']
})
export class UniversitySectionDetailsContainerComponent implements OnInit {
  title: string;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  handleChange(updates) {
    // this.store.dispatch(
    //   PreviewHero({
    //     page: this.page,
    //     hero: updates
    //   })
    // )
  }

}
