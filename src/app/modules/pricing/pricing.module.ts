import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PricingContainerComponent } from './container/pricing-container/pricing-container.component';
import { PlanSectionComponent } from './components/plan-section/plan-section.component';
import { PlanService } from './services/plan.service';
import { PlanSectionContainerComponent } from './container/plan-section-container/plan-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: PricingContainerComponent,
  }
];

@NgModule({
  declarations: [
    PricingContainerComponent,
    PlanSectionComponent,
    PlanSectionContainerComponent
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
  providers: [ PlanService ]
})
export class PricingModule { }
