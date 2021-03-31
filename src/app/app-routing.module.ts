import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {path:'',redirectTo:'main' , pathMatch:'full'},
  
  {path:'auth',loadChildren:()=>import('./core/layouts/auth-layout/auth-module/auth-module.module')
  .then(m => m.AuthModuleModule)},
  
  {path:'main',loadChildren:()=>import('./core/layouts/main-layout/main-module/main-module.module')
  .then(m => m.MainModuleModule),
  // canActivate: [AuthGuard]
  },

  {path:'**',redirectTo:'error' , pathMatch:'full'},

  {path:'error',loadChildren:()=>import('./core/layouts/error-layout/error-module/error-module.module')
  .then(m => m.ErrorModuleModule)}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
