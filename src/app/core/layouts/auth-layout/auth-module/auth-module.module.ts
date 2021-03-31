import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthLayoutComponent } from '../auth-layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ]
})
export class AuthModuleModule { }
