import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NclexContainerComponent } from './container/nclex-container/nclex-container.component';
import { PreparationSectionComponent } from './components/preparation-section/preparation-section.component';
import { PreparationService } from './services/preparation.service';
import { ImprovementSectionComponent } from './components/improvement-section/improvement-section.component';
import { ImprovementService } from './services/improvement.service';
import { InnovationSectionComponent } from './components/innovation-section/innovation-section.component';
import { InnovationService } from './services/innovation.service';
import { ImprovementSectionContainerComponent } from './container/improvement-section-container/improvement-section-container.component';
import { InnovationSectionContainerComponent } from './container/innovation-section-container/innovation-section-container.component';
import { PreparationSectionContainerComponent } from './container/preparation-section-container/preparation-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: NclexContainerComponent,
  }
];

@NgModule({
  declarations: [
    NclexContainerComponent,
    PreparationSectionComponent,
    ImprovementSectionComponent,
    InnovationSectionComponent,
    ImprovementSectionContainerComponent,
    InnovationSectionContainerComponent,
    PreparationSectionContainerComponent
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
    PreparationService,
    ImprovementService,
    InnovationService
  ]
})
export class NclexModule { }
