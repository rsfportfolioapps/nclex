import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { UniversityCarouselComponent } from './components/university-carousel/university-carousel.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InstitutionSectionComponent } from './components/institution-section/institution-section.component';
import { AccreditationSectionComponent } from './components/accreditation-section/accreditation-section.component';
import { ExpertbankSectionComponent } from './components/expertbank-section/expertbank-section.component';
import { FigureSectionComponent } from './components/figure-section/figure-section.component';
import { ElearningSectionComponent } from './components/elearning-section/elearning-section.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { RegistrationSectionComponent } from './components/registration-section/registration-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { SubscriptionSectionComponent } from './components/subscription-section/subscription-section.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { HeroService } from '../services/hero.service';
import { InstitutionService } from '../services/institution.service';
import { UniversityService } from '../services/university.service';
import { AccreditationService } from '../services/accreditation.service';
import { ExpertbankService } from '../services/expertbank.service';
import { FigureService } from '../services/figure.service';
import { ElearningService } from '../services/elearning.service';
import { NewsService } from '../services/news.service';
import { TestimonialService } from '../services/testimonial.service';
import { RegistrationService } from '../services/registration.service';
import { SubscriptionService } from '../services/subscription.service';
import { InstitutionSectionContainerComponent } from './containers/institution-section-container/institution-section-container.component';
import { ExpertbankSectionContainerComponent } from './containers/expertbank-section-container/expertbank-section-container.component';
import { HeroSectionContainerComponent } from './containers/hero-section-container/hero-section-container.component';
import { UniversitySectionContainerComponent } from './containers/university-section-container/university-section-container.component';
import {
  AccreditationSectionContainerComponent
} from './containers/accreditation-section-container/accreditation-section-container.component';
import { FigureSectionContainerComponent } from './containers/figure-section-container/figure-section-container.component';
import { ElearningSectionContainerComponent } from './containers/elearning-section-container/elearning-section-container.component';
import { NewsSectionContainerComponent } from './containers/news-section-container/news-section-container.component';
import {
  RegistrationSectionContainerComponent
} from './containers/registration-section-container/registration-section-container.component';
import { TestimonialSectionContainerComponent } from './containers/testimonial-section-container/testimonial-section-container.component';
import {
  SubscriptionSectionContainerComponent
} from './containers/subscription-section-container/subscription-section-container.component';
import { PostMessageService } from '../services/post-message.service';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

const bootstrapModules = [
  NgbModule
];

const components = [
  PageNotFoundComponent,
  HeaderNavigationComponent,
  FooterNavigationComponent,
  UniversityCarouselComponent,
  HeroSectionComponent,
  InstitutionSectionComponent,
  AccreditationSectionComponent,
  ExpertbankSectionComponent,
  FigureSectionComponent,
  ElearningSectionComponent,
  NewsSectionComponent,
  RegistrationSectionComponent,
  TestimonialSectionComponent,
  SubscriptionSectionComponent,
  LoginFormComponent
];

const containers = [
  HeroSectionContainerComponent,
  UniversitySectionContainerComponent,
  InstitutionSectionContainerComponent,
  AccreditationSectionContainerComponent,
  ExpertbankSectionContainerComponent,
  FigureSectionContainerComponent,
  ElearningSectionContainerComponent,
  NewsSectionContainerComponent,
  RegistrationSectionContainerComponent,
  TestimonialSectionContainerComponent,
  SubscriptionSectionContainerComponent,
  LoginFormContainerComponent
];

@NgModule({
  declarations: [
    ...components,
    ...containers
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules,
    ...bootstrapModules
  ],
  exports: [
    ...components,
    ...containers
  ],
  providers: [
    HeroService,
    UniversityService,
    InstitutionService,
    AccreditationService,
    ExpertbankService,
    FigureService,
    ElearningService,
    NewsService,
    TestimonialService,
    RegistrationService,
    SubscriptionService,
    PostMessageService
  ],
  entryComponents: [

  ]
})
export class SharedModule { }
