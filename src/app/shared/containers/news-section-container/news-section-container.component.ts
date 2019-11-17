import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { NewsModel } from 'src/app/models/news.model';
import { getNewsList, getNewsProperty } from 'src/app/store/selectors/news.selector';
import { LoadNewsList, LoadNewsProperty } from 'src/app/store/actions/news.action';

@Component({
  selector: 'app-news-section-container',
  templateUrl: './news-section-container.component.html',
})
export class NewsSectionContainerComponent implements OnInit {
  news: Observable<NewsModel[]>;
  title: Observable<string>;

  constructor(private store: Store<any>) {
    this.news = this.store.pipe(
      select(getNewsList)
    );
    this.title = this.store.pipe(
      select(getNewsProperty, { property: 'title' })
    );
  }

  ngOnInit() {
    this.getList();
    this.getProperty('title');
  }

  getList() {
    this.store.dispatch(LoadNewsList());
  }

  getProperty(property: string) {
    this.store.dispatch(LoadNewsProperty({ property }));
  }
}
