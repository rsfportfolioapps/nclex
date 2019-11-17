import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeroModel } from 'src/app/models/hero.model';
import { LoadHero } from 'src/app/store/actions/hero.action';
import { getHeroByPage } from 'src/app/store/selectors/hero.selector';

@Component({
  selector: 'app-hero-section-container',
  templateUrl: './hero-section-container.component.html',
})
export class HeroSectionContainerComponent implements OnInit {
  @Input() page: string;

  hero: Observable<HeroModel>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.hero = this.store.pipe(
      select(getHeroByPage, { page: this.page })
    );

    this.store.dispatch(
      LoadHero({ page: this.page })
    );
  }
}
