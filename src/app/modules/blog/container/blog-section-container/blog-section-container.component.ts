import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BlogModel, PaginateBlogModel } from '../../models/blog.model';
import { getBlogList, getBlogPagination } from '../../store/selectors/blog.selector';
import { LoadBlogList, PaginateBlogList } from '../../store/actions/blog.action';

@Component({
  selector: 'app-blog-section-container',
  templateUrl: './blog-section-container.component.html',
})
export class BlogSectionContainerComponent implements OnInit {
  blogs: Observable<BlogModel[]>;
  pagination: Observable<PaginateBlogModel>;

  constructor(private store: Store<any>) {
    this.blogs = this.store.pipe(
      select(getBlogList)
    );
    this.pagination = this.store.pipe(
      select(getBlogPagination)
    );
  }

  ngOnInit() {
    this.store.dispatch(LoadBlogList());
  }

  handlePaginate(pagination: PaginateBlogModel): void {
    this.store.dispatch(PaginateBlogList({ pagination }));
  }
}

