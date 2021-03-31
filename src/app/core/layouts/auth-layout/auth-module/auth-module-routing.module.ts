import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../auth-layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';


const routes: Routes = [

  {path:'', component: AuthLayoutComponent,children:[
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**',redirectTo:'error' , pathMatch:'full'},

  {path:'error',loadChildren:()=>import('../../error-layout/error-module/error-module.module')
    .then(m => m.ErrorModuleModule)},    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
