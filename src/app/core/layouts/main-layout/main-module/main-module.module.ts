import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainLayoutComponent } from '../main-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HeaderComponent } from 'src/app/core/header/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer/footer.component';
import { OrderComponent } from 'src/app/pages/order/order.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ActivationComponent } from 'src/app/pages/activation/activation.component';
import { UserguideComponent } from 'src/app/pages/userguide/userguide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    ContactComponent,
    UserguideComponent,
    ActivationComponent,
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    NgbModule
  ]
})
export class MainModuleModule { }
