import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers } from './store/reducers/app.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.component';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UniversityEffects } from './store/effects/university.effect';
import { UniversityReducer } from './store/reducers/university.reducer';
import { environment } from 'src/environments/environment';
import { HeroReducer } from './store/reducers/hero.reducer';
import { HeroEffects } from './store/effects/hero.effect';
import { InstitutionReducer } from './store/reducers/institution.reducer';
import { InstitutionEffects } from './store/effects/institution.effect';
import { AccreditationEffects } from './store/effects/accreditation.effect';
import { AccreditationReducer } from './store/reducers/accreditation.reducer';
import { ExpertbankEffects } from './store/effects/expertbank.effect';
import { ExpertbankReducer } from './store/reducers/expertbank.reducer';
import { FigureEffects } from './store/effects/figure.effect';
import { FigureReducer } from './store/reducers/figure.reducer';
import { ElearningReducer } from './store/reducers/elearning.reducer';
import { ElearningEffects } from './store/effects/elearning.effect';
import { NewsEffects } from './store/effects/news.effect';
import { NewsReducer } from './store/reducers/news.reducer';
import { RegistrationReducer } from './store/reducers/registration.reducer';
import { RegistrationEffects } from './store/effects/registration.effect';
import { TestimonialReducer } from './store/reducers/testimonial.reducer';
import { TestimonialEffects } from './store/effects/testimonial.effect';
import { SubscriptionReducer } from './store/reducers/subscription.reducer';
import { SubscriptionEffects } from './store/effects/subscription.effect';
import { AboutUsEffects } from './modules/about/store/effects/about-us.effec';
import { AboutUsReducer } from './modules/about/store/reducers/about-us.reducer';
import { MotivationReducer } from './modules/about/store/reducers/motivation.reducer';
import { MotivationEffects } from './modules/about/store/effects/motivation.effect';
import { BlogReducer } from './modules/blog/store/reducers/blog.reducer';
import { BlogEffects } from './modules/blog/store/effects/blog.effect';
import { QuestionReducer } from './modules/contact/store/reducers/question.reducer';
import { QuestionEffects } from './modules/contact/store/effects/question.effect';
import { InfoReducer } from './modules/contact/store/reducers/info.reducer';
import { InfoEffects } from './modules/contact/store/effects/info.effect';
import { AdvantageReducer } from './modules/expertbank/store/reducers/advantage.reducer';
import { AdvantageEffects } from './modules/expertbank/store/effects/advantage.effect';
import { FeatureReducer } from './modules/expertbank/store/reducers/feature.reducer';
import { FeatureEffects } from './modules/expertbank/store/effects/feature.effect';
import { PerformanceReducer } from './modules/expertbank/store/reducers/performance.reducer';
import { PerformanceEffects } from './modules/expertbank/store/effects/performance.effect';
import { PracticeReducer } from './modules/expertbank/store/reducers/practice.reducer';
import { PracticeEffects } from './modules/expertbank/store/effects/practice.effect';
import { FaqEffects } from './modules/faq/store/effects/faq.effect';
import { FaqReducer } from './modules/faq/store/reducers/faq.reducer';
import { BenefitReducer } from './modules/institution/store/reducers/benefit.reducer';
import { BenefitEffects } from './modules/institution/store/effects/benefit.effect';
import { GoalReducer } from './modules/institution/store/reducers/goal.reducer';
import { GoalEffects } from './modules/institution/store/effects/goal.effect';
import { WorkReducer } from './modules/institution/store/reducers/work.reducer';
import { WorkEffects } from './modules/institution/store/effects/work.effect';
import { ImprovementReducer } from './modules/nclex/store/reducers/improvement.reducer';
import { ImprovementEffects } from './modules/nclex/store/effects/improvement.effect';
import { InnovationReducer } from './modules/nclex/store/reducers/innovation.reducer';
import { InnovationEffects } from './modules/nclex/store/effects/innovation.effect';
import { PreparationReducer } from './modules/nclex/store/reducers/preparation.reducer';
import { PreparationEffects } from './modules/nclex/store/effects/preparation.effect';
import { PlanEffects } from './modules/pricing/store/effects/plan.effect';
import { PlanReducer } from './modules/pricing/store/reducers/plan.reducer';

const materialModules = [];

const primeNgModules = [];

const rootReducers = {
  university: UniversityReducer,
  hero: HeroReducer,
  institution: InstitutionReducer,
  accreditation: AccreditationReducer,
  expertbank: ExpertbankReducer,
  figure: FigureReducer,
  elearning: ElearningReducer,
  news: NewsReducer,
  registration: RegistrationReducer,
  testimonial: TestimonialReducer,
  subscription: SubscriptionReducer,
  aboutUs: AboutUsReducer,
  motivation: MotivationReducer,
  blog: BlogReducer,
  question: QuestionReducer,
  info: InfoReducer,
  advantage: AdvantageReducer,
  feature: FeatureReducer,
  performance: PerformanceReducer,
  practice: PracticeReducer,
  faq: FaqReducer,
  benefit: BenefitReducer,
  goal: GoalReducer,
  work: WorkReducer,
  improvement: ImprovementReducer,
  innovation: InnovationReducer,
  preparation: PreparationReducer,
  plan: PlanReducer
};

const effects = [
  UniversityEffects,
  HeroEffects,
  InstitutionEffects,
  AccreditationEffects,
  ExpertbankEffects,
  FigureEffects,
  ElearningEffects,
  NewsEffects,
  RegistrationEffects,
  TestimonialEffects,
  SubscriptionEffects,
  AboutUsEffects,
  MotivationEffects,
  BlogEffects,
  QuestionEffects,
  InfoEffects,
  AdvantageEffects,
  FeatureEffects,
  PerformanceEffects,
  PracticeEffects,
  FaqEffects,
  BenefitEffects,
  GoalEffects,
  WorkEffects,
  ImprovementEffects,
  InnovationEffects,
  PreparationEffects,
  PlanEffects
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNgModules,
    TranslateModule.forRoot(),
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'NCLEX-RN Store App',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
