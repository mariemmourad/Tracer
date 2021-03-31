import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MainLayoutComponent } from '../../main-layout/main-layout.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ActivationComponent } from 'src/app/pages/activation/activation.component';
import { UserguideComponent } from 'src/app/pages/userguide/userguide.component';
import { OrderComponent } from 'src/app/pages/order/order.component';


const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'activation', component: ActivationComponent },
      { path: 'userguide', component: UserguideComponent },
      { path: 'order', component: OrderComponent },
      { path: '**', redirectTo: 'error', pathMatch: 'full' },

      {
        path: 'error', loadChildren: () => import('../../error-layout/error-module/error-module.module')
          .then(m => m.ErrorModuleModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
