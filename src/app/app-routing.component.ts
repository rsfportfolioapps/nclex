import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

/**
 * Lazy load all your modules here
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'faqs',
    loadChildren: './modules/faq/faq.module#FaqModule'
  },
  {
    path: 'expertbanks',
    loadChildren: './modules/expertbank/expertbank.module#ExpertbankModule'
  },
  {
    path: 'nclex-rn',
    loadChildren: './modules/nclex/nclex.module#NclexModule'
  },
  {
    path: 'institution',
    loadChildren: './modules/institution/institution.module#InstitutionModule'
  },
  {
    path: 'pricing',
    loadChildren: './modules/pricing/pricing.module#PricingModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'blog',
    loadChildren: './modules/blog/blog.module#BlogModule'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
