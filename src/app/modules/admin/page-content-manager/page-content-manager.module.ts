import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PageContentManagerContainerComponent } from './container/page-content-manager-container/page-content-manager-container.component';
import { SidebarSectionComponent } from './components/sidebar-section/sidebar-section.component';
import { SidebarSectionListComponent } from './components/sidebar-section-list/sidebar-section-list.component';
import { HeroSectionDetailsComponent } from './components/hero-section-details/hero-section-details.component';
import { PreviewSectionComponent } from './components/preview-section/preview-section.component';
import { HeroSectionDetailsContainerComponent } from './container/hero-section-details-container/hero-section-details-container.component';
import { UniversitySectionDetailsComponent } from './components/university-section-details/university-section-details.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import {
  UniversitySectionDetailsContainerComponent
} from './container/university-section-details-container/university-section-details-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: PageContentManagerContainerComponent,
  }
];

const components = [
  SidebarSectionComponent,
  SidebarSectionListComponent,
  PreviewSectionComponent,
  SectionHeaderComponent,
  HeroSectionDetailsComponent,
  UniversitySectionDetailsComponent,
  PageContentManagerContainerComponent
];

const containers = [
  HeroSectionDetailsContainerComponent,
  UniversitySectionDetailsContainerComponent
];

@NgModule({
  declarations: [
    ...components,
    ...containers,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNgModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ ]
})
export class PageContentManagerModule { }
