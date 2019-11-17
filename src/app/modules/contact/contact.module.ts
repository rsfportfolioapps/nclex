import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ContactContainerComponent } from './container/contact-container/contact-container.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';
import { QuestionService } from './services/question.service';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { InfoService } from './services/info.service';
import { QuestionSectionContainerComponent } from './container/question-section-container/question-section-container.component';
import { InfoSectionContainerComponent } from './container/info-section-container/info-section-container.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: ContactContainerComponent,
  }
];

@NgModule({
  declarations: [
    ContactContainerComponent,
    QuestionSectionComponent,
    InfoSectionComponent,
    QuestionSectionContainerComponent,
    InfoSectionContainerComponent
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
  providers: [ QuestionService, InfoService ]
})
export class ContactModule { }
