import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DasboardContainerComponent } from './dashboard/container/dasboard-container/dasboard-container.component';
import { AuthGuard } from './auth/helpers/auth.guard';
import { AuthenticationService } from './auth/services/authentication.service';
import { AdminLoginContainerComponent } from './login/container/admin-login-container/admin-login-container.component';
import { AdminLoginFormComponent } from './login/components/admin-login-form/admin-login-form.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: 'login',
    component: AdminLoginContainerComponent,
  },
  {
    path: 'dashboard',
    component: DasboardContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-content-manager',
    loadChildren: './page-content-manager/page-content-manager.module#PageContentManagerModule',
    canActivate: [AuthGuard]
  },
];

const components = [
  AdminLoginFormComponent
];

const containers = [
  DasboardContainerComponent,
  AdminLoginContainerComponent
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
  providers: [ AuthenticationService ]
})
export class AdminModule { }
