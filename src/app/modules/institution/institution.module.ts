import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionContainerComponent } from './container/institution-container/institution-container.component';
import { HeroSectionComponent } from 'src/app/shared/components/hero-section/hero-section.component';
import { HeroService } from 'src/app/services/hero.service';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { WorkService } from './services/work.service';
import { BenefitSectionComponent } from './components/benefit-section/benefit-section.component';
import { BenefitService } from './services/benefit.service';
import { GoalSectionComponent } from './components/goal-section/goal-section.component';
import { GoalService } from './services/goal.service';
import { BenefitSectionContainerComponent } from './container/benefit-section-container/benefit-section-container.component';
import { GoalSectionContainerComponent } from './container/goal-section-container/goal-section-container.component';
import { WorkSectionContainerComponent } from './container/work-section-container/work-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: InstitutionContainerComponent,
  }
];

@NgModule({
  declarations: [
    InstitutionContainerComponent,
    WorkSectionComponent,
    BenefitSectionComponent,
    GoalSectionComponent,
    BenefitSectionContainerComponent,
    GoalSectionContainerComponent,
    WorkSectionContainerComponent
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
  providers: [
    WorkService,
    BenefitService,
    GoalService
  ]
})
export class InstitutionModule { }
