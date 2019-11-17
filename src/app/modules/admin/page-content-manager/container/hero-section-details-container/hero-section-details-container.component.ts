import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroModel } from 'src/app/models/hero.model';
import { Store, select } from '@ngrx/store';
import { getHeroByPage } from 'src/app/store/selectors/hero.selector';
import { LoadHero, PreviewHero } from 'src/app/store/actions/hero.action';

@Component({
  selector: 'app-hero-section-details-container',
  templateUrl: './hero-section-details-container.component.html',
})
export class HeroSectionDetailsContainerComponent implements OnInit {
  page = 'home';

  hero: Observable<HeroModel>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.hero = this.store.pipe(
      select(getHeroByPage, { page: this.page })
    );

    this.store.dispatch(
      LoadHero({ page: this.page })
    );
  }

  handleChange(updates) {
    this.store.dispatch(
      PreviewHero({
        page: this.page,
        hero: updates
      })
    );
  }
}
