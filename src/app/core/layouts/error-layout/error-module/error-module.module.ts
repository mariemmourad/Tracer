import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorModuleRoutingModule } from './error-module-routing.module';
import { NotfoundComponent } from 'src/app/pages/notfound/notfound.component';


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ErrorModuleRoutingModule,
    
  ]
})
export class ErrorModuleModule { }
