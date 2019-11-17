import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExpertbankContainerComponent } from './container/expertbank-container/expertbank-container.component';
import { ExpertbankService } from 'src/app/services/expertbank.service';
import { AdvantagesSectionComponent } from './components/advantages-section/advantages-section.component';
import { AdvantageService } from './services/advantage.service';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { FeatureService } from './services/feature.service';
import { PerformanceSectionComponent } from './components/performance-section/performance-section.component';
import { PerformanceService } from './services/performance.service';
import { PracticeSectionComponent } from './components/practice-section/practice-section.component';
import { PracticeService } from './services/practice.service';
import { AdvantageSectionContainerComponent } from './container/advantage-section-container/advantage-section-container.component';
import { FeatureSectionContainerComponent } from './container/feature-section-container/feature-section-container.component';
import { PerformanceSectionContainerComponent } from './container/performance-section-container/performance-section-container.component';
import { PracticeSectionContainerComponent } from './container/practice-section-container/practice-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: ExpertbankContainerComponent,
  }
];

@NgModule({
  declarations: [
    ExpertbankContainerComponent,
    AdvantagesSectionComponent,
    FeaturesSectionComponent,
    PerformanceSectionComponent,
    PracticeSectionComponent,
    AdvantageSectionContainerComponent,
    FeatureSectionContainerComponent,
    PerformanceSectionContainerComponent,
    PracticeSectionContainerComponent
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
    ExpertbankService,
    AdvantageService,
    FeatureService,
    PerformanceService,
    PracticeService
  ]
})
export class ExpertbankModule { }
