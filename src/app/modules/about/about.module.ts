import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainerComponent } from './container/about-container/about-container.component';
import { AboutUsService } from './services/about-us.service';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { MotivationSectionComponent } from './components/motivation-section/motivation-section.component';
import { MotivationService } from './services/motivation.service';
import { AboutUsSectionContainerComponent } from './container/about-us-section-container/about-us-section-container.component';
import { MotivationSectionContainerComponent } from './container/motivation-section-container/motivation-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: AboutContainerComponent,
  }
];

@NgModule({
  declarations: [
    AboutContainerComponent,
    AboutUsSectionComponent,
    MotivationSectionComponent,
    AboutUsSectionContainerComponent,
    MotivationSectionContainerComponent
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
  providers: [ AboutUsService, MotivationService ]
})
export class AboutModule { }
