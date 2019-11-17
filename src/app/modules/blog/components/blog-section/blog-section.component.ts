import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { BlogModel, PaginateBlogModel } from '../../models/blog.model';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit, OnChanges {
  @Input() blogs: BlogModel[];
  @Input() pagination: PaginateBlogModel;
  @Output() paginate = new EventEmitter();

  pagination$: PaginateBlogModel;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.pagination) {
      this.pagination$ = {...changes.pagination.currentValue};
    }
  }

  handlePaginate(data: PaginateBlogModel) {
    this.paginate.emit(data);
  }

}
