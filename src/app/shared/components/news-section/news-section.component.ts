import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
  @Input() title: string;
  @Input() newsList: NewsModel[];

  constructor() { }

  ngOnInit() {
  }

}
