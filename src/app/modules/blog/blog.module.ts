import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { BlogContainerComponent } from './container/blog-container/blog-container.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { BlogService } from './services/blog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogSectionContainerComponent } from './container/blog-section-container/blog-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const bootstrapModules = [
  NgbModule
];

const routes: Routes = [
  {
    path: '',
    component: BlogContainerComponent,
  }
];

@NgModule({
  declarations: [
    BlogContainerComponent,
    BlogSectionComponent,
    BlogSectionContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNgModules,
    ...bootstrapModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ BlogService ]
})
export class BlogModule { }
